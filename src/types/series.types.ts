import type { BaseContent } from "./content.types";

export interface Series extends BaseContent {
  type: 'SERIES';
  episodeCount: number;
  seasonCount: number;
  creator: string[];
}