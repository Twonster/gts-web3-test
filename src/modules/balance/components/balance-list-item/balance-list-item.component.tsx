import { memo, ReactElement, useCallback, useEffect } from 'react';
import { BiRefresh } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { PrimaryButtonComponent } from 'src/components/buttons/primary-button/primary-button.component';
import { BalanceListItemProps } from 'src/modules/interface';
import { balancesSlice } from 'src/store/slices/balances/balances.slice';
import { getBalanceFromPkh } from 'src/store/slices/balances/balances.thunks';
import { useAppDispatch } from 'src/store/store';
import { ListItemContainer, StyledListItemLabel } from './styles';

export const BalanceListItem = memo(
  ({
    pkh,
    status,
    value,
    error,
    created_at: createdAt
  }: BalanceListItemProps): ReactElement => {
    const dispatch = useAppDispatch();

    const handleDelete = useCallback(() => {
      dispatch(balancesSlice.actions.removePkh(pkh));
    }, []);

    const handleRefreshData = useCallback(() => {
      dispatch(getBalanceFromPkh(pkh));
    }, []);

    useEffect(() => {
      // Prevent persisted requests if pkh is invalid. Only manual refetch
      if (status !== 'error') {
        dispatch(getBalanceFromPkh(pkh));
      }
    }, [createdAt]);

    return (
      <ListItemContainer status={status}>
        <div className="content">
          <label className="pkh">
            <StyledListItemLabel>pkh</StyledListItemLabel>
            <span>{pkh ?? '-'}</span>
          </label>
          <div className="info">
            <label className="balance">
              <StyledListItemLabel>balance</StyledListItemLabel>
              <span>{value ?? '-'}</span>
            </label>
            <label className="status">
              <StyledListItemLabel>status</StyledListItemLabel>
              <span>{status ?? '?'}</span>
            </label>
          </div>
          <div className="buttons-group">
            <PrimaryButtonComponent
              disabled={status === 'loading'}
              onClick={handleRefreshData}
              size="small"
            >
              <BiRefresh size="16" />
            </PrimaryButtonComponent>
            <PrimaryButtonComponent
              colors="red"
              onClick={handleDelete}
              size="small"
            >
              <MdDeleteOutline />
            </PrimaryButtonComponent>
          </div>
        </div>
        {!!error && <span className='error-text'>Error: {error?.message}</span>}
      </ListItemContainer>
    );
  }
);
