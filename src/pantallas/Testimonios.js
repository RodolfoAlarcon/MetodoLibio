import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Buttom, ScrollView, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export function Testimonios() {
  const url = "https://api.whatsapp.com/send?phone=+593993371891"

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.ContainerWhatsapp}
      >
        <Image
          source={require('../img/whatsapp.png')}
          style={styles.whatsapp}
        />
      </TouchableOpacity>
      <ScrollView>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/TuBFbVN9tDA')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniouno.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/T2MkXJVzUi8')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniodos.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/Xg5s-wgW-oM')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniocuatro.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/xOye_wWMybQ')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniotres.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/A8Yo4YIQ8GE')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimonioscinco.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/SZFALSGn8MA')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniosseis.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/SViZhZhpy-4')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniossiete.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://youtu.be/JUEfyz1v_jg')}
          style={{ width: '90%', marginHorizontal: '5%', marginVertical: 10 }}
        >
          <Image
            source={require('../img/testimoniosocho.png')}
            style={{ width: '100%' }}
          />
        </TouchableOpacity>
      </ScrollView>
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
    height: 250
  },
  ContainerWhatsapp: {
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 9,
    bottom: 10,
    right: 10
  },
  whatsapp: {
    width: 50,
    height: 50,
  }
});