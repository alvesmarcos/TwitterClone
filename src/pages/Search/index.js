import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { IconWrapper, Toolbar } from '~/components';
import { colors } from '~/styles';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import {
  Container,
  SearchContainer,
  Input,
  TextBack,
  RoundButton,
  HelperTextAnimated,
} from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

function Search({ navigation }) {
  // connect using hooks ♥
  const topic = useSelector(state => state.tweetsReducer.topic);
  const dispatch = useDispatch();

  // states
  const [text, setText] = useState(topic);
  const [helperTextY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(helperTextY, {
      toValue: 20,
      bounciness: 15,
    }).start();
  }, []);

  function handleSearch() {
    dispatch(setTweetTopic(text));
    //--
    navigation.navigate('Tweets');
  }

  return (
    <Container>
      <Toolbar>
        <SearchContainer>
          <IconWrapper
            type="Ionicons"
            name="ios-search"
            size={20}
            color="grey"
          />
          <Input
            value={text}
            onChangeText={value => setText(value)}
            placeholder="Search Twitter"
            selectionColor={colors.accent}
            onSubmitEditing={handleSearch}
            autoFocus
          />
          {text.length !== 0 && (
            <RoundButton onPress={() => setText('')}>
              <IconWrapper
                type="Ionicons"
                name="ios-close"
                size={20}
                color="white"
              />
            </RoundButton>
          )}
        </SearchContainer>
        <TextBack onPress={() => navigation.goBack()}>Cancel</TextBack>
      </Toolbar>
      <HelperTextAnimated style={{ top: helperTextY }}>
        Try searching for people, topics or keywords
      </HelperTextAnimated>
    </Container>
  );
}

Search.propTypes = propTypes;

export default Search;
