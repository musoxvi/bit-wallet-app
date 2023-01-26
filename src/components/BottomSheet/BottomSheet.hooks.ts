import {useState, useRef, useEffect, useCallback} from 'react';
import {BottomSheetModal} from '@gorhom/bottom-sheet';
import {useBackHandler} from '@react-native-community/hooks';

export const useBottomModals = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openState = {isOpen, setIsOpen};
  const ref = useRef<BottomSheetModal>(null);

  useEffect(() => {
    if (isOpen) {
      ref.current?.present();
    }
  }, [isOpen]);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    ref.current?.dismiss();
  }, []);

  useBackHandler(() => {
    if (isOpen) {
      close();
      return true;
    }
    return false;
  });

  return {openState, ref, open, close};
};
