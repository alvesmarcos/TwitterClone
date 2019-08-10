import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.primaryDark};
`;

export const FooterList = styled.View`
  height: 64px;
`;

export const HeaderList = styled.View`
  background-color: ${props => props.theme.primary};
`;

export const TrendHeader = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.contrast};
  font-size: ${metrics.largeFont}px;
  margin: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
`;
