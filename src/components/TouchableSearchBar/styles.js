import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const ContentSearchBar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primaryDark};
  padding: 0px 8px 0px 8px;
  height: 36;
  flex-direction: row;
  border-radius: 18px;
  align-items: center;
  margin: 0px 16px 0px 16px;
`;

export const PlaceholderSearch = styled.Text`
  margin-left: 8px;
  font-size: 16px;
  color: ${props => props.color};
`;
