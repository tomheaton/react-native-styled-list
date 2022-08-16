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
    row: {
        flexDirection: "row",
        // TODO: check this value
        marginVertical: 2,
    },
    customBulletContainer: {
        // TODO: check this value
        marginRight: 4,
    },
    bulletContainer: {
        // TODO: check these values
        fontSize: 16,
        marginRight: 4,
    },
    numberContainer: {
        fontWeight: "bold",
        // TODO: check these values
        fontSize: 16,
        marginRight: 4,
    }
});

const bulletStyles = {
    regular: "\u2022",
    large: "\u25CF",
    hyphen: "\u2043",
    square: "\u25AA",
    ring: "\u29BF",
    triangle: "\u2023",
}

type BulletedProps = {
    children: ReactNode
    containerStyle?: any
    childStyle?: any
    bulletStyle?: keyof typeof bulletStyles
    customBullet?: ReactNode
}

export const BulletedList: React.FC<BulletedProps> = ({children, containerStyle, childStyle, bulletStyle = "regular", customBullet}) => {
    const childrenArray = Children.toArray(children);

    return (
        <View style={[styles.container, containerStyle]}>
            {childrenArray.map((child, index) => {
                return (
                    <View key={index} style={[styles.row]}>
                        {customBullet ? (
                            <View style={[styles.customBulletContainer]}>
                                {customBullet}
                            </View>
                        ) : (
                            <Text style={[styles.bulletContainer]}>
                                {bulletStyles[bulletStyle]}
                            </Text>
                        )}
                        <Text style={[styles.child, childStyle]}>
                            {child}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}

type NumberedProps = {
    children: ReactNode
    containerStyle?: any
    childStyle?: any
}

export const NumberedList: React.FC<NumberedProps> = ({children, containerStyle, childStyle}) => {
    const childrenArray = Children.toArray(children);

    return (
        <View style={[styles.container, containerStyle]}>
            {childrenArray.map((child, index) => {
                return (
                    <View key={index} style={[styles.row]}>
                        <Text style={[styles.numberContainer]}>
                            {index + 1}.
                        </Text>
                        <Text style={[styles.child, childStyle]}>
                            {child}
                        </Text>
                    </View>
                );
            })}
        </View>
    );
}