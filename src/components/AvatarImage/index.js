import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './styles';

const propTypes = {
  imgSrc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.number,
  isRemote: PropTypes.bool,
};

const defaultProps = {
  size: 40,
  isRemote: false,
};

const AvatarImage = ({ imgSrc, size, isRemote }) => (
  <Container>
    {isRemote ? (
      <Image source={{ uri: imgSrc }} size={size} />
    ) : (
      <Image source={imgSrc} size={size} />
    )}
  </Container>
);

AvatarImage.propTypes = propTypes;
AvatarImage.defaultProps = defaultProps;

export default AvatarImage;
