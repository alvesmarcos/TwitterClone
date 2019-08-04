import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { Toolbar, TouchableSearchBar, Tweet, IconWrapper } from '~/components';
import { colors } from '~/styles';
import { Container, Button } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function Tweets({ navigation }) {
  return (
    <Container>
      <Toolbar>
        <Button onPress={() => navigation.goBack()}>
          <IconWrapper
            type="Ionicons"
            name="ios-arrow-back"
            size={25}
            color={colors.accent}
          />
        </Button>
        <TouchableSearchBar
          title="Desenvolvimento"
          textColor="black"
          onPress={() => navigation.goBack()}
        />
        <IconWrapper
          type="Ionicons"
          name="ios-options"
          size={25}
          color={colors.accent}
        />
      </Toolbar>
      <Tweet
        name="Marcos Alves"
        username="@alvesdev"
        date="3d"
        text="Learn how to troubleshoot messages that pass through Amazon SNS topics by using AWS X-Ray"
        favoriteCount={40}
        replyCount={3}
        retweetCount={19}
      />
      <View style={{ color: 'gray', height: 1 }} />
      <Tweet
        name="Marcos Alves"
        username="@alvesdev"
        date="3d"
        text="Learn how to troubleshoot messages that pass through Amazon SNS topics by using AWS X-Ray"
        favoriteCount={40}
        replyCount={3}
        retweetCount={19}
      />
      <View style={{ color: 'gray', height: 1 }} />
      <Tweet
        name="Marcos Alves"
        username="@alvesdev"
        date="3d"
        text="Learn how to troubleshoot messages that pass through Amazon SNS topics by using AWS X-Ray"
        favoriteCount={40}
        replyCount={3}
        retweetCount={19}
      />
      <View style={{ color: 'gray', height: 1 }} />
      <Tweet
        name="Marcos Alves"
        username="@alvesdev"
        date="3d"
        text="Learn how to troubleshoot messages that pass through Amazon SNS topics by using AWS X-Ray"
        favoriteCount={40}
        replyCount={3}
        retweetCount={19}
      />
    </Container>
  );
}

Tweets.propTypes = propTypes;

export default Tweets;
