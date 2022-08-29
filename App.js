import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native';
import { Text } from 'react-native-elements';
import MainStack from './src/navegacion/MainStack';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function App() {


  return (
    <MainStack />
  )

}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
