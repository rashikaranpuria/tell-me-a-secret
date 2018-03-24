import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SecretForm from './SecretForm';
import reducer from '../Store/reducer';

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
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <SecretForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#0000ff'
  }
});

export default App;
