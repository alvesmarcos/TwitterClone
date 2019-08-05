import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home, Timeline, Tweets } from '~/pages';

const AppNavigator = createStackNavigator(
  { Home, Tweets, Timeline },
  { headerMode: 'none' }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
