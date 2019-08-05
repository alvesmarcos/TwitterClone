import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Toolbar from '~/components/Toolbar';
import IconWrapper from '~/components/IconWrapper';
import { colors } from '~/styles';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import {
  Container,
  SearchContainer,
  Input,
  TextBack,
  RoundButton,
  HelperTextAnimated,
  CustomModal,
} from './styles';

const propTypes = {
  handleDismiss: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

function ModalSearch({ handleDismiss, handleSubmit, visible }) {
  // connect using hooks ♥
  const topic = useSelector(state => state.tweetsReducer.topic);
  const dispatch = useDispatch();

  // states
  const [helperTextY, setHelperTextY] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      Animated.spring(helperTextY, {
        toValue: 25,
        bounciness: 15,
      }).start();
    } else {
      setHelperTextY(new Animated.Value(0));
    }
  }, [visible]);

  function handleValueChange(text) {
    dispatch(setTweetTopic(text));
  }

  return (
    <CustomModal
      isVisible={visible}
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
    >
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
              value={topic}
              onChangeText={handleValueChange}
              placeholder="Search Twitter"
              selectionColor={colors.accent}
              onSubmitEditing={handleSubmit}
              autoFocus
            />
            {topic.length !== 0 && (
              <RoundButton onPress={() => handleValueChange('')}>
                <IconWrapper
                  type="Ionicons"
                  name="ios-close"
                  size={20}
                  color="white"
                />
              </RoundButton>
            )}
          </SearchContainer>
          <TextBack onPress={handleDismiss}>Cancel</TextBack>
        </Toolbar>
        <HelperTextAnimated style={{ top: helperTextY }}>
          Try searching for people, topics or keywords
        </HelperTextAnimated>
      </Container>
    </CustomModal>
  );
}

ModalSearch.propTypes = propTypes;

export default ModalSearch;
