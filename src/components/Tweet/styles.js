import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  background-color: ${colors.primary};
  padding: 16px;
  flex-direction: row;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: column;
  padding-left: 8px;
`;

export const ContentRow = styled.View`
  flex-direction: row;
`;

export const ContentColumn = styled.View`
  flex-direction: column;
  margin-top: 2px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${props => props.color};
  font-weight: ${props => (props.weight ? props.weight : 'normal')};
`;

export const ActionContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
  justify-content: space-between;
  padding-right: 64px;
`;

export const TextCount = styled.Text`
  margin-left: 4px;
  color: gray;
`;
