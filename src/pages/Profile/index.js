import React, { useEffect, useState } from 'react';
import { View, Animated, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';

import { Tweet, HorizontalSeparator, IconWrapper } from '~/components';
import { reqGetUserTimeline } from '~/store/modules/user/actions';
import { metrics, colors } from '~/styles';
import { formatNumberVolume } from '~/util';
import {
  Container,
  HeaderScrollableAnimated,
  ContainerTextBottomAnimated,
  TitleBottom,
  ScrollView,
  AvatarImageAnimated,
  ArrowContainer,
  TextName,
  TextUsername,
  InformationContainer,
  TextDescription,
  ContentRow,
  TextSmallInfo,
  ContentMarginRight,
} from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

function Profile({ navigation }) {
  // states
  const [scrollOffset] = useState(new Animated.Value(0));

  // connect with reducer using hooks ♥
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.data);
  const timeline = useSelector(state => state.userReducer.timeline);
  const loading = useSelector(state => state.userReducer.loading);

  // animations

  const headerHeight = scrollOffset.interpolate({
    inputRange: [0, metrics.headerMaxHeight - metrics.headerMinHeight],
    outputRange: [metrics.headerMaxHeight, metrics.headerMinHeight],
    extrapolate: 'clamp',
  });

  const profileImageHeight = scrollOffset.interpolate({
    inputRange: [0, metrics.headerMaxHeight - metrics.headerMinHeight],
    outputRange: [metrics.profileImageMaxHeight, metrics.profileImageMinHeight],
    extrapolate: 'clamp',
  });

  const profileImageMarginTop = scrollOffset.interpolate({
    inputRange: [0, metrics.headerMaxHeight - metrics.headerMinHeight],
    outputRange: [
      metrics.headerMaxHeight - metrics.profileImageMaxHeight / 2,
      metrics.headerMaxHeight + 5,
    ],
    extrapolate: 'clamp',
  });

  const headerZindex = scrollOffset.interpolate({
    inputRange: [0, metrics.headerMaxHeight - metrics.headerMinHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const headerTitleBottom = scrollOffset.interpolate({
    inputRange: [
      0,
      metrics.headerMaxHeight - metrics.headerMinHeight,
      metrics.headerMaxHeight - metrics.headerMinHeight + 15,
      metrics.headerMaxHeight -
        metrics.headerMinHeight +
        15 +
        metrics.profileImageMinHeight +
        50,
    ],
    outputRange: [-40, -40, -40, 5],
    extrapolate: 'clamp',
  });

  useEffect(() => {
    dispatch(reqGetUserTimeline(user.id_str));
  }, []);

  function keyExtractor(_, index) {
    return index.toString();
  }

  function reloadUserTimeline() {
    dispatch(reqGetUserTimeline(user.id_str));
  }

  function backToTweets() {
    navigation.goBack();
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
      />
    );
  }

  return (
    <Container>
      <StatusBar
        backgroundColor={colors.transparentDark}
        barStyle="light-content"
        translucent
      />
      <HeaderScrollableAnimated
        style={[
          {
            backgroundColor: colors.accent,
            height: headerHeight,
            zIndex: headerZindex,
          },
        ]}
      >
        <ContainerTextBottomAnimated style={{ bottom: headerTitleBottom }}>
          <TitleBottom>{user.screen_name}</TitleBottom>
          <TitleBottom>{`${formatNumberVolume(
            user.statuses_count
          )} Tweets`}</TitleBottom>
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
            borderRadius: metrics.profileImageMaxHeight / 2,
            marginTop: profileImageMarginTop,
          }}
          source={{ uri: user.profile_image_url_https }}
        />
        <InformationContainer>
          <TextName>{user.name}</TextName>
          <TextUsername>{`@${user.screen_name}`}</TextUsername>
          <TextDescription>{user.description}</TextDescription>
          <ContentRow>
            <ContentMarginRight>
              <IconWrapper
                type="SimpleLineIcons"
                name="calendar"
                size={16}
                color="gray"
              />
            </ContentMarginRight>
            <TextSmallInfo>
              {format(user.created_at, '[Joined] MMMM YYYY')}
            </TextSmallInfo>
          </ContentRow>
          <ContentRow>
            <ContentMarginRight>
              <ContentRow>
                <TextSmallInfo strong>{user.friends_count}</TextSmallInfo>
                <TextSmallInfo> Following</TextSmallInfo>
              </ContentRow>
            </ContentMarginRight>
            <ContentRow>
              <TextSmallInfo strong>{user.followers_count}</TextSmallInfo>
              <TextSmallInfo> Followers</TextSmallInfo>
            </ContentRow>
          </ContentRow>
        </InformationContainer>
        <HorizontalSeparator />
        <View>
          <FlatList
            data={timeline}
            keyExtractor={keyExtractor}
            renderItem={renderTweet}
            ItemSeparatorComponent={HorizontalSeparator}
            refreshing={loading}
            onRefresh={reloadUserTimeline}
            removeClippedSubviews
          />
        </View>
      </ScrollView>
      <ArrowContainer onPress={backToTweets}>
        <IconWrapper
          type="Ionicons"
          name="ios-arrow-back"
          size={20}
          color="white"
        />
      </ArrowContainer>
    </Container>
  );
}

Profile.propTypes = propTypes;

export default Profile;
