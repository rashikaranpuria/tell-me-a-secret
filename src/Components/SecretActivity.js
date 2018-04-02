import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

class SecretActivity extends Component {

  state = {
    secretText: 'a basic secret'
  }

  componentDidMount() {
    this.getNewSecret();
  }

  getNewSecret = () => {
    console.log('sdsnajdandja');
    const min = 1;
    let max = min;
    firebase.database().ref('/count/value').on('value', (snapshot) => {
      max = snapshot.val();
      const rand = Math.floor(Math.random() * ((max - min) + 1)) + min;
      console.log('check this', max, rand);
      firebase.database().ref(`/secrets/${rand}`).on('value', (innerSnapshot) => {
        const secretArray = [];
        console.log('inner');
        console.log(innerSnapshot);
        innerSnapshot.forEach((childSnapshot) => {
          console.log(max, rand);
          console.log(childSnapshot.val().value);
          secretArray.push(childSnapshot.val().value);
          const min2 = 0;
          let max2 = secretArray.length;
          console.log('min max innermost', min2, max2);
          if (min2 < max2) {
            max2 -= 1;
            console.log('min max innermost2', min2, max2);
            const randSecret = Math.floor(Math.random() * ((max2 - min2) + 1)) + min2;
            console.log(randSecret);
            this.setSecret(secretArray[randSecret]);
            console.log(`secret ${secretArray[randSecret]}`);
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
        />
      </ImageBackground>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    position: 'relative'
  },
  headerStyle: {
    backgroundColor: '#ff5555',
    height: 56
  },
  textContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    margin: 24,
    borderRadius: 8
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
    justifyContent: 'center'
  }
};

export default SecretActivity;
