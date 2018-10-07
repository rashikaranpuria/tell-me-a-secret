import React from 'react';
import { Text, View, Linking } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const InfoActivity = () => (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 20,
          margin: 16,
          alignSelf: 'center'
        }}
      >
        Because some things should exist 😂
      </Text>
      <SocialIcon
        title="Let's talk"
        button
        type='twitter'
        style={{
          padding: 16,
          margin: 24
        }}
        onPress={() => { Linking.openURL('https://twitter.com/rashi25k'); }}
      />
      <SocialIcon
        title="Help us keep it running"
        button
        type='paypal'
        style={{
          padding: 16,
          margin: 24,
          backgroundColor: '#003087',
          borderRadius: 8
        }}
        onPress={() => { Linking.openURL('https://www.paypal.me/rashikaranpuria/1'); }}
      />
    </View>
  );

export default InfoActivity;
