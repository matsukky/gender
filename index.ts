import { AvalaibleGender, AvalaibleLanguage, GenderCollection, GenderData } from './types';
import { getGenderRole } from './utils';

import en from './locale/en'
export let L = <AvalaibleLanguage> 'en' 
export const Ls = <{ [key: string]: GenderCollection }> {}
Ls[L] = en

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


export function gender(gender: AvalaibleGender, { capitalize, args, language = L }: { capitalize: boolean; args: string[]; language: AvalaibleLanguage }): GenderData {
  gender = getGenderRole(gender)
  if (!Ls[language]) {
    console.warn(`[GENDER] The language "${language}" as not been loaded.`)
    language = L
  }
  const result = { ...Ls[language][gender] } as GenderData & { args?: string }
  if (capitalize) {
    Object.keys(result).forEach(key => {
      if (typeof result[key] === 'string') {
        result[key] = toCapitalize(result[key] as string)
      }
    })
  }

  if (args && Array.isArray(args)) {
    result.args = args[gender === "F" ? 0 : gender === "X" ? 1 : 2] || ""
  }
  return result
}

export default gender