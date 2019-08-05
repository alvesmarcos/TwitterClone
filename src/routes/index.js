import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home, Timeline, Search, Tweets } from '~/pages';

const AppNavigator = createStackNavigator(
  { Home, Tweets, Search, Timeline },
  { headerMode: 'none' }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
