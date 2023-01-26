import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import 'react-native-gesture-handler';
import {Navigation} from './src/navigation';
import {Provider} from './src/context/context';
import {Platform} from 'react-native';

const httpLink = createHttpLink({
  uri:
    Platform.OS === 'android'
      ? 'http://10.0.2.2:4000/'
      : 'http://localhost:4000/',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
        <Provider>
          <BottomSheetModalProvider>
            <Navigation />
          </BottomSheetModalProvider>
        </Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
