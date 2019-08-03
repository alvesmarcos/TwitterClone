import styled from 'styled-components/native';

// import { colors } from '~/styles';

export const Container = styled.View``;

export const Image = styled.Image`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  padding: 2px;
  border-radius: ${props => props.size / 2}px;
`;
