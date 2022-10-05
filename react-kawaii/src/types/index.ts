import { MOODS } from '../constants';

export type KawaiiMoood = typeof MOODS[number];

export type KawaiiProps = {
  size?: number;
  color?: string;
  mood?: KawaiiMoood;
};

export type KawaiiFaceProps = {
  mood?: KawaiiMoood;
  uniqueId?: string;
  transform?: string;
};
