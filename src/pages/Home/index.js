import React from 'react';
import { StatusBar } from 'react-native';

import { AvatarImage, IconWrapper } from '~/components';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { colors } from '~/styles';
import {
  Container,
  Header,
  SearchBarArea,
  ContentSearchBar,
  PlaceholderSearch,
  Trend,
  TrendName,
  TrendPosition,
  TrendTextHeader,
  TrendVolume,
  HorizontalSeparator,
} from './styles';

export default function Home() {
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.primaryLight}
        barStyle="dark-content"
      />
      <Header>
        <AvatarImage imgSrc={ProfileLogo} size={36} />
        <SearchBarArea>
          <ContentSearchBar>
            <IconWrapper
              type="Ionicons"
              name="ios-search"
              size={20}
              color="grey"
            />
            <PlaceholderSearch>Search Twitter</PlaceholderSearch>
          </ContentSearchBar>
        </SearchBarArea>
        <IconWrapper
          type="SimpleLineIcons"
          name="settings"
          size={25}
          color={colors.accent}
        />
      </Header>
      <Trend>
        <TrendTextHeader>trends</TrendTextHeader>
      </Trend>
      <HorizontalSeparator />
      <Trend>
        <TrendPosition>1 • Trending</TrendPosition>
        <TrendName>Muriel</TrendName>
        <TrendVolume>5,346 Tweets</TrendVolume>
      </Trend>
      <HorizontalSeparator />
      <Trend>
        <TrendPosition>2 • Trending</TrendPosition>
        <TrendName>Youny</TrendName>
        <TrendVolume>1,346 Tweets</TrendVolume>
      </Trend>
    </Container>
  );
}
