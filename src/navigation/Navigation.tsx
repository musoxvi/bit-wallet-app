import React, {useEffect} from 'react';
//import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens';
import {colors} from '../theme/colors';
import {CashOutScreen} from '../screens/CashoutScreen/CashOutScreen';

const Stack = createStackNavigator();

export const Navigation = () => {
  useEffect(() => {
    // SplashScreen.hide();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.neutral.black,
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="CashOutScreen" component={CashOutScreen} />
    </Stack.Navigator>
  );
};
