import {StyleSheet, Text, View, Pressable, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function ExerciseListItem({ item }: { item: any}) {
  return (
    <Link href={`/${item.name}`} asChild>
      <TouchableOpacity style={styles.exerciseContainer} className="bg-white p-3 rounded-md">
        <Text className="font-semibold text-lg">{item.name}</Text>

        <Text className="text-gray-500">
          <Text style={styles.subValue}>{item.muscle}</Text> |{' '}
          <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  subValue: {
    textTransform: 'capitalize',
  },
});
