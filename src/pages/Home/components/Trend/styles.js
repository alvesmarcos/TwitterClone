import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${props => props.theme.primary};
  padding: 8px 16px;
`;

export const TextRank = styled.Text`
  color: ${props => props.theme.hint};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const TextName = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.contrast};
  font-size: 16px;
`;

export const TextVolume = styled.Text`
  color: ${props => props.theme.hint};
  font-size: 16px;
  margin-top: 4px;
`;
