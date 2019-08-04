import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

export const Trend = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 8px 16px;
`;

export const TrendTextHeader = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 18px;
`;

export const TrendPosition = styled.Text`
  color: grey;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const TrendName = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 16px;
`;

export const TrendVolume = styled.Text`
  color: grey;
  font-size: 16px;
  margin-top: 4px;
`;

export const HorizontalSeparator = styled.View`
  height: 1px;
  color: grey;
`;
