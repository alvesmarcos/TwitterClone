import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { metrics } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.primary};
`;

export const InformationContainer = styled.View`
  flex: 1;
  padding: ${metrics.basePadding}px;
`;

export const TextName = styled.Text`
  font-weight: bold;
  font-size: ${metrics.extraLargeFont}px;
  color: ${props => props.theme.contrast};
`;

export const TextUsername = styled.Text`
  font-size: ${metrics.mediumFont}px;
  color: ${props => props.theme.hint};
`;

export const TextDescription = styled(TextUsername)`
  margin-top: ${metrics.baseMargin / 2}px;
  color: ${props => props.theme.contrast};
`;

export const TextSmallInfo = styled.Text`
  font-weight: ${props => (props.strong ? 'bold' : 'normal')};
  font-size: ${metrics.smallFont}px;
  color: ${props => (props.strong ? props.theme.contrast : props.theme.hint)};
`;

export const ArrowContainer = styled.TouchableOpacity`
  position: absolute;
  top: 32;
  left: 16;
  background-color: ${props => props.theme.transparentDark};
  width: 30px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  z-index: 1;
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

const TitleBottom = styled.Text`
  font-weight: bold;
  text-align: center;
  /* color: ${props => props.theme.primary}; */
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

const AvatarImage = styled.Image`
  border-color: ${props => props.theme.primary};
  border-width: 3;
  /* overflow: hidden; */
  margin-left: ${metrics.baseMargin}px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ContentRowEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ContentMarginRight = styled.View`
  margin-right: ${metrics.baseMargin / 2}px;
`;

export const ButtonFollow = styled.TouchableOpacity`
  padding: ${metrics.baseMargin / 2}px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${props => props.theme.accent};
  width: 96px;
  height: 40px;
  align-items: center;
  margin-top: -48px;
`;

export const TextButton = styled.Text`
  color: ${props => props.theme.accent};
  font-size: ${metrics.mediumFont}px;
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

export const TitleBottomAnimated = Animated.createAnimatedComponent(
  TitleBottom
);
