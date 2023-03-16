import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';

interface ButtonProps {
  label: string;
  onPress: () => void;
  backgroundColor: string;
}

export const AnimatedButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  backgroundColor,
}) => {
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withTiming(progress.value, {
            easing: Easing.inOut(Easing.ease),
          }),
        },
      ],
      opacity: withTiming(progress.value, {easing: Easing.inOut(Easing.ease)}),
    };
  });

  const handlePressIn = () => {
    progress.value = 1;
  };

  const handlePressOut = () => {
    progress.value = 0;
    onPress();
  };

  return (
    <TouchableOpacity
      style={(styles.button, {backgroundColor})}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}>
      <Animated.View style={[styles.labelContainer, animatedStyle]}>
        <Text style={styles.label}>{label}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginVertical: 8,
  },
  labelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
