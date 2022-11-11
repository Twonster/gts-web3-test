import { ReactElement } from 'react';
import { PrimaryButtonComponentProps } from '../interface';
import { StyledPrimaryButton } from '../styles';

export const PrimaryButtonComponent = ({
  children,
  ...props
}: PrimaryButtonComponentProps): ReactElement => {
  return <StyledPrimaryButton {...props}>{children}</StyledPrimaryButton>;
};
