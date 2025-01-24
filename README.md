<div align="center">
    <h1 style="border-bottom: none">
        <img src="https://raw.githubusercontent.com/matsukky/gender/d1b713526398f4d53416bbd6b0d9a13317b00991/gender.svg" width="150" height="150">
        <b>
            <h1>Gender</h1>
        </b>
        Easy list of gender terms in several languages.
        <br>
        <h4>English - French - Spanish - Italian - German - Japanese - Chinese - Arabic - Russian</h4>
    </h1>
</div>

This library provides a comprehensive way to handle gender representation in various languages. It includes gender data, localization support.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Types](#types)

## Installation

To install the library, use npm, yarn or bun:

```bash
npm install @matsukky/gender
```
```bash
yarn add @matsukky/gender
```
```bash
bun add @matsukky/gender
```

## Usage

Load a specific language for gender terms.

```typescript
import Gender, { locale } from '@matsukky/gender';

await locale('fr');
const gender = Gender('F', { capitalize: true, custom: ['petite', 'petit·e', 'petit'] })
console.log(gender.genderName).genderName; // "Femme"
console.log(gender.genderName).custom; // "Petite"

```

## Types

### GenderCollection

```typescript
export interface GenderCollection {
  F: GenderData;
  M: GenderData;
  X: GenderData;
}
```

### GenderData

```typescript
export interface GenderData {
  emoji: string;
  colors: string[];
  genderName: string;
  childTerm: string;
  adultTerm: string;
  subjectPronoun: string;
  objectPronoun: string;
  indirectPronoun: string;
  possessiveAdjective: string;
  reflexivePronoun: string;
  demonstrative: string;
  indeterminateArticle: string;
  genderAdjective: string;
  pluralSubjectPronoun: string;
  pluralPossessiveAdjective: string;
  custom: string | null
}
```

### Avalaible Gender Key
| Role | Values                                    |
|------|-------------------------------------------|
| F    | F, ♀, WOMAN, GIRL, FEMALE                |
| M    | M, H, ♂, MAN, MEN, BOY, MALE             |
| X    | X, N, ⚧, NEUTRAL, HUMAN                  |
