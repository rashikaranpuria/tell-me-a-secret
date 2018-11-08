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
        title="Privacy Policy"
        button
        style={{
          padding: 16,
          margin: 24,
          backgroundColor: '#003087',
          borderRadius: 8
        }}
        onPress={() => { Linking.openURL('https://sites.google.com/view/tell-me-a-secret-privacypolicy/home'); }}
      />
    </View>
  );

export default InfoActivity;
