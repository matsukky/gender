import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "femenino",
        childTerm: "niña",
        adultTerm: "mujer",
        subjectPronoun: "ella",
        objectPronoun: "la",
        indirectPronoun: "ella",
        possessiveAdjective: "su",
        reflexivePronoun: "ella misma",
        demonstrative: "esta",
        indeterminateArticle: "una",
        genderAdjective: "femenina",
        pluralSubjectPronoun: "ellas",
        pluralPossessiveAdjective: "sus",
        title: "señora",
        shortTitle: "sra",
        combined: "ella"
    },
    M: {
        ...general.M,
        genderName: "masculino",
        childTerm: "niño",
        adultTerm: "hombre",
        subjectPronoun: "él",
        objectPronoun: "lo",
        indirectPronoun: "él",
        possessiveAdjective: "su",
        reflexivePronoun: "él mismo",
        demonstrative: "este",
        indeterminateArticle: "un",
        genderAdjective: "masculina",
        pluralSubjectPronoun: "ellos",
        pluralPossessiveAdjective: "sus",
        title: "señor",
        shortTitle: "sr",
        combined: "él"
    },
    X: {
        ...general.X,
        genderName: "neutro",
        childTerm: "niñe",
        adultTerm: "adulte",
        subjectPronoun: "elle",
        objectPronoun: "le",
        indirectPronoun: "elle",
        possessiveAdjective: "su",
        reflexivePronoun: "elle misma",
        demonstrative: "este",
        indeterminateArticle: "une",
        genderAdjective: "neutro",
        pluralSubjectPronoun: "elles",
        pluralPossessiveAdjective: "sus",
        title: "mix",
        shortTitle: "mx",
        combined: "elle"
    }
} as GenderCollection