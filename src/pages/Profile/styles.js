import styled from 'styled-components/native';
import { Animated } from 'react-native';

import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.primary};
`;

export const InformationContainer = styled.View`
  padding: 16px;
`;

export const TextName = styled.Text`
  font-weight: bold;
  font-size: 22px;
`;

export const TextUsername = styled.Text`
  font-size: 16px;
  color: gray;
`;

export const TextDescription = styled(TextUsername)`
  margin-top: 8px;
  color: black;
`;

export const TextSmallInfo = styled.Text`
  font-weight: ${props => (props.strong ? 'bold' : 'normal')};
  font-size: 14px;
  color: ${props => (props.strong ? 'black' : 'gray')};
`;

export const ArrowContainer = styled.TouchableOpacity`
  position: absolute;
  top: 32;
  left: 16;
  background-color: ${colors.transparentDark};
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

export const TitleBottom = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: ${colors.primary};
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

const AvatarImage = styled.Image`
  border-color: ${colors.primary};
  border-width: 3;
  /* overflow: hidden; */
  margin-left: 16px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ContentMarginRight = styled.View`
  margin-right: 8px;
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
