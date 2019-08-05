import styled from 'styled-components/native';
import { Animated } from 'react-native';
import Modal from 'react-native-modal';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

export const SearchContainer = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
  align-items: center;
  padding: 0px 16px 0px 16px;
  height: 36;
  flex-direction: row;
  border-radius: 18px;
  align-items: center;
  margin: 0px 16px 0px 0px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  height: 36px;
  justify-content: center;
  padding: 0px 0px 0px 8px;
  margin: 0px;
`;

export const RoundButton = styled.TouchableOpacity`
  background-color: ${colors.accent};
  height: 16px;
  width: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const TextBack = styled.Text`
  font-size: 16px;
  color: ${colors.accent};
`;

export const HelperText = styled.Text`
  font-size: 14px;
  color: grey;
  text-align: center;
`;

export const HelperTextAnimated = Animated.createAnimatedComponent(HelperText);

export const CustomModal = styled(Modal)`
  margin: 0px;
`;
