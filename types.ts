export interface GenderCollection {
    F: GenderData
    M: GenderData
    X: GenderData
  }
  
export interface GenderData {
  emoji: string
  colors: string[]
  genderName: string
  childTerm: string
  adultTerm: string
  subjectPronoun: string
  objectPronoun: string
  indirectPronoun: string
  possessiveAdjective: string
  reflexivePronoun: string
  demonstrative: string
  indeterminateArticle: string
  genderAdjective: string
  pluralSubjectPronoun: string
  pluralPossessiveAdjective: string
}

export type AvalaibleGender = 'F' | '♀' | 'WOMAN' | 'GIRL' | 'M' | 'H' | '♂' | 'MAN' | 'MEN' | 'BOY' | 'X' | 'N' | '⚧' | 'NEUTRAL';

export type AvalaibleLanguage = 'en' | 'fr' | 'de' | 'es' | 'it' | 'jp' | 'zh' | 'ar' | 'ru'