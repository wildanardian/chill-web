import { AgeRating } from "../types/rating.types";

export const AGE_RATING_ORDER: Record<AgeRating, number> = {
  [AgeRating.SU]: 0,
  [AgeRating.R13]: 13,
  [AgeRating.R17]: 17,
  [AgeRating.R21]: 21,
};

export const AGE_RATING_LABEL: Record<AgeRating, string> = {
  [AgeRating.SU]: 'Semua Umur',
  [AgeRating.R13]: '13+',
  [AgeRating.R17]: '17+',
  [AgeRating.R21]: '21+',
}