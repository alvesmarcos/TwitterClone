import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Tweet, HorizontalSeparator } from '~/components';
import { reqGetUserTimeline } from '~/store/modules/user/actions';
import { Container } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

function Profile({ navigation }) {
  // connect with reducer using hooks ♥
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.data);
  const timeline = useSelector(state => state.userReducer.timeline);
  const loading = useSelector(state => state.userReducer.loading);

  useEffect(() => {
    dispatch(reqGetUserTimeline(user.id_str));
  }, []);

  function renderTweet(item) {
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
      />
    );
  }

  return (
    <Container>
      <FlatList
        data={timeline}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => renderTweet(item, index)}
        ItemSeparatorComponent={HorizontalSeparator}
        refreshing={loading}
        onRefresh={() => dispatch(reqGetUserTimeline(user.id_str))}
      />
    </Container>
  );
}

Profile.propTypes = propTypes;

export default Profile;
