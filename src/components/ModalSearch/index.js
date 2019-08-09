import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Toolbar from '~/components/Toolbar';
import IconWrapper from '~/components/IconWrapper';
import { setTweetTopic } from '~/store/modules/tweets/actions';
import {
  Container,
  SearchContainer,
  Input,
  TextBack,
  RoundButton,
  HelperText,
  CustomModal,
} from './styles';

const propTypes = {
  handleDismiss: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
};

function ModalSearch({ handleDismiss, handleSubmit, visible }) {
  const theme = useSelector(state => state.themeReducer.mode);
  // connect using hooks ♥
  const topic = useSelector(state => state.tweetsReducer.topic);
  const dispatch = useDispatch();

  function clearTopic() {
    dispatch(setTweetTopic(''));
  }

  function handleValueChange(text) {
    dispatch(setTweetTopic(text));
  }

  function onSubmit() {
    handleSubmit();
    handleDismiss();
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
              placeholderTextColor={theme.hint}
              selectionColor={theme.accent}
              onSubmitEditing={onSubmit}
              autoFocus
            />
            {topic.length !== 0 && (
              <RoundButton onPress={clearTopic}>
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
        <HelperText>Try searching for people, topics or keywords</HelperText>
      </Container>
    </CustomModal>
  );
}

ModalSearch.propTypes = propTypes;

export default ModalSearch;
