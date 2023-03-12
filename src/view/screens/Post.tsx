import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useGetPostsQuery } from '~/services/rtkQuery';
import { MainContainer, TouchableText, Typography, Card } from '../components';

export const PostScreen: React.FC = () => {
  const { data: posts, refetch, isLoading } = useGetPostsQuery();

  const refetchPost = (): void => {
    refetch();
  };

  return (
    <MainContainer title="Posts">
      <TouchableText
        textStyle={styles.buttonText}
        containerStyle={styles.button}
        onPress={refetchPost}
        text="Refresh"
      />
      {isLoading ? (
        <View style={styles.loading}>
          <Typography>Loading...</Typography>
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          bounces={false}
          data={posts}
          renderItem={({ item }) => (
            <Card
              style={styles.card}
              key={item.id}
              body={item.body}
              title={item.title}
              userId={item.userId}
            />
          )}
        />
      )}
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E0A86',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
