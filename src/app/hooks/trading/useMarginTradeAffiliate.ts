import { Asset } from 'types/asset';
import {
  getLendingContractName,
  getTokenContract,
} from 'utils/blockchain/contract-helpers';
import { TxType } from 'store/global/transactions-store/types';
import { useSendContractTx } from '../useSendContractTx';
import { useAccount } from '../useAccount';
import { gasLimit } from '../../../utils/classifiers';

export function useMarginTradeAffiliate(
  asset: Asset,
  loanId,
  leverageAmount,
  loanTokenSent,
  collateralTokenSent,
  collateralToken: Asset,
  trader,
  affiliateReferrer,
  loanDataBytes,
  weiAmount: string = '0',
) {
  const account = useAccount();
  const { send, ...txState } = useSendContractTx(
    getLendingContractName(asset),
    'marginTradeAffiliate',
  );

  return {
    trade: (nonce?: number, approveTx?: string | null, customData?: object) =>
      send(
        [
          loanId,
          leverageAmount,
          loanTokenSent,
          collateralTokenSent,
          getTokenContract(collateralToken).address,
          trader,
          affiliateReferrer,
          loanDataBytes,
        ],
        {
          from: account,
          value: weiAmount,
          gas: gasLimit[TxType.TRADE],
          nonce,
        },
        {
          approveTransactionHash: approveTx,
          type: TxType.TRADE,
          customData,
        },
      ),
    ...txState,
  };
}