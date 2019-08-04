import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {
  children: null,
};

const Toolbar = ({ children }) => <Container>{children}</Container>;

Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
