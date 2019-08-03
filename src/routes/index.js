import { createAppContainer, createStackNavigator } from 'react-navigation';

import { Home, Timeline } from '~/pages';

const AppNavigator = createStackNavigator({ Home, Timeline });

const Routes = createAppContainer(AppNavigator);

export default Routes;
