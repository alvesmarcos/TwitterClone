import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const ContentSearchBar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primaryDark};
  padding: 0px ${metrics.basePadding / 2}px;
  height: 36px;
  flex-direction: row;
  border-radius: 18px;
  align-items: center;
  margin: 0px ${metrics.basePadding}px;
`;

export const PlaceholderSearch = styled.Text`
  margin-left: ${metrics.basePadding / 2}px;
  font-size: ${metrics.mediumFont}px;
  color: ${props => props.color};
`;
