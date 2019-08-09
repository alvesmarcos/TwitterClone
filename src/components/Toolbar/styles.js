import styled from 'styled-components/native';

export const Container = styled.View`
  height: 54px;
  padding: 4px 16px;
  background-color: ${props => props.theme.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.divider};
`;
