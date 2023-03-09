import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { Typography } from './Typography';

export interface Props {
  children?: ReactNode;
  title?: string;
}

export const MainContainer: React.FC<Props> = ({
  children,
  title,
}) => {

  return (
    <View style={styles.main}>
       <Typography variant="h1" style={styles.title}>{title}</Typography>
      <View style={styles.content}>
        {children}
      </View>
    </View>
  );
};

  const styles = StyleSheet.create({
    main: {
      paddingVertical: 10,
        flex: 1,
        paddingHorizontal: 30,
      },
      content: {
        flex: 1,
      },
      title: {
        marginBottom: 15,
      },
  });
   
