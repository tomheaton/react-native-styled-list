import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BulletedList, NumberedList } from 'react-native-styled-list';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>react-native-styled-list</Text>

      <BulletedList bulletStyle={'square'}>
        <Text>item a</Text>
        <Text>item b</Text>
        <Text>item c</Text>
      </BulletedList>

      <NumberedList>
        <Text>item a</Text>
        <Text>item b</Text>
        <Text>item c</Text>
      </NumberedList>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
