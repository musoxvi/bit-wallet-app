import {BottomSheetModal} from '@gorhom/bottom-sheet';
import React from 'react';
import {ITransactions} from '../../../../context/types';
import {IRates} from '../../../../types/currency';

export interface IConfirmationBottomModal {
  modalRef: React.RefObject<BottomSheetModal>;
  setOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  dataToConfirm?: Partial<ITransactions>;
  rates?: IRates;
}
