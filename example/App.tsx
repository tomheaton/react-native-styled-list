import {StyleSheet, Text, View} from 'react-native';
// import {StyledList} from "react-native-styled-list";

const App = () => {
    return (
        <View style={styles.container}>
            <Text>
                react-native-styled-list
            </Text>

            {/*<StyledList>
                <Text>
                    item 0
                </Text>
                <Text>
                    item 1
                </Text>
                <Text>
                    item 2
                </Text>
            </StyledList>*/}
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
