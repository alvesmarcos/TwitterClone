import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { reqGetTweets, setTweetTopic } from '~/store/modules/tweets/actions';
import { setUserData } from '~/store/modules/user/actions';
import {
  Toolbar,
  TouchableSearchBar,
  Tweet,
  IconWrapper,
  HorizontalSeparator,
  ModalSearch,
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
  // states
  const [modalVisible, setModalVisible] = useState(false);
  // connect with reducer using hooks ♥
  const dispatch = useDispatch();
  const topic = useSelector(state => state.tweetsReducer.topic);
  const tweets = useSelector(state => state.tweetsReducer.data);
  const loading = useSelector(state => state.tweetsReducer.loading);

  useEffect(() => {
    dispatch(reqGetTweets(topic));
  }, []);

  function keyExtractor(_, index) {
    return index.toString();
  }

  function onDismissModal() {
    setModalVisible(false);
  }

  function onShowModal() {
    setModalVisible(true);
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  function handleBack() {
    navigation.goBack();
    //--
    dispatch(setTweetTopic(''));
  }

  function handleActionTweet(user) {
    dispatch(setUserData(user));
    navigateToProfile();
  }

  function reloadTweets() {
    dispatch(reqGetTweets(topic));
  }

  function renderTweet(data) {
    const { item } = data;
    return (
      <Tweet
        name={item.user.name}
        profileImage={item.user.profile_image_url_https}
        username={item.user.screen_name}
        replyName={item.in_reply_to_screen_name}
        date={item.created_at}
        text={item.text}
        favoriteCount={item.favorite_count}
        replyCount={item.reply_count}
        retweetCount={item.retweet_count}
        onPress={() => handleActionTweet(item.user)}
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
        <Button onPress={handleBack}>
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
          onPress={onShowModal}
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
        keyExtractor={keyExtractor}
        renderItem={renderTweet}
        ItemSeparatorComponent={HorizontalSeparator}
        refreshing={loading}
        onRefresh={reloadTweets}
      />
      <ModalSearch
        visible={modalVisible}
        handleDismiss={onDismissModal}
        handleSubmit={reloadTweets}
      />
    </Container>
  );
}

Tweets.propTypes = propTypes;

export default Tweets;
