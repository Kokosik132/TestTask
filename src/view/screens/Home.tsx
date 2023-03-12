import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useDerivedValue,
  interpolateColor,
  withTiming,
} from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { changeColor, useAppSelector } from '~/store';
import { selectButtons } from '~/store/modules';

import { MainContainer, Typography, TouchableText } from '../components';
import styled from 'styled-components/native';
import { buttonColors } from '~/constants';

export const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const buttons = useAppSelector(selectButtons);

  const animation = useSharedValue(0);

  const animationColor = useDerivedValue(() => {
    return interpolateColor(animation.value, [0, 1, 2, 3], buttonColors);
  });

  const onPressButton = (id: number): void => {
    dispatch(changeColor({ id }));
  };

  const colorIndex = (): number => {
    let result = 0;
    buttonColors.forEach((color, index) => {
      if (color === buttons[2].color) {
        if (index === buttonColors.length - 1) {
          result = 0;
        } else {
          result = index + 1;
        }
      }
    });
    return result;
  };

  const startAnimation = () => {
    onPressButton(buttons[2].id);
    animation.value = withTiming(colorIndex(), {
      duration: 1000,
    });
  };

  const Button = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
    background-color: ${buttons[1].color};
  `;

  const animationStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: animationColor.value,
    };
  });

  return (
    <MainContainer title="Home">
      {buttons.map((item) => {
        if (item.id === 2) {
          return (
            <Button onPress={() => onPressButton(item.id)} key={item.id}>
              <Typography style={styles.buttonText}>{item.text}</Typography>
            </Button>
          );
        }
        if (item.id === 3) {
          return (
            <TouchableOpacity key={item.id} onPress={startAnimation}>
              <Animated.View style={[animationStyle, styles.button]}>
                <Typography style={styles.buttonText}>{item.text}</Typography>
              </Animated.View>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableText
            key={item.id}
            textStyle={styles.buttonText}
            onPress={() => onPressButton(item.id)}
            containerStyle={[styles.button, { backgroundColor: item.color }]}
            text={item.text}
          />
        );
      })}
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
});
