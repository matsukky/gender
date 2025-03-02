import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "女性",
        childTerm: "女孩",
        adultTerm: "女性",
        subjectPronoun: "她",
        objectPronoun: "她",
        indirectPronoun: "她",
        possessiveAdjective: "她的",
        reflexivePronoun: "她自己",
        demonstrative: "这",
        indeterminateArticle: "一个",
        genderAdjective: "女性的",
        pluralSubjectPronoun: "她们",
        pluralPossessiveAdjective: "她们的",
        title: "女士",
        shortTitle: "女",
        combined: "她/她的"
    },
    M: {
        ...general.M,
        genderName: "男性",
        childTerm: "男孩",
        adultTerm: "男性",
        subjectPronoun: "他",
        objectPronoun: "他",
        indirectPronoun: "他",
        possessiveAdjective: "他的",
        reflexivePronoun: "他自己",
        demonstrative: "这",
        indeterminateArticle: "一个",
        genderAdjective: "男性的",
        pluralSubjectPronoun: "他们",
        pluralPossessiveAdjective: "他们的",
        title: "先生",
        shortTitle: "男",
        combined: "他/他的"
    },
    X: {
        ...general.X,
        genderName: "中性",
        childTerm: "孩子",
        adultTerm: "成人",
        subjectPronoun: "ta",
        objectPronoun: "ta",
        indirectPronoun: "ta",
        possessiveAdjective: "ta的",
        reflexivePronoun: "ta自己",
        demonstrative: "这",
        indeterminateArticle: "一个",
        genderAdjective: "中性的",
        pluralSubjectPronoun: "他们",
        pluralPossessiveAdjective: "他们的",
        title: "同志",
        shortTitle: "X",
        combined: "它/它的"
    }
} as GenderCollection