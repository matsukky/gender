import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "مؤنث",
        childTerm: "فتاة",
        adultTerm: "امرأة",
        subjectPronoun: "هي",
        objectPronoun: "ها",
        indirectPronoun: "لها",
        possessiveAdjective: "ها",
        reflexivePronoun: "نفسها",
        demonstrative: "هذه",
        indeterminateArticle: "واحدة",
        genderAdjective: "أنثوي",
        pluralSubjectPronoun: "هن",
        pluralPossessiveAdjective: "هن"
    },
    M: {
        ...general.M,
        genderName: "مذكر",
        childTerm: "صبي",
        adultTerm: "رجل",
        subjectPronoun: "هو",
        objectPronoun: "ه",
        indirectPronoun: "له",
        possessiveAdjective: "ه",
        reflexivePronoun: "نفسه",
        demonstrative: "هذا",
        indeterminateArticle: "واحد",
        genderAdjective: "ذكري",
        pluralSubjectPronoun: "هم",
        pluralPossessiveAdjective: "هم"
    },
    X: {
        ...general.X,
        genderName: "محايد",
        childTerm: "طفل",
        adultTerm: "بالغ",
        subjectPronoun: "هو/هي",
        objectPronoun: "ه/ها",
        indirectPronoun: "له/لها",
        possessiveAdjective: "ه/ها",
        reflexivePronoun: "نفسه/نفسها",
        demonstrative: "هذا/هذه",
        indeterminateArticle: "واحد/واحدة",
        genderAdjective: "محايد",
        pluralSubjectPronoun: "هم/هن",
        pluralPossessiveAdjective: "هم/هن"
    }
} as GenderCollection