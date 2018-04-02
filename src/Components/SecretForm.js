import React, { Component } from 'react';
import firebase from 'firebase';
import { View, TextInput, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Card, Button } from 'react-native-elements';

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
        source={require('../images/back2.png')}
      >
        <Header
          outerContainerStyles={styles.headerStyle}
          leftComponent={{
              icon: 'swap-horiz',
              color: '#fff',
              size: 28,
              underlayColor: 'rgba(0, 0, 0, 0.2)',
              onPress: () => { Actions.pop(); }
          }}
          centerComponent={{ text: 'Tell me a secret', style: { color: '#fff', fontSize: 18 } }}
          rightComponent={{
            icon: 'info-outline',
            color: '#fff',
            size: 28,
            underlayColor: 'rgba(0, 0, 0, 0.2)',
            onPress: () => { Actions.infoActivity(); }
          }}
        />
        <View style={styles.mainContainerStyle}>
          <Card containerStyle={styles.formContainerStyle}>
            <TextInput
              style={styles.textInputStyle}
              onChangeText={(secretText) => this.setState({ secretText })}
              placeholder="What's your secret?"
              value={this.state.secretText}
              multiline
              numberOfLines={4}
              underlineColorAndroid='transparent'
            />
            <Button
              buttonStyle={styles.submitButtonStyle}
              onPress={this.onSubmitSecret.bind(this)}
              title="Shshsh..."
              accessibilityLabel="Submit secret button"
              containerStyle={{ margin: 0 }}
            />
          </Card>
        </View>
      </ImageBackground>
    );
  }
}

const styles = {
  submitButtonStyle: {
    marginLeft: -14,
    marginRight: -14,
    borderRadius: 8,
    backgroundColor: '#4fc3f7',
    alignSelf: 'stretch'
  },
  textInputStyle: {
    textAlignVertical: 'top',
    padding: 16,
    alignSelf: 'stretch',
    fontSize: 20
  },
  containerStyle: {
    flex: 1,
    position: 'relative'
  },
  headerStyle: {
    backgroundColor: '#ff5555',
    height: 56
  },
  mainContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainerStyle: {
    padding: 0,
    margin: 24,
    borderRadius: 8,
    alignSelf: 'stretch'
  }
};

export default SecretForm;
