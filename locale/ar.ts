import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        combined: "هي/ها",
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
        pluralPossessiveAdjective: "هن",
        title: "سيدة",
        shortTitle: "س"
    },
    M: {
        ...general.M,
        combined: "هو/ه",
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
        pluralPossessiveAdjective: "هم",
        title: "سيد",
        shortTitle: "س"
    },
    X: {
        ...general.X,
        combined: "هم/هن",
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
        pluralPossessiveAdjective: "هم/هن",
        title: "مكس",
        shortTitle: "مك"
    }
} as GenderCollection