import { AvalaibleGender, AvalaibleLanguage, GenderCollection, GenderData } from './types';
import { getGenderRole } from './utils';

export * as Types from './types'

import en from './locale/en'
export let L = <AvalaibleLanguage> 'en' 
export const Ls = <{ [key: string]: GenderCollection }> {}
Ls[L] = en
export const DefaultElements = <{ [key in AvalaibleLanguage]?: Record<string, Record<'F' | 'M' | 'X', string>> }> {}

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

/**
 * Ajoute des éléments par défaut pour une langue spécifique
 * @param language La langue cible
 * @param elements Les éléments à ajouter par défaut
 */
export function addDefaults(language: AvalaibleLanguage, elements: Record<string, Record<'F' | 'M' | 'X', string>>): void {
  if (!DefaultElements[language]) {
    DefaultElements[language] = {};
  }
  
  DefaultElements[language] = {
    ...DefaultElements[language],
    ...elements
  };
}

export function gender<
  T extends Record<string, Record<'F' | 'M' | 'X', string>>,
  D extends Record<string, Record<'F' | 'M' | 'X', string>> = typeof DefaultElements[typeof L]
>(
  gender: AvalaibleGender,
  options: {
    capitalize?: boolean;
    custom?: T;
    language?: AvalaibleLanguage 
  } = {}
): GenderData & { [K in keyof T]: string } & { [K in keyof D]: string } {
  const { capitalize = false, custom = {} as T } = options;
  let { language = L } = options;
  gender = getGenderRole(gender)
  if (!Ls[language]) {
    console.warn(`[GENDER] The language "${language}" has not been loaded.`)
    language = L
  }
  const result = { ...Ls[language][gender] } as GenderData & { [key: string]: any }

  if (DefaultElements[language]) {
    Object.keys(DefaultElements[language]).forEach(key => {
      if (DefaultElements[language][key] && DefaultElements[language][key][gender]) {
        result[key] = DefaultElements[language][key][gender];
      }
    });
  }

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