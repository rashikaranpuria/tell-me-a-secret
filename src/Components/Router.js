import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import SecretForm from './SecretForm';
import SecretActivity from './SecretActivity';
import InfoActivity from './InfoActivity';

const RouterComponent = () => (
    <Router tintColor='#ffffff' barButtonIconStyle={{ tintColor: 'green' }}>
      <Scene key="root">
        <Scene key="secretForm" component={SecretForm} hideNavBar />
        <Scene key="secretActivity" component={SecretActivity} initial hideNavBar />
        <Scene
          tintColor='#ffffff'
          key="infoActivity"
          component={InfoActivity}
          navigationBarStyle={{ backgroundColor: '#ff5555' }}
          titleStyle={{ color: '#ffffff' }}
          backButtonTintColor='#ffffff'
          navBarButtonColor='#003300'
          barButtonIconStyle={{ tintColor: 'red' }}
          title="Info"
          leftButtonIconStyle={{ tintColor: 'red' }}
        />
      </Scene>
    </Router>
  );

export default RouterComponent;
