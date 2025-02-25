export const roles = {
  F: [ "F", "♀", "WOMAN", "GIRL", "FEMALE" ],
  M: [ "M","H", "♂", "MAN", "MEN", "BOY", "MALE" ],
  X: [ "X","N", "⚧", "NEUTRAL", "HUMAN" ],
}

export const general = {
  F: {
    emoji: "🚺",
    colors: ["#e995cb", "#ff69b4", "#ff1493", "#db7093", "#c71585"],
  },
  M: {
    emoji: "🚹",
    colors: ["#84d6fa", "#1e90ff", "#00bfff", "#4682b4", "#5f9ea0"],
  },
  X: {
    emoji: "🚻",
    colors: ["#f6c5a2", "#d3d3d3", "#a9a9a9", "#808080", "#696969"],
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