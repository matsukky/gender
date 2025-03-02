import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "féminin",
        childTerm: "fille",
        adultTerm: "femme",
        combined: "elle",
        subjectPronoun: "elle",
        objectPronoun: "la",
        indirectPronoun: "elle",
        possessiveAdjective: "sa",
        reflexivePronoun: "elle-même",
        demonstrative: "cette",
        indeterminateArticle: "une",
        genderAdjective: "féminine",
        pluralSubjectPronoun: "elles",
        pluralPossessiveAdjective: "leurs",
        title: "madame",
        shortTitle: "mme"
    },
    M: {
        ...general.M,
        genderName: "masculin",
        childTerm: "garçon",
        adultTerm: "homme",
        combined: "il/lui",
        subjectPronoun: "il",
        objectPronoun: "le",
        indirectPronoun: "lui",
        possessiveAdjective: "son",
        reflexivePronoun: "lui-même",
        demonstrative: "ce",
        indeterminateArticle: "un",
        genderAdjective: "masculine",
        pluralSubjectPronoun: "ils",
        pluralPossessiveAdjective: "leurs",
        title: "monsieur",
        shortTitle: "m."
    },
    X: {
        ...general.X,
        genderName: "neutre",
        childTerm: "enfant",
        adultTerm: "adulte",
        combined: "iel",
        subjectPronoun: "iel",
        objectPronoun: "lea",
        indirectPronoun: "ellui",
        possessiveAdjective: "son",
        reflexivePronoun: "iel-même",
        demonstrative: "ce",
        indeterminateArticle: "un·e",
        genderAdjective: "neutre",
        pluralSubjectPronoun: "iels",
        pluralPossessiveAdjective: "leurs",
        title: "mx",
        shortTitle: "mx"
        
    }
} as GenderCollection
