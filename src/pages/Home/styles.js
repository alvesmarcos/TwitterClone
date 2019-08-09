import styled from 'styled-components/native';

export const Container = styled.View`
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
  color: white;
  font-size: 18px;
  margin: 8px 16px;
`;
