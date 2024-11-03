// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';

export default function LoginScreen({ navigation }) {
  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-gray-400 justify-center px-6">
        
        {/* Logo Section */}
        <View className="items-center mb-8">
          <Text className="text-4xl font-bold text-black tracking-wide">YOU</Text>
          <Text className="text-4xl font-bold text-black tracking-wide">TRACK</Text>
        </View>

        {/* Heading Section */}
        <Text className="text-center text-2xl font-bold text-white mb-2">Welcome</Text>

        {/* Email Input */}
        <TextInput
          className="bg-white text-black rounded-full py-3 px-4 mb-4"
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
        />

        {/* Password Input */}
        <TextInput
          className="bg-white text-black rounded-full py-3 px-4 mb-6"
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />

        {/* Sign In Button */}
        <TouchableOpacity
          className="bg-black rounded-full py-3 mb-6"
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text className="text-center text-white text-lg font-semibold">Sign In</Text>
        </TouchableOpacity>

        {/* Navigate to Sign Up */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text className="text-center text-white">Don't have an account? Create Account</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </TailwindProvider>
  );
}
