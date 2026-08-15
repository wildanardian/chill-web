import type { BaseContent } from "./content.types";

export interface Movie extends BaseContent {
  type: 'MOVIE';
  duration: number;
  director: string;
}