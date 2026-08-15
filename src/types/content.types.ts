import type { BadgeType } from "./badge.types";
import type { CastMember } from "./cast.types";
import type { Genre } from "./genre.types";
import type { AgeRating } from "./rating.types";

export interface BaseContent {
  id: string;
  title: string;
  posterUrl: string;
  synopsis: string;
  releaseYear: number;
  ageRating: AgeRating;
  cast: CastMember[];
  genre: Genre[];
  badges: BadgeType[];
}