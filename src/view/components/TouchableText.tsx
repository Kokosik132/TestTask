import React, { FC } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';

import { Typography, TextVariant } from '~/view/components';

interface TouchableTextProps extends TouchableOpacityProps {
  text: string;
  variant?: TextVariant;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const TouchableText: FC<TouchableTextProps> = ({
  text,
  textStyle,
  containerStyle,
  onPress,
  disabled,
  variant,
  ...props
}) => (
  <TouchableOpacity
    hitSlop={{ top: 10, left: 10, right: 10, bottom: 10 }}
    onPress={e => {
      if (!disabled && onPress) {
        onPress(e);
      }
    }}
    style={containerStyle}
    disabled={disabled}
    {...props}
  >
    <Typography variant={variant} style={textStyle}>
      {text}
    </Typography>
  </TouchableOpacity>
);
