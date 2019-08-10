import styled from 'styled-components/native';

import { metrics } from '~/styles';

export const Container = styled.View`
  height: ${metrics.toolbarHeight}px;
  padding: ${metrics.basePadding / 4}px ${metrics.basePadding}px;
  background-color: ${props => props.theme.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.divider};
`;
