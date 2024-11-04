// screens/SettingsScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, ScrollView, SafeAreaView, Image } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function SettingsScreen() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSwitch = () => setIsDarkMode((previousState) => !previousState);

  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-gray-100">
        
        {/* Top Header */}
        <View className="flex-row items-center justify-between px-4 pt-4">
          <Image
            source={require('../assets/logo.png')} 
            className="w-16 h-8"
            resizeMode="contain"
          />
          <View className="flex-row items-center">
            <Image
              source={require('../assets/profile_picture.png')} 
              className="w-8 h-8 rounded-full"
            />
            <Text className="ml-2 text-lg font-semibold">@channelname</Text>
          </View>
        </View>

        {/* App Settings Header */}
        <View className="px-4 mt-4">
          <Text className="text-2xl font-bold text-black">App Settings</Text>
        </View>

        {/* Settings List */}
        <ScrollView className="flex-1 px-4 mt-4">
          
          {/* Login Section */}
          <TouchableOpacity className="flex-row items-center justify-between bg-white p-4 rounded-lg mb-2 shadow">
            <View className="flex-row items-center">
              <Image source={require('../assets/profile_picture.png')} className="w-6 h-6 mr-4" />  {/* Use an icon here */}
              <Text className="text-lg font-medium">Login</Text>
            </View>
            <Text className="text-gray-500">{'>'}</Text>
          </TouchableOpacity>
          
          {/* General Settings Section */}
          <Text className="text-lg font-semibold text-gray-700 mt-4 mb-2">General Settings</Text>
          
          {/* Dark Mode Toggle */}
          <View className="flex-row items-center justify-between bg-white p-4 rounded-lg mb-2 shadow">
            <View className="flex-row items-center">
              <Image source={require('../assets/dark_mode1.png')} className="w-6 h-6 mr-4" />  {/* Use an icon here */}
              <View>
                <Text className="text-lg font-medium">Mode</Text>
                <Text className="text-sm text-gray-500">Dark & Light</Text>
              </View>
            </View>
            <Switch
              onValueChange={toggleSwitch}
              value={isDarkMode}
              thumbColor={isDarkMode ? '#fff' : '#000'}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
            />
          </View>

          {/* Other Settings Items */}
          {[
            { title: 'Language', icon: 'language.png' },
            { title: 'About', icon: 'about.png' },
            { title: 'Terms & Conditions', icon: 'terms.png' },
            { title: 'Privacy Policy', icon: 'privacy.png' },
            { title: 'Rate This App', icon: 'rate.png' },
            { title: 'Share This App', icon: 'share.png' },
          ].map((item, index) => (
            <TouchableOpacity key={index} className="flex-row items-center justify-between bg-white p-4 rounded-lg mb-2 shadow">
              <View className="flex-row items-center">
                <image 
                source={
                  item.icon === 'profile'
                  ?require('../assets/profile_picture.png')
                  :require('../assets/profile_picture.png')
                }
                className="w-6 h-6 mr-4"
                />
                <Text className="text-lg font-medium">{item.title}</Text>
              </View>
              <Text className="text-gray-500">{'>'}</Text>
            </TouchableOpacity>
          ))}

        </ScrollView>

        {/* Bottom Navigation */}
        <View className="flex-row justify-around bg-white py-2 border-t border-gray-200">
          <TouchableOpacity>
            <Text className="text-gray-700">Home</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Menu</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Settings</Text>
          </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    </TailwindProvider>
  );
}
