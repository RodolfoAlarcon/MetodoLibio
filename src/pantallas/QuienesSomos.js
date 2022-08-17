import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';

export function QuienesSomos() {

  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://metodolibio.com/wp-content/uploads/2021/08/video-1628539909.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
        onLoad={video.current.playAsync()}
        isMuted
        useNativeControls={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141f23',
  },
  backgroundVideo: {
    width: '100%',
    height: 300
  }
});