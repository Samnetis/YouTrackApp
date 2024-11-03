import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function App() {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-gray-100 justify-center items-center px-4">
        {/* Logo Area */}
        <Text className="text-4xl font-bold text-black tracking-wide">YOU</Text>
        <Text className="text-4xl font-bold text-black tracking-wide">TRACK</Text>

        {/* Description */}
        <Text className="text-center text-gray-500 text-base mt-4">
          Your all-in-one mobile app designed to help YouTube creators automate video uploads,
          analyze channel performance, and manage their accounts seamlessly.
        </Text>

        {/* Loading Indicator (Progress Bar) */}
        <View className="w-full mt-8 flex-row justify-center">
          <View className="h-1 w-20 bg-yellow-500 rounded-l-full" />
          <View className="h-1 w-20 bg-black rounded-r-full" />
        </View>

        {/* Bottom Illustration */}
        <View className="mt-12">
          <Image
            source={require('./assets/illustration.png')} // Place the image in your assets folder
            className="w-48 h-48"
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
