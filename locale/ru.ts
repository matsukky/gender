import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "женский",
        childTerm: "девочка",
        adultTerm: "женщина",
        subjectPronoun: "она",
        objectPronoun: "её",
        indirectPronoun: "ей",
        possessiveAdjective: "её",
        reflexivePronoun: "себя",
        demonstrative: "эта",
        indeterminateArticle: "одна",
        genderAdjective: "женский",
        pluralSubjectPronoun: "они",
        pluralPossessiveAdjective: "их",
        title: "госпожа",
        shortTitle: "г-жа",
        combined: "она/её"
    },
    M: {
        ...general.M,
        genderName: "мужской",
        childTerm: "мальчик",
        adultTerm: "мужчина",
        subjectPronoun: "он",
        objectPronoun: "его",
        indirectPronoun: "ему",
        possessiveAdjective: "его",
        reflexivePronoun: "себя",
        demonstrative: "этот",
        indeterminateArticle: "один",
        genderAdjective: "мужской",
        pluralSubjectPronoun: "они",
        pluralPossessiveAdjective: "их",
        title: "господин",
        shortTitle: "г-н",
        combined: "он/его"
    },
    X: {
        ...general.X,
        genderName: "нейтральный",
        childTerm: "ребёнок",
        adultTerm: "взрослый",
        subjectPronoun: "оно",
        objectPronoun: "его",
        indirectPronoun: "ему",
        possessiveAdjective: "его",
        reflexivePronoun: "себя",
        demonstrative: "это",
        indeterminateArticle: "одно",
        genderAdjective: "нейтральный",
        pluralSubjectPronoun: "они",
        pluralPossessiveAdjective: "их",
        title: "микс",
        shortTitle: "мкс",
        combined: "они/их"
    }
} as GenderCollection