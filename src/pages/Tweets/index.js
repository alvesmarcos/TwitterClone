import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import {
  Toolbar,
  TouchableSearchBar,
  Tweet,
  IconWrapper,
  HorizontalSeparator,
  ModalSearch,
} from '~/components';
import { reqGetTweets, setTweetTopic } from '~/store/modules/tweets/actions';
import { setUserData } from '~/store/modules/user/actions';
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

  // redux vars ♥

  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer.mode);
  const topic = useSelector(state => state.tweetsReducer.topic);
  const tweets = useSelector(state => state.tweetsReducer.data);
  const loading = useSelector(state => state.tweetsReducer.loading);

  // lifecycle functions

  useEffect(() => {
    dispatch(reqGetTweets(topic));
  }, []);

  // functions

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

  function renderList() {
    return (
      <FlatList
        data={tweets}
        keyExtractor={keyExtractor}
        renderItem={renderTweet}
        ItemSeparatorComponent={HorizontalSeparator}
        refreshing={loading}
        onRefresh={reloadTweets}
      />
    );
  }

  // hooks to re-render only when necessary

  const FlatListTweets = useMemo(() => renderList(), [tweets]);

  // render

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.statusBarColor}
          barStyle={theme.barStyle}
        />
        <Toolbar>
          <Button onPress={handleBack}>
            <IconWrapper
              type="Ionicons"
              name="ios-arrow-back"
              size={25}
              color={theme.accent}
            />
          </Button>
          <TouchableSearchBar
            title={topic}
            textColor={theme.contrast}
            onPress={onShowModal}
          />
          <IconWrapper
            type="Ionicons"
            name="ios-options"
            size={25}
            color={theme.accent}
          />
        </Toolbar>
        {FlatListTweets}
        <ModalSearch
          visible={modalVisible}
          handleDismiss={onDismissModal}
          handleSubmit={reloadTweets}
        />
      </Container>
    </ThemeProvider>
  );
}

Tweets.propTypes = propTypes;

export default Tweets;
