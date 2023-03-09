import { Api } from '@appello/common/lib/services/api';
import React from 'react';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '~/store';
import { App } from '~/view/components/App';
import { API_URL } from './constants/constants';

// Api.initialize({
//   apiUrl: API_URL,
//   refreshTokenUrl: '',
//   getToken: function (): string | null | undefined {
//     throw new Error('Function not implemented.');
//   },
//   getRefreshToken: function (): string | null | undefined {
//     throw new Error('Function not implemented.');
//   }
// });

const RootApp: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
          <App />
        </SafeAreaProvider>
    </PersistGate>
  </Provider>
);

// eslint-disable-next-line import/no-default-export
export default RootApp;
