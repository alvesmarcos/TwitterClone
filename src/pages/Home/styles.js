import styled from 'styled-components/native';

import { colors } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primaryDark};
`;

export const Header = styled.View`
  height: 54px;
  padding: 4px 16px;
  background-color: ${colors.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.primaryDark};
`;

export const SearchBarArea = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const ContentSearchBar = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primaryDark};
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
  color: grey;
`;

export const Trend = styled.TouchableOpacity`
  background-color: ${colors.primary};
  padding: 8px 16px;
`;

export const TrendTextHeader = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 18px;
`;

export const TrendPosition = styled.Text`
  color: grey;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const TrendName = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 16px;
`;

export const TrendVolume = styled.Text`
  color: grey;
  font-size: 16px;
  margin-top: 4px;
`;

export const HorizontalSeparator = styled.View`
  height: 1px;
  color: grey;
`;
