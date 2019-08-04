import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { IconWrapper, Toolbar } from '~/components';
import { colors } from '~/styles';
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
    goBack: PropTypes.func.isRequired,
  }).isRequired,
};

function Search({ navigation }) {
  const [text, setText] = useState('');
  const [helperTextY] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(helperTextY, {
      toValue: 20,
      bounciness: 15,
    }).start();
  }, []);

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
