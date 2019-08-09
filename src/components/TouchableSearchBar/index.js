import React from 'react';
import PropTypes from 'prop-types';

import IconWrapper from '~/components/IconWrapper';
import { Container, ContentSearchBar, PlaceholderSearch } from './styles';

const propTypes = {
  title: PropTypes.string.isRequired,
  textColor: PropTypes.string,
};

const defaultProps = {
  textColor: 'black',
};

const TouchableSearchBar = ({ title, textColor, ...rest }) => (
  <Container {...rest}>
    <ContentSearchBar>
      <IconWrapper type="Ionicons" name="ios-search" size={20} color="gray" />
      <PlaceholderSearch color={textColor}>{title}</PlaceholderSearch>
    </ContentSearchBar>
  </Container>
);

TouchableSearchBar.propTypes = propTypes;
TouchableSearchBar.defaultProps = defaultProps;

export default TouchableSearchBar;
