import React, {Children, ReactNode} from "react";
import {View, Text, StyleSheet} from "react-native";

type Props = {
    children: ReactNode
    containerStyle?: any
    childStyle?: any
}

const StyledList: React.FC<Props> = ({children, containerStyle, childStyle}) => {
    const childrenArray = Children.toArray(children);

    return (
        <View style={[styles.container, containerStyle]}>
            {childrenArray.map((child, index) => {
                return (
                    // TODO: render bullet point in a row view to keep left padding on new lines
                    <Text key={index} style={[styles.child, childStyle]}>
                        {"\u2022"} {child}
                    </Text>
                );
            })}
        </View>
    );
}

export default StyledList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    child: {
        color: 'black',
    },
});
