import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { PostModel } from '~/models/post';
import { Typography } from './Typography';

interface Props extends Partial<PostModel> {
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<Props> = ({ userId, title, body, style }) => {
  return (
    <View style={[styles.main, style]}>
      <Typography textAlign="center">{title}</Typography>
      <View style={styles.content}>
        <Typography>{body}</Typography>
      </View>
      <Typography textAlign="center">
        Here should be username. User id: {userId}
      </Typography>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F9F9F9',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'column',
  },
  content: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
  },
});
