// ChannelStat.js
import React from 'react';
import { View, Text } from 'react-native';

const ChannelStat = ({ label, value }) => {
  return (
    <View className="items-center">
      <Text className="text-sm font-semibold text-green-700">{label}</Text>
      <Text className="text-lg">{value}</Text>
    </View>
  );
};

export default ChannelStat;
