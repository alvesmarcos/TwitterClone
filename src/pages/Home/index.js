import React, { useState, useEffect, useMemo } from 'react';
import { FlatList, StatusBar, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import {
  AvatarImage,
  IconWrapper,
  Toolbar,
  TouchableSearchBar,
  HorizontalSeparator,
  ModalSearch,
} from '~/components';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { reqGetTrends } from '~/store/modules/trends/actions';
import { setLightTheme } from '~/store/modules/theme/actions';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import Trend from './components/Trend';
import { Container, FooterList, HeaderList, TrendHeader } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Home({ navigation }) {
  // states

  const [modalVisible, setModalVisible] = useState(false);

  // redux vars ♥

  const dispatch = useDispatch();
  const isLight = useSelector(state => state.themeReducer.isLight);
  const theme = useSelector(state => state.themeReducer.mode);
  const trends = useSelector(state => state.trendsReducer.data);
  const loading = useSelector(state => state.trendsReducer.loading);

  // lifecycle functions

  useEffect(() => {
    dispatch(reqGetTrends());
  }, []);

  // functions

  function changePalette() {
    dispatch(setLightTheme(!isLight));
  }

  function keyExtractor(_, index) {
    return index.toString();
  }

  function onDismissModal() {
    setModalVisible(false);
  }

  function onShowModal() {
    setModalVisible(true);
  }

  function navigateToTweet() {
    navigation.navigate('Tweets');
  }

  function reloadTrends() {
    dispatch(reqGetTrends());
  }

  function searchTweets(topic) {
    dispatch(setTweetTopic(topic));
    navigateToTweet();
  }

  function renderTrend(data) {
    const { item, index } = data;
    return (
      <Trend
        onPress={() => searchTweets(item.name)}
        rank={index + 1}
        name={item.name}
        volume={item.tweet_volume}
      />
    );
  }

  function renderHeader() {
    return (
      <HeaderList>
        <TrendHeader>Brazil trends</TrendHeader>
        <HorizontalSeparator />
      </HeaderList>
    );
  }

  function renderList() {
    return (
      <FlatList
        data={trends}
        keyExtractor={keyExtractor}
        renderItem={renderTrend}
        ItemSeparatorComponent={HorizontalSeparator}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={FooterList}
        refreshing={loading}
        onRefresh={reloadTrends}
      />
    );
  }

  // hooks to re-render only when necessary

  const FlatListTrends = useMemo(() => renderList(), [trends]);

  // render

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.statusBarColor}
          barStyle={theme.barStyle}
        />
        <Toolbar>
          <AvatarImage imgSrc={ProfileLogo} size={36} />
          <TouchableSearchBar
            title="Search Twitter"
            textColor={theme.hint}
            onPress={onShowModal}
          />
          <TouchableOpacity onPress={changePalette}>
            <IconWrapper
              type="SimpleLineIcons"
              name="settings"
              size={25}
              color={theme.accent}
            />
          </TouchableOpacity>
        </Toolbar>
        {FlatListTrends}
        <ModalSearch
          visible={modalVisible}
          handleDismiss={onDismissModal}
          handleSubmit={navigateToTweet}
          textColor={theme.contrast}
          placeholderColor={theme.hint}
        />
      </Container>
    </ThemeProvider>
  );
}

Home.propTypes = propTypes;

export default Home;
