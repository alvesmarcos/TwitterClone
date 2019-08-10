import React from 'react';
import PropTypes from 'prop-types';

import { Container, Image } from './styles';

const propTypes = {
  imgSrc: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  size: PropTypes.number.isRequired,
  isRemote: PropTypes.bool,
};

const defaultProps = {
  isRemote: false,
};

const AvatarImage = ({ imgSrc, size, isRemote, ...rest }) => (
  <Container size={size} {...rest}>
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
