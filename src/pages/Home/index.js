import React from 'react';
import { StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import {
  AvatarImage,
  IconWrapper,
  Toolbar,
  TouchableSearchBar,
} from '~/components';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { colors } from '~/styles';
import {
  Container,
  Trend,
  TrendName,
  TrendPosition,
  TrendTextHeader,
  TrendVolume,
  HorizontalSeparator,
} from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Home({ navigation }) {
  return (
    <Container>
      <StatusBar
        backgroundColor={colors.primaryLight}
        barStyle="dark-content"
      />
      <Toolbar>
        <AvatarImage imgSrc={ProfileLogo} size={36} />
        <TouchableSearchBar
          title="Search Twitter"
          textColor="grey"
          onPress={() => navigation.navigate('Search')}
        />
        <IconWrapper
          type="SimpleLineIcons"
          name="settings"
          size={25}
          color={colors.accent}
        />
      </Toolbar>
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

Home.propTypes = propTypes;

export default Home;
