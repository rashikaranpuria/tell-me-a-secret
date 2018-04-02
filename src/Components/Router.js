import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import SecretForm from './SecretForm';
import SecretActivity from './SecretActivity';
import InfoActivity from './InfoActivity';

const RouterComponent = () => (
    <Router>
      <Scene key="root">
        <Scene key="secretForm" component={SecretForm} hideNavBar />
        <Scene key="secretActivity" component={SecretActivity} initial hideNavBar />
        <Scene
          key="infoActivity"
          component={InfoActivity}
          navigationBarStyle={{ backgroundColor: '#ff5555' }}
          titleStyle={{ color: '#ffffff' }}
          backButtonTintColor='#ffffff'
          title="Info"
        />
      </Scene>
    </Router>
  );

export default RouterComponent;
