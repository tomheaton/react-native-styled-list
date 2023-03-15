import React, { Children, type ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

type ViewStylePropType = StyleProp<ViewStyle> | undefined;
type TextStylePropType = StyleProp<TextStyle> | undefined;

const bulletTypes = {
  regular: '\u2022',
  large: '\u25CF',
  hyphen: '\u2043',
  square: '\u25AA',
  ring: '\u29BF',
  triangle: '\u2023',
};

type BulletedProps = {
  children: ReactNode;
  containerStyle?: ViewStylePropType;
  childStyle?: ViewStylePropType;
  bulletStyle?: TextStylePropType;
  bulletType?: keyof typeof bulletTypes;
  customBullet?: ReactNode;
  customBulletStyle?: ViewStylePropType;
};

export const BulletedList: React.FC<BulletedProps> = ({
  children,
  containerStyle,
  childStyle,
  bulletStyle,
  bulletType = 'regular',
  customBullet,
  customBulletStyle,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.container, containerStyle]}>
      {childrenArray.map((child, index) => {
        return (
          <View key={index} style={[styles.row]}>
            {customBullet ? (
              <View style={customBulletStyle}>{customBullet}</View>
            ) : (
              <Text style={bulletStyle}>{bulletTypes[bulletType]}</Text>
            )}
            <Text style={childStyle}>{child}</Text>
          </View>
        );
      })}
    </View>
  );
};

type NumberedProps = {
  children: ReactNode;
  containerStyle?: ViewStylePropType;
  numberStyle?: TextStylePropType;
  childStyle?: ViewStylePropType;
};

export const NumberedList: React.FC<NumberedProps> = ({
  children,
  containerStyle,
  numberStyle,
  childStyle,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.container, containerStyle]}>
      {childrenArray.map((child, index) => {
        return (
          <View key={index} style={[styles.row]}>
            <Text style={numberStyle}>{index + 1}.</Text>
            <Text style={childStyle}>{child}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
    columnGap: 8,
  },
});
