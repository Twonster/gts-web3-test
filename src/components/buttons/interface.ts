import { ButtonHTMLAttributes } from 'react';
import { DefaultAppTheme } from 'src/types/styled';

export type StyledPrimaryButtonVariants = 'filled';
export type StyledPrimaryButtonSizes = 'small' | 'medium' | 'large';

export interface StyledPrimaryButtonProps {
  variant?: StyledPrimaryButtonVariants;
  size?: StyledPrimaryButtonSizes;
  fullWidth?: boolean;
  colors?: keyof DefaultAppTheme['colors']
}

export interface PrimaryButtonComponentProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    StyledPrimaryButtonProps {}
