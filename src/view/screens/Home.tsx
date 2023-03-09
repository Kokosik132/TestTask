import React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeColor, useAppSelector } from '~/store';
import { selectButtons } from '~/store/modules';

import { MainContainer, Typography, TouchableText } from '../components';
import styled from 'styled-components/native';

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const buttons = useAppSelector(selectButtons);

  const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-vertical: 10px;
  margin-bottom: 20px;
  background-color: ${buttons[1].color};
`;

  const onPressButton = (id: number): void => {
    dispatch(changeColor({id}))
  }

  return (
    <MainContainer title="Home">
      {buttons.map(item => {
        if (item.id === 2) {
          return (
            <Button onPress={() => onPressButton(item.id)} key={item.id}>
              <Typography style={styles.buttonText}>
                {item.text}
              </Typography>
            </Button>
            )
        }
        return (
        <TouchableText 
          key={item.id} 
          textStyle={styles.buttonText} 
          onPress={() => onPressButton(item.id)} 
          containerStyle={[styles.button, { backgroundColor: item.color }]} 
          text={item.text} 
        />
      )})}
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
  },
})
