import { createAppContainer, createStackNavigator } from 'react-navigation';

import transitionConfig from '~/config/Transition';
import { Splash, Home, Profile, Tweets } from '~/pages';

const AppNavigator = createStackNavigator(
  { Splash, Home, Tweets, Profile },
  { headerMode: 'none', transitionConfig }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
