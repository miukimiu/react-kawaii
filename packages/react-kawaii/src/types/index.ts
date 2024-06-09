import { SVGProps } from 'react';
import { MOODS } from '../constants';

export type KawaiiMood = (typeof MOODS)[number];

export type KawaiiProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  mood?: KawaiiMood;
};

export type KawaiiFaceProps = {
  mood?: KawaiiMood;
  uniqueId?: string;
  transform?: string;
};
