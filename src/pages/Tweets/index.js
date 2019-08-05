import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { reqGetTweets } from '~/store/modules/tweets/actions';
import {
  Toolbar,
  TouchableSearchBar,
  Tweet,
  IconWrapper,
  HorizontalSeparator,
} from '~/components';
import { colors } from '~/styles';
import { Container, Button } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Tweets({ navigation }) {
  // connect using hooks ♥
  const dispatch = useDispatch();
  const topic = useSelector(state => state.tweetsReducer.topic);
  const tweets = useSelector(state => state.tweetsReducer.data);
  const loading = useSelector(state => state.tweetsReducer.loading);

  useEffect(() => {
    dispatch(reqGetTweets(topic));
  }, []);

  function renderTweet(item) {
    return (
      <Tweet
        name={item.user.name}
        profileImage={item.user.profile_image_url_https}
        username={item.user.screen_name}
        date={item.created_at}
        text={item.text}
        favoriteCount={item.favorite_count}
        replyCount={item.reply_count}
        retweetCount={item.retweet_count}
      />
    );
  }

  return (
    <Container>
      <Toolbar>
        <Button onPress={() => navigation.goBack()}>
          <IconWrapper
            type="Ionicons"
            name="ios-arrow-back"
            size={25}
            color={colors.accent}
          />
        </Button>
        <TouchableSearchBar
          title={topic}
          textColor="black"
          onPress={() => navigation.goBack()}
        />
        <IconWrapper
          type="Ionicons"
          name="ios-options"
          size={25}
          color={colors.accent}
        />
      </Toolbar>
      <FlatList
        data={tweets}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => renderTweet(item, index)}
        ItemSeparatorComponent={HorizontalSeparator}
        refreshing={loading}
        onRefresh={() => dispatch(reqGetTweets(topic))}
      />
    </Container>
  );
}

Tweets.propTypes = propTypes;

export default Tweets;
