/**
 * Type definitions for My Interest Website | J-Pop
 */

export interface Song {
  id: string;
  title: string;
  titleJp: string;
  releaseYear: number;
  type: 'Single' | 'Album Track' | 'Theme Song' | 'Collaboration';
  tieIn?: string; // e.g., anime or drama opening/ending
  personalNote: string;
  spotifyUrl?: string;
  youtubeQuery?: string;
  duration?: string;
}

export interface Member {
  name: string;
  nameJp: string;
  role: string;
  bioSnippet?: string;
}

export interface Artist {
  id: 'yoasobi' | 'lisa' | 'back-number' | 'luna-haruna';
  name: string;
  nameJp: string;
  romajiName: string;
  titleTag: string; // e.g., "Novel into Music Duo" or "Rock Heroine"
  genre: string[];
  activeYears: string;
  origin: string;
  label: string;
  imageUrl: string;
  bannerUrl: string;
  accentColor: string; // Hex color for artist theme
  accentBadgeClass: string; // Bootstrap badge class
  quote: string;
  shortBio: string;
  biography: string[];
  members?: Member[];
  songs: Song[];
  keyFacts: {
    label: string;
    value: string;
  }[];
}

export type PageId = 'home' | 'yoasobi' | 'lisa' | 'back-number' | 'luna-haruna';
