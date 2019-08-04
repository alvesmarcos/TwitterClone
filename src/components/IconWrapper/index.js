import React from 'react';
import PropTypes from 'prop-types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const propTypes = {
  type: PropTypes.string.isRequired,
};

function IconWrapper({ type, ...rest }) {
  let Icon = null;
  // select icon pack by type ☺
  switch (type) {
    case 'Ionicons': {
      Icon = Ionicons;
      break;
    }
    case 'SimpleLineIcons': {
      Icon = SimpleLineIcons;
      break;
    }
    case 'EvilIcons': {
      Icon = EvilIcons;
      break;
    }
    default:
      Icon = null;
  }
  return <Icon {...rest} />;
}

IconWrapper.propTypes = propTypes;

export default IconWrapper;
