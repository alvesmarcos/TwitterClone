import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 8px 16px;
`;

export const TextRank = styled.Text`
  color: grey;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const TextName = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 16px;
`;

export const TextVolume = styled.Text`
  color: grey;
  font-size: 16px;
  margin-top: 4px;
`;
