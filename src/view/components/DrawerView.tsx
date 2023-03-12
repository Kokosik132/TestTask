import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableText } from './TouchableText';

export const DrawerView = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <TouchableText
        textStyle={styles.text}
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Home')}
        text="Home"
      />
      <TouchableText
        textStyle={styles.text}
        containerStyle={styles.button}
        onPress={() => navigation.navigate('Posts')}
        text="Posts"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    paddingTop: 70,
    paddingHorizontal: 25,
  },
  button: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E0A86',
    marginBottom: 10,
  },
  text: {
    color: '#FFFFFF',
  },
});
