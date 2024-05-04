import { Theme } from '@/types/theme';

export interface Props {
  width?: string;
  height?: string;
  borderColor?: string;
  borderRadius?: string;
  theme: Theme;
}

export interface SelectProps {
  placeholder: string;
  options: readonly string[] | number[];
  width?: string;
  name: string;
}
