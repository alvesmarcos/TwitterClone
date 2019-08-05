import React from 'react';
import PropTypes from 'prop-types';

import { formatNumberVolume } from '~/util';
import { Container, TextRank, TextName, TextVolume } from './styles';

const propTypes = {
  rank: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  volume: PropTypes.number,
};

const defaultProps = {
  volume: 0,
};

const Trend = ({ rank, name, volume, ...rest }) => (
  <Container {...rest}>
    <TextRank>{`${rank} • Trending`}</TextRank>
    <TextName>{name}</TextName>
    {volume && (
      <TextVolume>{`${formatNumberVolume(volume)} Tweets`}</TextVolume>
    )}
  </Container>
);

Trend.propTypes = propTypes;
Trend.defaultProps = defaultProps;

export default Trend;
