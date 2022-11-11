import { StyledPrimaryButtonProps } from 'src/components/buttons/interface';
import styled, { css } from 'styled-components';

// eslint-disable-next-line max-len
export const StyledPrimaryButton = styled.button.attrs<StyledPrimaryButtonProps>(
  ({ variant = 'filled', size = 'medium', colors = 'info' }) => ({
    variant,
    size,
    colors
  })
)<StyledPrimaryButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.round.xs};
  font-weight: 600;
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  max-width: 300px;
  border: none;
  
  // SIZES
  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 0.5rem 0.7rem;
    `}
  ${({ size }) =>
    size === 'medium' &&
    css`
      padding: 0.8rem 1.2rem;
    `}
  ${({ size }) =>
    size === 'large' &&
    css`
      padding: 1rem 1.5rem;
    `}
  
  // COLORS
  ${({ variant, colors = 'info', disabled }) =>
    variant === 'filled' && !disabled &&
    css`
      background-color: ${({ theme }) => theme.colors[colors][500]};
      color: ${({ theme }) => theme.colors.white[100]};

      &:hover {
        background-color: ${({ theme }) => theme.colors[colors][400]};
      }

      &:active {
        background-color: ${({ theme }) => theme.colors[colors][600]};
      }
    `}
  
  // STATE
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background-color: ${({ theme }) => theme.colors.black[100]};
      color: ${({ theme }) => theme.colors.white[100]};
    `}
`;
