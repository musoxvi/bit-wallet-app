import {
  EConfirmationStatus,
  TConfirmationMessage,
} from '../../../../types/transaction';

export const confirmationBottomModalTitle: TConfirmationMessage = {
  [EConfirmationStatus.SUCCESS]: 'Your BTC have been sent successfully',
  [EConfirmationStatus.FAILED]: 'An error has occurred 😢',
};
