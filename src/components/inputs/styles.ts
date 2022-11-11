import { StyledTextInputComponentProps } from 'src/components/inputs/interface';
import styled from 'styled-components';

export const StyledInput = styled.input.attrs<StyledTextInputComponentProps>(
  ({ variant = 'outlined' }) => ({
    variant
  })
)<StyledTextInputComponentProps>`
  border: 1px solid ${({ theme }) => theme.colors.black[100]};
  border-radius: ${({ theme }) => theme.round.s};
  padding: 1rem 1.2rem;
  outline: none;
  transition: .3s;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.black[200]};
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.info[500]};
  }
`;
