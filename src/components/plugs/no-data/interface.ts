import { PropsWithChildren, ReactNode } from 'react';
import { defaultTheme } from 'src/appTheme';

export type StyledNoDataPlugVariants = 'outlined' | 'filled'

export interface StyledNoDataPlug {
  variant?: StyledNoDataPlugVariants;
  icon?: ReactNode
  colors?: keyof typeof defaultTheme.colors
}

export interface NoDataPlugComponentProps extends
  PropsWithChildren, StyledNoDataPlug {}
