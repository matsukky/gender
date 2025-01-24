export const roles = {
  F: [ "F", "♀", "WOMAN", "GIRL", "FEMALE" ],
  M: [ "M","H", "♂", "MAN", "MEN", "BOY", "MALE" ],
  X: [ "X","N", "⚧", "NEUTRAL", "HUMAN" ],
}

export const general = {
  F: {
    emoji: "🚺",
    colors: ["#e995cb"],
  },
  M: {
    emoji: "🚹",
    colors: ["#84d6fa"],
  },
  X: {
    emoji: "🚻",
    colors: ["#f6c5a2"],
  },
}

export const getGenderRole = (value: string): 'F' | 'M' | 'X'  => {
  for (const [key, values] of Object.entries(roles)) {
    if (values.includes(value.toUpperCase())) {
      return key as 'F' | 'M' | 'X';
    }
  }
  return 'X';
}