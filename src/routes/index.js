import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home, Profile, Tweets } from '~/pages';

const AppNavigator = createStackNavigator(
  { Home, Tweets, Profile },
  { headerMode: 'none' }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
