import React, { useEffect, useState, useMemo } from 'react';
import { Animated, FlatList, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ThemeProvider } from 'styled-components/native';

import { Tweet, HorizontalSeparator, IconWrapper } from '~/components';
import { reqGetUserTimeline } from '~/store/modules/user/actions';
import { metrics } from '~/styles';
import {
  Container,
  HeaderScrollableAnimated,
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
  ButtonFollow,
  TextButton,
  ContentRowEnd,
} from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

function Profile({ navigation }) {
  // states

  const [scrollOffset] = useState(new Animated.Value(0));

  // redux vars ♥
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer.mode);
  const user = useSelector(state => state.userReducer.data);
  const timeline = useSelector(state => state.userReducer.timeline);
  const loading = useSelector(state => state.userReducer.loading);

  // helpers
  const joined = format(user.created_at, '[Joined] MMMM YYYY');

  // animations vars

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
      metrics.headerMaxHeight -
        (metrics.profileImageMaxHeight + metrics.profileImageMargin) / 2,
      metrics.headerMaxHeight + 5,
    ],
    extrapolate: 'clamp',
  });

  const headerZindex = scrollOffset.interpolate({
    inputRange: [0, metrics.headerMaxHeight - metrics.headerMinHeight],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  // lifecycle functions

  useEffect(() => {
    dispatch(reqGetUserTimeline(user.id_str));
  }, []);

  // functions

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

  function renderList() {
    return (
      <FlatList
        data={timeline}
        keyExtractor={keyExtractor}
        renderItem={renderTweet}
        ItemSeparatorComponent={HorizontalSeparator}
        refreshing={loading}
        onRefresh={reloadUserTimeline}
        maxToRenderPerBatch={5}
        removeClippedSubviews
      />
    );
  }

  // hooks to re-render only when necessary

  const FlatListTimeline = useMemo(() => renderList(), [timeline]);

  // render

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.transparentDark}
          barStyle="light-content"
          translucent
        />
        <HeaderScrollableAnimated
          style={[
            {
              backgroundColor: theme.accent,
              height: headerHeight,
              zIndex: headerZindex,
            },
          ]}
        >
          <Animated.Image
            source={{
              uri: user.profile_banner_url,
            }}
            style={{
              height: headerHeight,
              width: metrics.screenWidth,
            }}
          />
          {/* <ContainerTextBottomAnimated style={{ bottom: headerTitleBottom }}>
            <TitleBottomAnimated style={{ color: headerTitleTransparent }}>
              {user.name}
            </TitleBottomAnimated>
            <TitleBottomAnimated>{`${formatNumberVolume(
              user.statuses_count
            )} Tweets`}</TitleBottomAnimated>
          </ContainerTextBottomAnimated> */}
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
            <ContentRowEnd>
              <ButtonFollow>
                <TextButton>Follow</TextButton>
              </ButtonFollow>
            </ContentRowEnd>
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
              <TextSmallInfo>{joined}</TextSmallInfo>
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
          {FlatListTimeline}
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
    </ThemeProvider>
  );
}

Profile.propTypes = propTypes;

export default Profile;
