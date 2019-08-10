import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  padding: ${metrics.basePadding}px;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: ${metrics.basePadding / 2}px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
  overflow: hidden;
`;

export const ContentColumn = styled.View`
  flex-direction: column;
  margin-top: 2px;
`;

export const Text = styled.Text`
  font-size: ${metrics.mediumFont}px;
  color: ${props => props.color};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  margin-top: ${metrics.baseMargin / 2}px;
  justify-content: space-between;
  padding-right: ${metrics.basePadding * 2}px;
`;

export const TextCount = styled.Text`
  margin-left: ${metrics.baseMargin / 4}px;
  color: ${props => props.theme.hint};
`;
