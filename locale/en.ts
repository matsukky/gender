import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "feminine",
        childTerm: "girl",
        adultTerm: "woman",
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
        title: "Miss/Mrs",
        shortTitle: "Ms"
    },
    M: {
        ...general.M,
        genderName: "masculine",
        childTerm: "boy",
        adultTerm: "man",
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
        title: "Mister",
        shortTitle: "Mr"
    },
    X: {
        ...general.X,
        genderName: "neutral",
        childTerm: "child",
        adultTerm: "adult",
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
        title: "Mix",
        shortTitle: "Mx"
    }
} as GenderCollection