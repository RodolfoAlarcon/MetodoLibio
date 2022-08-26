import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native';
import { Text } from 'react-native-elements';
import MainStack from './src/navegacion/MainStack';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function App({ navigation }) {

  const video = useRef(null);
  const [status, setStatus] = useState({});
  const [tiempo, setTiempo] = useState(true)


    setTimeout(() => {
      setTiempo(false)
    }, 500)

  function handleInicio(){

    if(tiempo === true){
      return(
        <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://metodolibio.com/wp-content/uploads/2022/08/videoinicial.mp4',
        }}
        useNativeControls
        resizeMode='stretch'
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        useNativeControls={false}
        shouldPlay={true}
      />
      )
    }else{
      return(
        <MainStack />
      )
    }

  }


  return (
    <>
      {
        handleInicio()
      }
    </>
  )

}

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    width:'100%',
    height:'100%',
  },
});
