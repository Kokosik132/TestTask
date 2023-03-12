import React, { FC, ReactNode } from 'react';
import {
  StyleProp,
  Text as BaseText,
  TextProps,
  TextStyle,
} from 'react-native';

interface TypographyProps extends TextProps {
  children: ReactNode;
  variant?: TextVariant;
  fontWeight?: TextStyle['fontWeight'];
  lineHeight?: number;
  textAlign?: TextStyle['textAlign'];
}

export const textVariants: Record<TextVariant, StyleProp<TextStyle>> = {
  p1: {
    fontWeight: '500',
    fontSize: 15,
  },
  h1: {
    fontWeight: '700',
    fontSize: 21,
  },
};

export type TextVariant = 'p1' | 'h1';

export const Typography: FC<TypographyProps> = ({
  children,
  variant = 'p1',
  fontWeight,
  style,
  lineHeight,
  textAlign,
  ...props
}) => {
  const preDefinedStyles = {
    ...(textVariants[variant] as object),
    ...(fontWeight ? { fontWeight } : {}),
    ...(lineHeight ? { lineHeight } : {}),
    ...(textAlign ? { textAlign } : {}),
  };

  return (
    <BaseText style={[preDefinedStyles, style]} {...props}>
      {children}
    </BaseText>
  );
};
