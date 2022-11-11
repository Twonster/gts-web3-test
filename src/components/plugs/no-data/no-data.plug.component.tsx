import { NoDataPlugComponentProps, StyledNoDataPlug } from 'src/components/plugs/no-data/interface';
import styled, { css } from 'styled-components';

const Wrapper = styled.div<StyledNoDataPlug>`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.round.xs};
  justify-content: center;
  text-align: center;
  
  text-transform: uppercase;
  font-size: .8rem;
  ${({ variant, colors = 'info' }) => variant === 'filled' && css`
    background-color: ${({ theme }) => theme.colors[colors][100]};
    color: ${({ theme }) => theme.colors.white[100]};
  `}
  ${({ variant, colors = 'info' }) => variant === 'outlined' && css`
    border: 1px solid ${({ theme }) => theme.colors[colors][100]};
    color: ${({ theme }) => theme.colors[colors][500]};
  `}
`;

export const NoDataPlugComponent = ({
  children,
  variant,
  colors
}: NoDataPlugComponentProps) => {
  return (
    <Wrapper colors={colors} variant={variant}>
      {children}
    </Wrapper>
  );
};
