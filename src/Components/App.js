import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../Store/reducer';
import Router from './Router';

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCsfTblj4AkeIlpgmet_W70djzOYqgQzVo',
      authDomain: 'tell-me-a-secret.firebaseapp.com',
      databaseURL: 'https://tell-me-a-secret.firebaseio.com',
      projectId: 'tell-me-a-secret',
      storageBucket: 'tell-me-a-secret.appspot.com',
      messagingSenderId: '1082578733804'
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    } else {
      firebase.app();
    }
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <Router />
      </Provider>
    );
  }
}

export default App;
