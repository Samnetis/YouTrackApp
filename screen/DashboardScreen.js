// screens/DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import ChannelStat from './components/ChannelStat'; 
import Amplify from 'aws-amplify';
import awsconfig from '../src/aws-exports'; 

Amplify.configure(awsconfig);

export default function DashboardScreen() {

  // State for channel stats
  const [channelStats, setChannelStats] = useState({
    revenue: '$0.00',
    revenueGrowth: '0%',
    stats: [
      { label: 'Subscribers', value: '0' },
      { label: 'Age', value: '0 y' },
      { label: 'Weekly Views', value: '0%' },
      { label: 'Rank', value: '#0' },
    ],
  });

  // Function to fetch channel stats from an API
  const fetchChannelStats = async () => {
    try {
      const response = await fetch('https://api.example.com/channel-stats'); 
      const data = await response.json();
      setChannelStats({
        revenue: `$${data.revenue}`,
        revenueGrowth: `${data.revenueGrowth}%`,
        stats: data.stats,
      });
    } catch (error) {
      console.error('Error fetching channel stats:', error);
    }
  };

  useEffect(() => {
    fetchChannelStats();
  }, []);

  return (
    <TailwindProvider>
      <SafeAreaView className="flex-1 bg-white">

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
            <Text className="ml-2 text-lg font-semibold">@Samnet</Text>
          </View>
        </View>

        {/* Search and Notifications */}
        <View className="flex-row items-center px-4 my-2">
          <View className="flex-1 bg-gray-100 rounded-full px-4 py-2 mr-2">
            <Text className="text-gray-500">@channelname</Text>
          </View>
          <TouchableOpacity className="mr-4">
            <Text>👁️</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* Dashboard Header */}
        <View className="px-4 mt-4">
          <Text className="text-2xl font-bold text-center text-green-500">Dashboard</Text>
        </View>

        {/* Revenue Section */}
        <View className="bg-white mx-4 my-4 p-4 rounded-xl shadow-lg border border-green-300">
          <View className="flex-row items-center justify-between">
            <Text className="text-lg text-purple-800">Revenue</Text>
            <Text className="text-2xl font-semibold text-black">{channelStats.revenue}</Text>
            <Text className="text-sm font-medium text-green-600 bg-green-200 px-2 py-1 rounded-lg">
              +{channelStats.revenueGrowth}
            </Text>
          </View>
        </View>

        {/* Channel Stats */}
        <View className="mt-4 flex-row justify-around">
          {channelStats.stats.map((stat, index) => (
            <ChannelStat key={index} label={stat.label} value={stat.value} />
          ))}
        </View>

        {/* Comments Section */}
        <ScrollView className="flex-1 px-4">
          <Text className="text-lg font-bold text-purple-700 my-4">ALL COMMENTS</Text>
          {[...Array(5)].map((_, index) => (
            <View
              key={index}
              className="flex-row items-center bg-gray-100 p-4 mb-4 rounded-lg shadow-sm"
            >
              <Image
                source={require('../assets/profile_picture.png')}  
                className="w-10 h-10 rounded-full"
              />
              <View className="flex-1 ml-4">
                <Text className="font-semibold">@YouTube username</Text>
                <Text className="text-gray-700">
                  Hey dear! Your page is really nice; please keep improving on what you are doing
                </Text>
              </View>
              <View className="flex-row space-x-2">
                <TouchableOpacity className="bg-purple-500 px-3 py-1 rounded-full">
                  <Text className="text-white">Reply</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-purple-500 px-3 py-1 rounded-full">
                  <Text className="text-white">Reject</Text>
                </TouchableOpacity>
              </View>
            </View>
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
