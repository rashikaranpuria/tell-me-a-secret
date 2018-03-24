import React, { Component } from 'react';
import { View, Button, TextInput, Text, ImageBackground } from 'react-native';
import firebase from 'firebase';

class SecretForm extends Component {

  state = {
    secretText: ''
  }

  onSubmitSecret = () => {
    let oldCount = 0;
    firebase.database().ref('/count/value').once('value').then((snapshot) => {
      oldCount = snapshot.val();
      console.log(oldCount);
      firebase.database().ref('/count').set({ value: oldCount + 1 })
        .then(() => {
          const textVal = this.state.secretText;
          firebase.database().ref(`/secrets/${oldCount + 1}`)
            .push({ value: textVal })
            .then(() => {
              console.log('submit secret success');
              this.setState({ secretText: '' });
            });
        });
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.containerStyle}
        source={require('../images/back1.png')}
      >
        <View style={styles.headerStyle}>
          <Text>a</Text>
          <Text style={styles.headerTitle}>sbhfbhdf</Text>
          <Text>b</Text>
        </View>
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
      </ImageBackground>
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
    flex: 1,
    position: 'relative',
    resizeMode: 'cover'
  },
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  headerTitle: {
  }
};

export default SecretForm;
