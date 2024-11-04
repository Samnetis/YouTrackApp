// TakeATourScreen.js

import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TakeATourScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f2f2f2' }}>
      <View style={{ padding: 20 }}>
        {/* Header */}
        <Text style={{ fontSize: 24, fontWeight: '600', textAlign: 'center', marginVertical: 20 }}>TAKE A TOUR</Text>

        {/* Main Content */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Image
            source={require('../assets/landing_slider.png')}
            style={{ width: 250, height: 200 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 15 }}>About Us</Text>
          <Text style={{ fontSize: 16, color: '#666', textAlign: 'center', paddingHorizontal: 20, lineHeight: 24 }}>
            <Text style={{ fontWeight: 'bold' }}>YouTrack</Text> is your all-in-one mobile app designed to help
            YouTube creators automate video uploads, analyze channel performance, and manage their accounts
            seamlessly.
          </Text>
        </View>

        {/* Scroll Down Indicator */}
        <View style={{ alignItems: 'center', marginTop: 10 }}>
          <Icon name="keyboard-arrow-down" size={24} color="#333" />
        </View>
      </View>
    </ScrollView>
  );
};

export default TakeATourScreen;
