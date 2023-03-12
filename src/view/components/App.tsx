import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { AppNavigator } from '../navigation';

export const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);

  return <AppNavigator />;
};
