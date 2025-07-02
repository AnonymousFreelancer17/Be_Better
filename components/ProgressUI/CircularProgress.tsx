import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
} from 'react-native-reanimated';
import GlobalText from '../GlobalUI/GlobalText';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({
  radius = 50,
  strokeWidth = 10,
  duration = 1000,
  max = 100,
  value = 75,
  color = '#4CAF50',
  lightTheme,
  bgColor = '#eee',
}: {
  radius?: number;
  strokeWidth?: number;
  duration?: number;
  max?: number;
  value: number;
  lightTheme: boolean;
  color?: string;
  bgColor?: string;
}) => {
  const animatedValue = useSharedValue(0);
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset =
      circumference - (circumference * animatedValue.value) / max;
    return {
      strokeDashoffset,
    };
  });

  useEffect(() => {
    animatedValue.value = withTiming(value, { duration });
  }, [value]);

  return (
    <View style={{ width: radius * 2 + strokeWidth * 2, height: radius * 2 + strokeWidth * 2 }}>
      <Svg width={radius * 2 + strokeWidth * 2} height={radius * 2 + strokeWidth * 2} viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <Circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <AnimatedCircle
          cx="50%"
          cy="50%"
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
          rotation="-90"
          originX={halfCircle}
          originY={halfCircle}
        />
      </Svg>
      <View style={[StyleSheet.absoluteFillObject, styles.center]}>
        <GlobalText lightTheme={lightTheme} value={`${Math.round(value)} %`} fontStyle='text-xs' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CircularProgress;
