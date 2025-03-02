import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        combined: "lei/ella",
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
        title: "signora",
        shortTitle: "sig.ra"
    },
    M: {
        ...general.M,
        combined: "lui/egli",
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
        title: "signore",
        shortTitle: "sig"
    },
    X: {
        ...general.X,
        combined: "loro",
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
        title: "mix",
        shortTitle: "mx"
    }
} as GenderCollection