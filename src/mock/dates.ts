import { STARTING_YEAR } from '@/constants/datesSelect';

export const years = Array.from({ length: 33 }, (_, k) => STARTING_YEAR + k + 1);

export const days = Array.from({ length: 31 }, (_, k) => k + 1);
