import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "feminine",
        childTerm: "girl",
        adultTerm: "woman",
        combined: "she/her",
        subjectPronoun: "she",
        objectPronoun: "her",
        indirectPronoun: "her",
        possessiveAdjective: "her",
        reflexivePronoun: "herself",
        demonstrative: "this",
        indeterminateArticle: "a",
        genderAdjective: "feminine",
        pluralSubjectPronoun: "they",
        pluralPossessiveAdjective: "their",
        title: "miss",
        shortTitle: "ms"
    },
    M: {
        ...general.M,
        genderName: "masculine",
        childTerm: "boy",
        adultTerm: "man",
        combined: "he/him",
        subjectPronoun: "he",
        objectPronoun: "him",
        indirectPronoun: "him",
        possessiveAdjective: "his",
        reflexivePronoun: "himself",
        demonstrative: "this",
        indeterminateArticle: "a",
        genderAdjective: "masculine",
        pluralSubjectPronoun: "they",
        pluralPossessiveAdjective: "their",
        title: "mister",
        shortTitle: "mr"
    },
    X: {
        ...general.X,
        genderName: "neutral",
        childTerm: "child",
        adultTerm: "adult",
        combined: "they/them",
        subjectPronoun: "they",
        objectPronoun: "them",
        indirectPronoun: "them",
        possessiveAdjective: "their",
        reflexivePronoun: "themself",
        demonstrative: "this",
        indeterminateArticle: "a",
        genderAdjective: "neutral",
        pluralSubjectPronoun: "they",
        pluralPossessiveAdjective: "their",
        title: "mix",
        shortTitle: "mx"
    }
} as GenderCollection