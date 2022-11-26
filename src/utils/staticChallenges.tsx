import staticChallenges from '../../challenges.json';

export interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

export const challenges = staticChallenges as Challenge[]