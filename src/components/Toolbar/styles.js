import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  height: 54px;
  padding: 4px 16px;
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryDark};
`;
