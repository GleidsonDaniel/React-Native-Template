import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/LoginScreen';
import Game from './screens/GameScreen';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Game
  })
);

export default Routes;
