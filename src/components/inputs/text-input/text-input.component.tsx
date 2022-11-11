import { TextInputComponentProps } from 'src/components/inputs/interface';
import { StyledInput } from 'src/components/inputs/styles';

export const TextInputComponent = ({ ...props }: TextInputComponentProps) => {
  return <StyledInput {...props} />;
};
