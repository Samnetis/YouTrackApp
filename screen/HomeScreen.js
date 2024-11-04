// screens/HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function HomeScreen() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-white">
        
        {/* Top Header Section */}
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
            <Text className="ml-2 text-lg font-semibold">@Samnet</Text>
          </View>
        </View>

        {/* Search and Notifications */}
        <View className="flex-row items-center px-4 my-2">
          <View className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2">
            <Text className="text-gray-500">@channelname</Text>
          </View>
          <TouchableOpacity className="mr-4">
            <Text>👁️</Text>  {/* Replace with an icon component */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>🔔</Text>  {/* Replace with an icon component */}
          </TouchableOpacity>
        </View>

        {/* Main Dashboard Section */}
        <ScrollView className="flex-1 px-4">
          <View className="flex-wrap flex-row justify-between mt-4">
            {/* Link Channel Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">Link Channel</Text>
            </TouchableOpacity>

            {/* Make Content Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">Make Content</Text>
            </TouchableOpacity>

            {/* AI-Auto Reply Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">AI-Auto Reply</Text>
            </TouchableOpacity>

            {/* Access Dashboard Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">Access Dashboard</Text>
            </TouchableOpacity>

            {/* Take a Tour Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">Take a Tour</Text>
            </TouchableOpacity>

            {/* What's New Button */}
            <TouchableOpacity className="w-[48%] bg-black rounded-xl p-4 mb-4">
              <Text className="text-yellow-500 text-center">What's New</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* Bottom Navigation */}
        <View className="flex-row justify-around bg-white py-2 border-t border-gray-200">
          <TouchableOpacity>
            <Text className="text-gray-700">Home</Text> {/* Home icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Dashboard</Text> {/* Dashboard icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Profile</Text> {/* Profile icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Menu</Text> {/* Menu icon */}
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-gray-700">Settings</Text> {/* Settings icon */}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
