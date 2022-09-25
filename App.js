import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-elements';
import MainStack from './src/navegacion/MainStack';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {

  const [inicio, setInicio] = useState(false);

  setTimeout(() => {
    setInicio(true)
  }, 4000)

  if (inicio == true) {
    return (
      <MainStack />
    )
  }else{
    return(
      <SafeAreaView style={{    flex: 1,}}>
        <Image 
          source={require('./src/img/inicio.jpg')}
          style={{width:'100%', height:'100%', flex:1,resizeMode:'stretch'}}
        />
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
