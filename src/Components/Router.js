import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SecretForm from './SecretForm';
import SecretActivity from './SecretActivity';

const RouterComponent = () => (
    <Router>
      <Scene key="root">
        <Scene key="secretForm" component={SecretForm} initial hideNavBar />
        <Scene key="secretActivity" component={SecretActivity} />
      </Scene>
    </Router>
  );

export default RouterComponent;
