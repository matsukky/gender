import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "weiblich",
        childTerm: "Mädchen",
        adultTerm: "Frau",
        subjectPronoun: "sie",
        objectPronoun: "sie",
        indirectPronoun: "ihr",
        possessiveAdjective: "ihre",
        reflexivePronoun: "sich selbst",
        demonstrative: "diese",
        indeterminateArticle: "eine",
        genderAdjective: "weiblich",
        pluralSubjectPronoun: "sie",
        pluralPossessiveAdjective: "ihre",
        title: "frau",
        shortTitle: "fr",
        combined: "sie/ihr"
    },
    M: {
        ...general.M,
        genderName: "männlich",
        childTerm: "Junge",
        adultTerm: "Mann",
        subjectPronoun: "er",
        objectPronoun: "ihn",
        indirectPronoun: "ihm",
        possessiveAdjective: "sein",
        reflexivePronoun: "sich selbst",
        demonstrative: "dieser",
        indeterminateArticle: "ein",
        genderAdjective: "männlich",
        pluralSubjectPronoun: "sie",
        pluralPossessiveAdjective: "ihre",
        title: "herr",
        shortTitle: "hr",
        combined: "er/ihm"
    },
    X: {
        ...general.X,
        genderName: "neutral",
        childTerm: "Kind",
        adultTerm: "Erwachsener",
        subjectPronoun: "es",
        objectPronoun: "es",
        indirectPronoun: "ihm",
        possessiveAdjective: "sein",
        reflexivePronoun: "sich selbst",
        demonstrative: "dieses",
        indeterminateArticle: "ein",
        genderAdjective: "neutral",
        pluralSubjectPronoun: "sie",
        pluralPossessiveAdjective: "ihre",
        title: "mix",
        shortTitle: "mx",
        combined: "sie/ihnen"
    }
} as GenderCollection