import { reactotronRedux } from 'reactotron-redux';

import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux())
    .use(asyncStorage())
    .connect();

  tron.clear();
  console.tron = tron;
}
