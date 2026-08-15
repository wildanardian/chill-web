export const AgeRating = {
  SU: 'SU',
  R13: '13+',
  R17: '17+',
  R21: '21+',
} as const;

export type AgeRating = typeof AgeRating[keyof typeof AgeRating];