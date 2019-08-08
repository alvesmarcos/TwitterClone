import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  border-color: ${colors.primary};
  border-width: 3px;
  overflow: hidden;
`;

export const Image = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;
