import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "féminin",
        childTerm: "fille",
        adultTerm: "femme",
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
        title: "Madame",
        shortTitle: "Mme"
    },
    M: {
        ...general.M,
        genderName: "masculin",
        childTerm: "garçon",
        adultTerm: "homme",
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
        title: "Monsieur",
        shortTitle: "M."
    },
    X: {
        ...general.X,
        genderName: "neutre",
        childTerm: "enfant",
        adultTerm: "adulte",
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
        title: "Mx",
        shortTitle: "Mx"
        
    }
} as GenderCollection
