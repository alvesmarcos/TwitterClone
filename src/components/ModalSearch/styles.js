import styled from 'styled-components/native';
import Modal from 'react-native-modal';

import { metrics } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.primaryDark};
`;

export const SearchContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.primaryDark};
  align-items: center;
  padding: 0px ${metrics.basePadding}px;
  height: 36;
  flex-direction: row;
  border-radius: 18px;
  align-items: center;
  margin: 0px ${metrics.baseMargin}px 0px 0px;
`;

export const Input = styled.TextInput`
  flex: 1;
  font-size: ${metrics.mediumFont}px;
  height: 36px;
  justify-content: center;
  padding: 0px 0px 0px ${metrics.basePadding / 2}px;
  margin: 0px;
  color: ${props => props.theme.contrast};
`;

export const RoundButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.accent};
  height: 16px;
  width: 16px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const TextBack = styled.Text`
  font-size: ${metrics.mediumFont}px;
  color: ${props => props.theme.accent};
`;

export const HelperText = styled.Text`
  font-size: ${metrics.smallFont}px;
  color: ${props => props.theme.hint};
  text-align: center;
  top: 20px;
`;

export const CustomModal = styled(Modal)`
  margin: 0px;
`;
