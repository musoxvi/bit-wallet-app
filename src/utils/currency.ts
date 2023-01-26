import BigNumber from 'bignumber.js';

export const amountFormatter = ({
  value,
  isCrypto = false,
}: {
  value: string | number;
  isCrypto?: boolean;
}) => {
  if (isNaN(Number(value))) {
    return '0,00';
  }
  const cryptoDecimalPlaces = 8;
  const moneyDecimalPlaces = 2;
  const number = new BigNumber(value);
  const numberWithDecimals = isCrypto
    ? number.decimalPlaces(cryptoDecimalPlaces).toFixed()
    : number.decimalPlaces(moneyDecimalPlaces).toFixed(moneyDecimalPlaces);
  const [intPart, floatPart] = numberWithDecimals.split('.');

  return `${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}${
    floatPart ? `,${floatPart}` : ''
  }`;
};
