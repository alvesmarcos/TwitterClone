import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

export const FooterList = styled.View`
  height: 64px;
`;

export const HeaderList = styled.View`
  background-color: ${colors.primary};
`;

export const TrendHeader = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 18px;
  margin: 8px 16px;
`;
