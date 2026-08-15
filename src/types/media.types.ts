import type { Genre } from "./genre.types";

export interface MediaHero {
  id: string;
  title: string;
  description: string;
  backdropUrl: string;
  videoPreviewUrl?: string;
  ageRating: '13+' | '18+' | 'SU' | 'R';
  genres: Genre[];
}