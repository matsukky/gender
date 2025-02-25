import { AvalaibleGender, AvalaibleLanguage, GenderCollection, GenderData } from './types';
import { getGenderRole } from './utils';

import en from './locale/en'
export let L = <AvalaibleLanguage> 'en' 
export const Ls = <{ [key: string]: GenderCollection }> {}
Ls[L] = en

export * as Types from './types'

function toCapitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export async function locale(language: AvalaibleLanguage = 'fr', define = true): Promise<GenderCollection> {
  try {
    if (Ls[language]) {
      console.log(`[GENDER] The language "${language}" is already loaded.`)
      return Ls[language]
    }
    let genders = await import(`./locale/${language}`)
    Ls[language] = genders.default
    if (define) L = language
    return genders.default
  } catch (error) {
    console.warn(`[GENDER] The language "${language}" is not supported or have enconter an error.`)
    return en as unknown as GenderCollection
  }
}

export function gender(gender: AvalaibleGender, options: { capitalize?: boolean; custom?: Record<string, Record<'F' | 'M' | 'X', string>>; language?: AvalaibleLanguage } = {}): GenderData {
  const { capitalize = false, custom = {} } = options;
  let { language = L } = options;
  gender = getGenderRole(gender)
  if (!Ls[language]) {
    console.warn(`[GENDER] The language "${language}" has not been loaded.`)
    language = L
  }
  const result = { ...Ls[language][gender] } as GenderData & { [key: string]: any }

  Object.keys(custom).forEach(key => {
    if (custom[key] && custom[key][gender]) {
      result[key] = custom[key][gender];
    }
  });

  if (capitalize) {
    Object.keys(result).forEach(key => {
      if (typeof result[key] === 'string') {
        result[key] = toCapitalize(result[key] as string)
      }
    })
  }
  
  return result
}

export default gender