import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BulletedList, NumberedList } from 'react-native-styled-list';

export default function App() {
  const items: string[] = [
    'apple',
    'banana',
    'orange',
    'pear',
    'grape',
    'pineapple',
    'strawberry',
    'watermelon',
    'kiwi',
    'mango',
    'peach',
    'cherry',
    'lemon',
    'lime',
    'blueberry',
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>react-native-styled-list</Text>
      <Text style={styles.description}>These are lists of fruits.</Text>

      <View style={styles.listContainer}>
        <BulletedList bulletType={'square'}>
          {items.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </BulletedList>

        <NumberedList numberStyle={styles.numberStyle}>
          {items.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </NumberedList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 24,
    backgroundColor: '#edf2f4',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 24,
  },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  numberStyle: {
    fontWeight: 'bold',
  },
});
