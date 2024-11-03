import React from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { TailwindProvider, tailwind } from 'tailwindcss-react-native';

export default function SignUpPage() {
  return (
    <TailwindProvider>
      <SafeAreaView style={tailwind('flex-1 bg-gray-400 justify-center px-6')}>
        
        {/* Logo Section */}
        <View style={tailwind('items-center mb-8')}>
          <Text style={tailwind('text-4xl font-bold text-black tracking-wide')}>YOU</Text>
          <Text style={tailwind('text-4xl font-bold text-black tracking-wide')}>TRACK</Text>
        </View>

        {/* Heading Section */}
        <Text style={tailwind('text-center text-2xl font-bold text-white mb-2')}>
          Create new Account
        </Text>
        <Text style={tailwind('text-center text-sm text-gray-200 mb-6')}>
          Already Registered? Log in here.
        </Text>

        {/* Name Input */}
        <Text style={tailwind('text-left text-xs text-gray-200 mb-1')}>NAME</Text>
        <TextInput
          style={tailwind('bg-white text-black rounded-full py-3 px-4 mb-4')}
          placeholder="Name"
          placeholderTextColor="#A0A0A0"
        />

        {/* Email Input */}
        <Text style={tailwind('text-left text-xs text-gray-200 mb-1')}>EMAIL</Text>
        <TextInput
          style={tailwind('bg-white text-black rounded-full py-3 px-4 mb-4')}
          placeholder="Email"
          placeholderTextColor="#A0A0A0"
        />

        {/* Password Input */}
        <Text style={tailwind('text-left text-xs text-gray-200 mb-1')}>PASSWORD</Text>
        <TextInput
          style={tailwind('bg-white text-black rounded-full py-3 px-4 mb-6')}
          placeholder="Password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
        />

        {/* Sign Up Button */}
        <TouchableOpacity style={tailwind('bg-black rounded-full py-3 mb-6')}>
          <Text style={tailwind('text-center text-white text-lg font-semibold')}>sign up</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </TailwindProvider>
  );
}
