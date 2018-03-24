import React, { Component } from 'react';
import { View, Text } from 'react-native';
// import firebase from 'firebase';

class SecretActivity extends Component {

  state = {
    secretText: ''
  }

  componentDidMount() {
    // const min = 1;
    // const max = 100;
    // const rand = min + Math.random() * (max - min);
    // firebase
  }

  render() {
    return (
      <View>
        <Text style={styles.textStyle}>Just some text</Text>
      </View>
    );
  }
}

const styles = {
  textStyle: {
    textSize: 20
  },
  containerStyle: {
    padding: 16
  }
};

export default SecretActivity;
