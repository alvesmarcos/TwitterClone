import React from 'react';
import PropTypes from 'prop-types';

import ProfilePlaceholder from '~/assets/profile-placeholder.jpg';
import { Container, Image } from './styles';

const propTypes = {
  imgSrc: PropTypes.number,
  size: PropTypes.number,
};

const defaultProps = {
  imgSrc: ProfilePlaceholder,
  size: 40,
};

const AvatarImage = ({ imgSrc, size }) => (
  <Container>
    <Image source={imgSrc} size={size} />
  </Container>
);

AvatarImage.propTypes = propTypes;
AvatarImage.defaultProps = defaultProps;

export default AvatarImage;
