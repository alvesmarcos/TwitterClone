import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home, Timeline, Search } from '~/pages';

const AppNavigator = createStackNavigator(
  { Home, Search, Timeline },
  { headerMode: 'none' }
);

const Routes = createAppContainer(AppNavigator);

export default Routes;
