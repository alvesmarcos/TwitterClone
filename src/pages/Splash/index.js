import React, { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';

import { AnimatedContainer, AnimatedIcon } from './styles';

const propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }).isRequired,
};

function Splash({ navigation }) {
  // animations

  const [transformAnim] = useState(new Animated.Value(1));
  const [opacityAnim] = useState(new Animated.Value(1));

  // functions

  function goToHome() {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })],
    });
    navigation.dispatch(resetAction);
  }

  // lifecycle functions

  useEffect(() => {
    Animated.timing(transformAnim, {
      toValue: 50,
      duration: 1200,
      delay: 2000,
      easing: Easing.elastic(2),
    }).start();
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.elastic(1),
      delay: 2200,
    }).start();
    setTimeout(() => {
      goToHome();
    }, 3000);
  }, []);

  // render

  return (
    <AnimatedContainer style={{ opacity: opacityAnim }}>
      <AnimatedIcon
        size={60}
        color="white"
        name="logo-twitter"
        style={{ transform: [{ scale: transformAnim }] }}
      />
    </AnimatedContainer>
  );
}

Splash.propTypes = propTypes;

export default Splash;
