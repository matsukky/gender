import { general } from "../utils";
import { GenderCollection } from "../types";

export default {
    F: {
        ...general.F,
        genderName: "女性",
        childTerm: "女の子",
        adultTerm: "女性",
        subjectPronoun: "彼女",
        objectPronoun: "彼女を",
        indirectPronoun: "彼女に",
        possessiveAdjective: "彼女の",
        reflexivePronoun: "自分自身",
        demonstrative: "この",
        indeterminateArticle: "ある",
        genderAdjective: "女性の",
        pluralSubjectPronoun: "彼女たち",
        pluralPossessiveAdjective: "彼女たちの"
    },
    M: {
        ...general.M,
        genderName: "男性",
        childTerm: "男の子",
        adultTerm: "男性",
        subjectPronoun: "彼",
        objectPronoun: "彼を",
        indirectPronoun: "彼に",
        possessiveAdjective: "彼の",
        reflexivePronoun: "自分自身",
        demonstrative: "この",
        indeterminateArticle: "ある",
        genderAdjective: "男性の",
        pluralSubjectPronoun: "彼ら",
        pluralPossessiveAdjective: "彼らの"
    },
    X: {
        ...general.X,
        genderName: "中性",
        childTerm: "子供",
        adultTerm: "大人",
        subjectPronoun: "その人",
        objectPronoun: "その人を",
        indirectPronoun: "その人に",
        possessiveAdjective: "その人の",
        reflexivePronoun: "自分自身",
        demonstrative: "この",
        indeterminateArticle: "ある",
        genderAdjective: "中性の",
        pluralSubjectPronoun: "それらの人々",
        pluralPossessiveAdjective: "それらの人々の"
    }
} as GenderCollection