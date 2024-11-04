// App.js
import React from 'react';
import Amplify from 'aws-amplify';
import { TailwindProvider } from 'tailwindcss-react-native';
import awsconfig from './src/aws-exports'; 
import AppNavigator from './navigation/AppNavigator'; 

// Configure Amplify with your AWS config
Amplify.configure(awsconfig);

export default function App() {
  return (
    <TailwindProvider>
      <AppNavigator />
    </TailwindProvider>
  );
}
