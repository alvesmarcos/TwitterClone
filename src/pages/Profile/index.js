import React, { useEffect, useState } from 'react';
import { View, Animated, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Tweet, HorizontalSeparator } from '~/components';
import { reqGetUserTimeline } from '~/store/modules/user/actions';
import {
  Container,
  HeaderScrollableAnimated,
  ContainerTextBottomAnimated,
  TitleBottom,
  ScrollView,
  AvatarImageAnimated,
} from './styles';
import { colors } from '~/styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 70;
const PROFILE_IMAGE_MAX_HEIGHT = 80;
const PROFILE_IMAGE_MIN_HEIGHT = 40;

function Profile({ navigation }) {
  // states
  const [scrollOffset] = useState(new Animated.Value(0));
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

  const headerHeight = scrollOffset.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageHeight = scrollOffset.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop = scrollOffset.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [
      HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
      HEADER_MAX_HEIGHT + 5,
    ],
    extrapolate: 'clamp',
  });

  const headerZindex = scrollOffset.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const headerTitleBottom = scrollOffset.interpolate({
    inputRange: [
      0,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5,
      HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT + 26,
    ],
    outputRange: [-20, -20, -20, 0],
    extrapolate: 'clamp',
  });

  return (
    <Container>
      <HeaderScrollableAnimated
        style={[
          {
            backgroundColor: 'lightskyblue',
            height: headerHeight,
            zIndex: headerZindex,
          },
        ]}
      >
        <ContainerTextBottomAnimated style={{ bottom: headerTitleBottom }}>
          <TitleBottom>Marcos Alves</TitleBottom>
        </ContainerTextBottomAnimated>
      </HeaderScrollableAnimated>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: { contentOffset: { y: scrollOffset } },
          },
        ])}
      >
        <AvatarImageAnimated
          style={{
            height: profileImageHeight,
            width: profileImageHeight,
            borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
            marginTop: profileImageMarginTop,
          }}
          source={{ uri: user.profile_image_url_https }}
        />
        <View>
          {/* <Text style={{ fontWeight: 'bold', fontSize: 26, paddingLeft: 10 }}>
            Marcos Alves
          </Text> */}
          {/* {timeline.map(item => renderTweet(item))} */}

          <FlatList
            data={timeline}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => renderTweet(item)}
            ItemSeparatorComponent={HorizontalSeparator}
            refreshing={loading}
            onRefresh={() => dispatch(reqGetUserTimeline(user.id_str))}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

Profile.propTypes = propTypes;

export default Profile;
