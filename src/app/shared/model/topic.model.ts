export class Topic {
  id?:string;
  name?:string;
}

export const MatchMethods = {
  SCOREDOUBLE: { libelle: 'scoreDouble', icon: "../assets/icon/ScoreResult.png"},
  SEEKEDDOUBLE: { libelle: 'seekedDouble', icon: "../assets/icon/AffinityResult.png"},
} as const

export type Methods = keyof typeof MatchMethods
