import { textOverflowMixin } from 'src/styles';
import { RequestStatus } from 'src/types/global';
import styled, { css } from 'styled-components';


export const StyledListItemLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.7rem;
  opacity: 0.5;
  font-weight: bold;
`;

export const ListItemContainer = styled.div<{ status?: RequestStatus }>`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.round.xs};

  ${({ status, theme }) =>
    status === 'success' &&
    css`
      background-color: ${theme.colors.green[50]};
    `}
  ${({ status, theme }) =>
    status === 'error' &&
    css`
      background-color: ${theme.colors.red[50]};
    `}
  ${({ status, theme }) =>
    status === 'loading' &&
    css`
      background-color: ${theme.colors.orange[50]};
    `}
  ${({ status, theme }) =>
    (!status || status === 'unset') &&
    css`
      background-color: ${theme.colors.black[50]};
    `}

  .error-text {
    font-weight: bold;
    font-size: .8rem;
    overflow-wrap: break-word;
    color: ${({ theme }) => theme.colors.red[500]};
  }
  .content {
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    gap: 1rem;

    .pkh {
      flex-grow: 1;
      ${textOverflowMixin};

      span {
        ${textOverflowMixin}
      }
    }

    .info {
      text-align: right;
      display: flex;
      justify-content: space-between;
      gap: 1rem;

      .balance {
        flex: 1;

        span {
          font-weight: bold;
        }
      }

      .status {
        min-width: 100px;
      }

      @media (${({ theme }) => theme.media.small}) {
        width: 100%;
        
        .balance {
          text-align: left;
        }
      }

    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  .buttons-group {
    display: flex;
    gap: 1rem;
    margin-left: auto;
    
    @media (${({ theme }) => theme.media.small}) {
      width: 100%;
      
      button {
        width: 100%;
      }
    }
  }
`;
