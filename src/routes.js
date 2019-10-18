import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Device from './pages/Device';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Dashboard,
    Device,
  }),
);

export default Routes;
