import React, {useCallback, useContext} from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import Lottie from 'lottie-react-native';
// Components
import {CustomButton} from '../../components/Button';
import {ChartWidget} from '../../components/ChartWidget/ChartWidget';
import {CustomText} from '../../components/Text';
import {TransactionHistory} from './components/TransactionHistory/TransactionHistory';
import {Widget} from '../../components/Widget';
// Styles
import {spacing} from '../../utils/spacing';
import {colors} from '../../theme/colors';
import {
  headerStyles,
  balanceStyles,
  SCREEN_WIDTH,
  actionButtonsStyles,
} from './HomeScreen.styles';
// Icons
import BitcoinIcon from '../../assets/icons/bitcoin.svg';
import ArrowUpIcon from '../../assets/icons/arrowUp.svg';
// Constants
import {CurrenciesColors} from '../../constants/constants';
// Utils
import {amountFormatter} from '../../utils/currency';
import {BitWalletStackNavigationProp} from '../../navigation/navigation.type';
import {Context} from '../../context/context';
import {useChart} from '../../hooks/useChart';

const Header = () => (
  <>
    <View style={headerStyles.container}>
      <View style={headerStyles.lottie}>
        <Lottie
          source={require('../../assets/lottie/bitcoin-city.json')}
          autoPlay
          loop
        />
      </View>

      <View>
        <CustomText type="h1">
          Bitcoin<CustomText type="body2"> Wallet</CustomText>
        </CustomText>
      </View>
    </View>
  </>
);

const AccountBalance = ({balance, rates}: {balance: string; rates: number}) => (
  <Widget title="Balance" style={balanceStyles.container}>
    <View style={balanceStyles.currencyContainer}>
      <BitcoinIcon width={24} height={24} />
      <CustomText type="h1" style={balanceStyles.balanceLabel}>
        {amountFormatter({
          value: +balance,
          isCrypto: true,
        })}
      </CustomText>
    </View>
    <CustomText type="body3" style={balanceStyles.conversionLabel}>
      {`≈ ${amountFormatter({
        value: +balance * rates,
      })} $`}
    </CustomText>
  </Widget>
);

export const HomeScreen = () => {
  const navigation =
    useNavigation<BitWalletStackNavigationProp<'CashOutScreen'>>();
  const {state} = useContext(Context);
  const {chartData, loading} = useChart();

  const displayedBalance = state.balance.balance;

  const goToCashOutScreen = useCallback(() => {
    navigation.navigate('CashOutScreen', {
      balance: displayedBalance,
    });
  }, [displayedBalance, navigation]);

  return (
    <>
      <View style={headerStyles.background} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar animated backgroundColor={colors.grey.dark} />
          <Header />
          {/* Balance */}
          <AccountBalance
            balance={displayedBalance}
            rates={state?.rates?.ARS_BUY || 0}
          />
          {/*Action buttons*/}
          <View style={actionButtonsStyles.container}>
            <CustomButton
              style={actionButtonsStyles.button}
              disabled
              title="Deposit "
              icon={
                <ArrowUpIcon
                  style={actionButtonsStyles.depositIcon}
                  width={spacing(2)}
                  height={spacing(2)}
                />
              }
            />
            <CustomButton
              onPress={goToCashOutScreen}
              title="Send"
              style={actionButtonsStyles.button}
              icon={
                <ArrowUpIcon
                  style={actionButtonsStyles.sendIcon}
                  width={spacing(2)}
                  height={spacing(2)}
                />
              }
            />
          </View>
          {/* Chats */}
          <ChartWidget
            rates={state.rates}
            variation={state.variation}
            loading={loading}
            color={CurrenciesColors.BTC.chartColor}
            width={SCREEN_WIDTH - spacing(10)}
            chartData={chartData}
          />
          {/* Transactions */}
          <Widget title="Transaction history">
            <TransactionHistory />
          </Widget>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
