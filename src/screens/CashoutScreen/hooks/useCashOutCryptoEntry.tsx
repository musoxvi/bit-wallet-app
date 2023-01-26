import BigNumber from 'bignumber.js';
import {useContext, useState} from 'react';
import {useBottomModals} from '../../../components/BottomSheet';
import {Context} from '../../../context/context';
import {ITransactions} from '../../../context/types';
import {ECurrency} from '../../../types/currency';
import {amountFormatter} from '../../../utils/currency';
import {normalizeAmount, toSentenceCase} from '../../../utils/strings';

// example address :
// 1RAHUEYstWetqabcFn5Au4m4GFg7xJaNVN2 BAD

// 3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5 OK

const satToBTC = (sat: number) => sat * 0.000000001;

export const useCashOutCryptoEntry = (availableAmount: number) => {
  const {state} = useContext(Context);

  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const [openDropDownPicker, setOpenDropDownPicker] = useState(false);
  const [fee, setFee] = useState(state.bitcoinFees.halfHourFee);

  const [addressErrorMessage, setAddressErrorMessage] = useState('');
  const [amountErrorMessage, setAmountMessage] = useState('');
  const [dataToConfirm, setDataToConfirm] = useState<Partial<ITransactions>>();

  const {
    openState: {isOpen, setIsOpen},
    ref,
    open: openModal,
  } = useBottomModals();

  const selectedFee = amountFormatter({
    value: new BigNumber(satToBTC(fee)).toNumber(),
    isCrypto: true,
  });

  const displayBalance = amountFormatter({
    value: new BigNumber(availableAmount).toNumber(),
    isCrypto: true,
  });

  const amountToSend = amountFormatter({
    value: new BigNumber(normalizeAmount(amount))
      .plus(satToBTC(fee))
      .toNumber(),
    isCrypto: true,
  });

  const canContinue =
    address.length < 26 ||
    +amount + satToBTC(fee) > +availableAmount ||
    !amount ||
    !fee;

  const isValidBTCAddress = (value: string) => {
    if (value.length < 26 || value.length > 35) {
      return setAddressErrorMessage('Please enter a valid address');
    }
    const regex = new RegExp(/^(bc1|[13])[a-km-zA-HJ-NP-Z1-9]{25,34}$/);

    if (!regex.test(value)) {
      return setAddressErrorMessage('Invalid bitcoin address');
    }

    setAddressErrorMessage('');
  };

  const onChangeAddressInput = (text: string) => {
    const trimmedText = text.trim();

    isValidBTCAddress(trimmedText);

    setAddress(trimmedText);
  };

  const onChangeAmountInput = (text: string) => {
    let trimmedText = text.trim();
    if (
      trimmedText.startsWith(',') ||
      trimmedText.startsWith('.') ||
      trimmedText.startsWith('0.') ||
      trimmedText.startsWith('00')
    ) {
      trimmedText = '0,';
    }

    let lastValid = trimmedText;
    var validNumber = new RegExp(/^\d*,?\d*$/);

    if (validNumber.test(trimmedText)) {
      lastValid = trimmedText;
    } else {
      lastValid = amount;
    }

    if (normalizeAmount(lastValid) + satToBTC(fee) > +availableAmount) {
      setAmountMessage("You don't have enough funds");
      return setAmount(lastValid);
    }
    setAmountMessage('');
    setAmount(lastValid);
  };

  const onContinue = () => {
    setDataToConfirm({
      address,
      amount: amountToSend,
      fee: selectedFee,
      network: ECurrency.BTC,
      balance: availableAmount,
    });
    openModal();
  };

  const dropDownPickerData = Object.entries(state.bitcoinFees).map(
    ([name, value]) => ({
      label: toSentenceCase(name),
      value,
    }),
  );

  return {
    dataToConfirm,
    canContinue,
    fee,
    selectedFee,
    displayBalance,
    amountToSend,
    amount,
    address,
    addressErrorMessage,
    amountErrorMessage,
    openDropDownPicker,
    bottomSheetRef: ref,
    isOpen,
    dropDownPickerData,
    rates: state.rates,
    openModal,
    setIsOpen,
    onChangeAddressInput,
    onChangeAmountInput,
    setOpenDropDownPicker,
    setFee,
    onContinue,
  };
};
