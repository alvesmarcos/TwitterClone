import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { metrics, colors } from '~/styles';

const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: ${metrics.sceenHeight};
  width: ${metrics.screenWidth};
  background-color: ${colors.light.accent};
  align-items: center;
  justify-content: center;
`;

const IconTwitter = styled(Icon)`
  position: relative;
  top: -20;
  text-align: center;
`;

export const AnimatedIcon = Animated.createAnimatedComponent(IconTwitter);

export const AnimatedContainer = Animated.createAnimatedComponent(Container);
