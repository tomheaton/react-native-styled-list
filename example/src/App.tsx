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

      <View style={styles.listRow}>
        <BulletedList style={styles.listContainer} bulletType={'square'}>
          {items.map((item, index) => (
            <Text key={index}>{item}</Text>
          ))}
        </BulletedList>

        <NumberedList
          style={styles.listContainer}
          numberStyle={styles.numberStyle}
        >
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
  listRow: {
    flexDirection: 'row',
    width: '100%',
  },
  listContainer: {
    flex: 1,
  },
  numberStyle: {
    fontWeight: 'bold',
  },
});
