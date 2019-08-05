import React, { useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  AvatarImage,
  IconWrapper,
  Toolbar,
  TouchableSearchBar,
  HorizontalSeparator,
} from '~/components';
import Trend from './components/Trend';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { colors } from '~/styles';
import { reqGetTrends } from '~/store/modules/trends/actions';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import { Container, FooterList, HeaderList, TrendHeader } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Home({ navigation }) {
  // connect using hooks ♥
  const dispatch = useDispatch();
  const trends = useSelector(state => state.trendsReducer.data);
  const loading = useSelector(state => state.trendsReducer.loading);

  useEffect(() => {
    dispatch(reqGetTrends());
  }, []);

  function searchTweets(topic) {
    dispatch(setTweetTopic(topic));
    //--
    navigation.navigate('Tweets');
  }

  function renderTrend(item, index) {
    return (
      <Trend
        onPress={() => searchTweets(item.name)}
        rank={index + 1}
        name={item.name}
        volume={item.tweet_volume}
      />
    );
  }

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
      <FlatList
        data={trends}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => renderTrend(item, index)}
        ItemSeparatorComponent={HorizontalSeparator}
        ListHeaderComponent={() => (
          <HeaderList>
            <TrendHeader>Brazil trends</TrendHeader>
            <HorizontalSeparator />
          </HeaderList>
        )}
        ListFooterComponent={FooterList}
        refreshing={loading}
        onRefresh={() => dispatch(reqGetTrends())}
      />
    </Container>
  );
}

Home.propTypes = propTypes;

export default Home;
