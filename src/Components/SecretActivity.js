import React, { Component } from 'react';
import { View, Text, ImageBackground, Share } from 'react-native';
import { Header, Icon, Card, Divider, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class SecretActivity extends Component {

  state = {
    secretText: 'a basic secret',
    isRefreshDisabled: false
  }

  componentDidMount() {
    this.getNewSecret();
  }

  onClickShare = () => {
    Share.share({
      message:
      `Hey did you know, ${this.state.secretText}. \n Find more secrets on Tell me a secret.`,
      url: 'http://bam.com',
      title: 'Spicy secret :-P'
    }, {
      // Android only:
      dialogTitle: 'Share this secret',
    });
  }

  getNewSecret = () => {
    this.setState({
      isRefreshDisabled: true
    });
    const min = 1;
    let max = min;
    firebase.database().ref('/count/value').on('value', (snapshot) => {
      max = snapshot.val();
      const rand = Math.floor(Math.random() * ((max - min) + 1)) + min;
      firebase.database().ref(`/secrets/${rand}`).on('value', (innerSnapshot) => {
        const secretArray = [];
        innerSnapshot.forEach((childSnapshot) => {
          secretArray.push(childSnapshot.val().value);
          const min2 = 0;
          let max2 = secretArray.length;
          if (min2 < max2) {
            max2 -= 1;
            const randSecret = Math.floor(Math.random() * ((max2 - min2) + 1)) + min2;
            this.setSecret(secretArray[randSecret]);
            this.setState({
              isRefreshDisabled: false
            });
          }
        });
      });
    });
  }

  setSecret = (secretString) => {
    this.setState({
      secretText: secretString
    });
  }

  render() {
    return (
      <ImageBackground
        style={styles.containerStyle}
        source={require('../images/back1.png')}
      >
        <Header
          outerContainerStyles={styles.headerStyle}
          leftComponent={
            <Icon
              name='info-outline'
              underlayColor={'rgba(0, 0, 0, 0.2)'}
              color={'#fff'}
              size={28}
              onPress={() => Actions.infoActivity()}
            />
          }
          centerComponent={{ text: 'Tell me a secret', style: { color: '#fff', fontSize: 18 } }}
          rightComponent={
            <Icon
              name='swap-horiz'
              underlayColor={'rgba(0, 0, 0, 0.2)'}
              color={'#fff'}
              size={28}
              onPress={() => Actions.secretForm()}
            />
          }
        />
        <View style={styles.mainContainerStyle}>
          <Card containerStyle={styles.textContainerStyle}>
            <Text style={styles.mainTextStyle}>{this.state.secretText}</Text>
            <Divider style={{ backgroundColor: '#f2f2f2', alignSelf: 'stretch' }} />
            <Button
              color='#4fc3f7'
              buttonStyle={styles.shareButtonStyle}
              titleStyle={{ fontSize: 14, color: '#4fc3f7', fontStyle: 'bold' }}
              onPress={() => this.onClickShare()}
              title='SHARE'
              accessibilityLabel="Share secret button"
            />
          </Card>
        </View>
        <Icon
          raised
          reverse
          name='refresh'
          reverseColor='#fff'
          color='#4fc3f7'
          size={28}
          containerStyle={{
            alignSelf: 'flex-end',
            margin: 16
          }}
          onPress={() => this.getNewSecret()}
          disabled={this.state.isRefreshDisabled}
        />
      </ImageBackground>
    );
  }
}

const styles = {
  shareButtonStyle: {
    backgroundColor: '#ffffff',
    alignSelf: 'flex-end',
    marginTop: 8
  },
  containerStyle: {
    flex: 1,
    position: 'relative'
  },
  headerStyle: {
    backgroundColor: '#ff5555',
    height: 56
  },
  textContainerStyle: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 16,
    paddingBottom: 8,
    margin: 24,
    borderRadius: 8,
    alignSelf: 'stretch'
  },
  mainContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainTextStyle: {
    color: '#7c8b89',
    fontSize: 20,
    flexWrap: 'wrap',
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  }
};

export default SecretActivity;
