import React from 'react'; 
import { TailwindProvider } from 'tailwindcss-react-native';
import SignUpScreen from './screen/SignUpScreen';


export default function App() {
  return (
    <TailwindProvider>
      <SignUpScreen />
    </TailwindProvider>
  ); 
}   