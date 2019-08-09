import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
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
import Trend from './components/Trend';
import ProfileLogo from '~/assets/alvsdev.jpg';
import { reqGetTrends } from '~/store/modules/trends/actions';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import { Container, FooterList, HeaderList, TrendHeader } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Home({ navigation }) {
  // states
  const [modalVisible, setModalVisible] = useState(false);
  // connect using hooks ♥
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeReducer.mode);
  const trends = useSelector(state => state.trendsReducer.data);
  const loading = useSelector(state => state.trendsReducer.loading);

  useEffect(() => {
    dispatch(reqGetTrends());
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

  function navigateToTweet() {
    navigation.navigate('Tweets');
  }

  function reloadTrends() {
    dispatch(reqGetTrends());
  }

  function searchTweets(topic) {
    dispatch(setTweetTopic(topic));
    //--
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

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar
          backgroundColor={theme.primaryDark}
          barStyle="light-content"
        />
        <Toolbar>
          <AvatarImage imgSrc={ProfileLogo} size={36} />
          <TouchableSearchBar
            title="Search Twitter"
            textColor={theme.hint}
            onPress={onShowModal}
          />
          <IconWrapper
            type="SimpleLineIcons"
            name="settings"
            size={25}
            color={theme.accent}
          />
        </Toolbar>
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
