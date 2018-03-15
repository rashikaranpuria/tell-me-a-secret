import React, { Component } from 'react';
import { View, Button, TextInput } from 'react-native';
import firebase from 'firebase';

class SecretForm extends Component {

  state = {
    secretText: ''
  }

  onSubmitSecret = () => {
    const textVal = this.state.secretText;
    firebase.database().ref('/secrets')
      .push({ value: textVal })
      .then(() => {
        console.log('submit secret success');
        this.setState({ secretText: '' });
      });
  }

  render() {
    return (
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(secretText) => this.setState({ secretText })}
          placeholder="what's your secret"
          value={this.state.secretText}
        />
        <Button
          onPress={this.onSubmitSecret.bind(this)}
          title="Submit"
          color="#52b3d9"
          accessibilityLabel="Submit a secret"
        />
      </View>
    );
  }
}

const styles = {
  textInputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  containerStyle: {
    padding: 16
  }
};

export default SecretForm;
