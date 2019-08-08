import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

const HeaderScrollable = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  align-items: center;
`;

const ContainerTextBottom = styled.View`
  position: absolute;
`;

export const TitleBottom = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

const AvatarImage = styled.Image`
  border-color: ${colors.primary};
  border-width: 3;
  /* overflow: hidden; */
  margin-left: 10px;
`;

export const HeaderScrollableAnimated = Animated.createAnimatedComponent(
  HeaderScrollable
);

export const ContainerTextBottomAnimated = Animated.createAnimatedComponent(
  ContainerTextBottom
);

export const AvatarImageAnimated = Animated.createAnimatedComponent(
  AvatarImage
);
