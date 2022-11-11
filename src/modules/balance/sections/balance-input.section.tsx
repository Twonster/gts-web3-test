import { ChangeEvent, ReactElement, useCallback, useState } from 'react';
import { PrimaryButtonComponent } from 'src/components/buttons/primary-button/primary-button.component';
import { TextInputComponent } from 'src/components/inputs/text-input/text-input.component';
import { balancesSlice } from 'src/store/slices/balances/balances.slice';
import { useAppDispatch } from 'src/store/store';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 1rem;

  .text-input {
    flex-grow: 1;
  }
`;

export const BalanceInputSection = (): ReactElement => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    []
  );

  const handleSubmit = () => {
    dispatch(balancesSlice.actions.addPkh(inputValue));
    setInputValue('');
  };

  return (
    <Container>
      <TextInputComponent
        onChange={handleInputChange}
        value={inputValue}
        type="text"
        className="text-input"
        placeholder="Enter you pkh here"
      />
      <PrimaryButtonComponent
        disabled={!inputValue.trim().length}
        onClick={handleSubmit}
      >
        Add
      </PrimaryButtonComponent>
    </Container>
  );
};
