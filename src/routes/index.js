import { createAppContainer, createStackNavigator } from 'react-navigation';

import transitionConfig from '~/config/Transition';
// import { Home, Profile, Tweets } from '~/pages';
import { Home, Tweets } from '~/pages';

const AppNavigator = createStackNavigator(
  { Home, Tweets },
  { headerMode: 'none', transitionConfig }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
