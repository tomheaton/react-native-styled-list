import React, { Children, type ReactNode } from 'react';
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type TextStyle,
  type ViewProps,
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
  childStyle?: ViewStylePropType;
  bulletStyle?: TextStylePropType;
  bulletType?: keyof typeof bulletTypes;
  customBullet?: ReactNode;
  customBulletStyle?: ViewStylePropType;
} & ViewProps;

export const BulletedList: React.FC<BulletedProps> = ({
  children,
  style,
  childStyle,
  bulletStyle,
  bulletType = 'regular',
  customBullet,
  customBulletStyle,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.container, style]}>
      {childrenArray.map((child, index) => {
        return (
          <View key={index} style={[styles.row]}>
            {customBullet ? (
              <View style={customBulletStyle}>{customBullet}</View>
            ) : (
              <Text style={bulletStyle}>{bulletTypes[bulletType]}</Text>
            )}
            <Text style={[styles.child, childStyle]}>{child}</Text>
          </View>
        );
      })}
    </View>
  );
};

type NumberedProps = {
  numberStyle?: TextStylePropType;
  childStyle?: ViewStylePropType;
} & ViewProps;

export const NumberedList: React.FC<NumberedProps> = ({
  children,
  style,
  numberStyle,
  childStyle,
}) => {
  const childrenArray = Children.toArray(children);

  return (
    <View style={[styles.container, style]}>
      {childrenArray.map((child, index) => {
        return (
          <View key={index} style={[styles.row]}>
            <Text style={numberStyle}>{index + 1}.</Text>
            <Text style={[styles.child, childStyle]}>{child}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    marginVertical: 4,
    columnGap: 8,
  },
  child: {
    width: '90%',
  },
});
