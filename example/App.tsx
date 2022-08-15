import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>
                react-native-styled-list
            </Text>
        </View>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
