import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "femminile",
        childTerm: "ragazza",
        adultTerm: "donna",
        subjectPronoun: "lei",
        objectPronoun: "la",
        indirectPronoun: "le",
        possessiveAdjective: "sua",
        reflexivePronoun: "se stessa",
        demonstrative: "questa",
        indeterminateArticle: "una",
        genderAdjective: "femminile",
        pluralSubjectPronoun: "loro",
        pluralPossessiveAdjective: "loro",
        title: "Signora",
        shortTitle: "Sig.ra"
    },
    M: {
        ...general.M,
        genderName: "maschile",
        childTerm: "ragazzo",
        adultTerm: "uomo",
        subjectPronoun: "lui",
        objectPronoun: "lo",
        indirectPronoun: "gli",
        possessiveAdjective: "suo",
        reflexivePronoun: "se stesso",
        demonstrative: "questo",
        indeterminateArticle: "un",
        genderAdjective: "maschile",
        pluralSubjectPronoun: "loro",
        pluralPossessiveAdjective: "loro",
        title: "Signore",
        shortTitle: "Sig"
    },
    X: {
        ...general.X,
        genderName: "neutro",
        childTerm: "bambino/a",
        adultTerm: "adulto/a",
        subjectPronoun: "lui/lei",
        objectPronoun: "lo/la",
        indirectPronoun: "gli/le",
        possessiveAdjective: "suo/sua",
        reflexivePronoun: "se stesso/a",
        demonstrative: "questo/a",
        indeterminateArticle: "un/una",
        genderAdjective: "neutro",
        pluralSubjectPronoun: "loro",
        pluralPossessiveAdjective: "loro",
        title: "Mix",
        shortTitle: "Mx"
    }
} as GenderCollection