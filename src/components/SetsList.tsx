import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { gql } from 'graphql-request';
import { useQuery } from '@tanstack/react-query';
import graphqlClient from "@/src/components/graphqlClient";

const setsQuery = gql`
  query exercises {
    sets {
      documents {
        _id
        exercise
        reps
        weight
      }
    }
  }
`;

const SetsList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['sets'],
    queryFn: () => graphqlClient.request(setsQuery),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={data?.sets?.documents}
      renderItem={({ item }) => (
        <Text
          style={{
            backgroundColor: 'white',
            marginVertical: 5,
            padding: 10,
            borderRadius: 5,
            overflow: 'hidden',
          }}
        >
          {item.reps} x {item.weight}
        </Text>
      )}
    />
  );
};

export default SetsList;
