import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React from 'react';
import {TTransaction} from '../../../../types/transaction';

export interface ITransactionDetailsBottomSheet {
  modalRef: React.RefObject<BottomSheetModal>;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTransaction?: TTransaction;
}
