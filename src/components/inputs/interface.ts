import { InputHTMLAttributes } from 'react';

export type StyledTextInputVariants = 'filled' | 'outlined' | 'text';

export interface StyledTextInputComponentProps {
  variant?: StyledTextInputVariants;
}

export interface TextInputComponentProps
  extends StyledTextInputComponentProps,
    InputHTMLAttributes<HTMLInputElement> {}
