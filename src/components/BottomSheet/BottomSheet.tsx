import React, {useCallback, useMemo} from 'react';
import {View, ViewStyle} from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  useBottomSheetDynamicSnapPoints,
  BottomSheetView,
  BottomSheetHandleProps,
} from '@gorhom/bottom-sheet';

import {BottomSheetHandleComponent} from './BottomSheetHandleComponent/BottomModalHandleComponent';
import {MODAL_EXTRA_MARGIN, styles} from './BottomSheet.styles';
import {EBottomSheetIndex} from './BottomSheet.types';

interface BottomSheetProps {
  detached?: boolean;
  contentStyles?: ViewStyle;
  bottomSheeRef: React.RefObject<BottomSheetModal>;
  body: React.ReactElement;
  setOpenState?: React.Dispatch<React.SetStateAction<boolean>>;
  initialIndex?: EBottomSheetIndex;
  transparent?: boolean;
  handleComponent?: React.FC<BottomSheetHandleProps>;
  showHandleComponent?: boolean;
  backgroundStyle?: ViewStyle;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({
  bottomSheeRef,
  body,
  contentStyles = undefined,
  detached = false,
  setOpenState,
  initialIndex = EBottomSheetIndex.DISMISS,
  handleComponent,
  showHandleComponent = true,
  backgroundStyle,
}) => {
  const initialSnapPoints = useMemo(() => ['CONTENT_HEIGHT'], []);

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  const defaultHandleComponent = useCallback(
    () => (
      <View style={[styles.handlerContainer, backgroundStyle]}>
        <BottomSheetHandleComponent />
      </View>
    ),
    [backgroundStyle],
  );

  const onClose = useCallback(() => {
    if (setOpenState) {
      setOpenState(false);
    }
  }, [setOpenState]);

  return (
    <BottomSheetModal
      ref={bottomSheeRef}
      index={initialIndex}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      backdropComponent={renderBackdrop}
      handleComponent={
        handleComponent
          ? handleComponent
          : showHandleComponent
          ? defaultHandleComponent
          : null
      }
      bottomInset={detached ? MODAL_EXTRA_MARGIN : 0}
      detached={detached}
      onDismiss={onClose}
      enableDismissOnClose={
        !!setOpenState && initialIndex !== EBottomSheetIndex.DISMISS
      }
      backgroundStyle={[styles.modalBackground, backgroundStyle]}
      style={[detached && styles.sheetContainer]}>
      <BottomSheetView
        style={[styles.contentContainerStyle, contentStyles]}
        onLayout={handleContentLayout}>
        {body}
      </BottomSheetView>
    </BottomSheetModal>
  );
};
