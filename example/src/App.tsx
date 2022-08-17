import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BulletedList } from 'react-native-styled-list';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>react-native-styled-list</Text>

      <BulletedList bulletStyle={"square"}>
        <Text>item 0</Text>
        <Text>item 1</Text>
        <Text>item 2</Text>
      </BulletedList>
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
