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
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/TuBFbVN9tDA" title="textimonio españa 01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/T2MkXJVzUi8" title="textimonio argentina 02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xOye_wWMybQ" title="textimonio argentina 03" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/SZFALSGn8MA" title="textimonio españa 02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/A8Yo4YIQ8GE" title="textimonio mexico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/-6dsbhic6V4" title="textimonio peru 01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Xg5s-wgW-oM" title="textimonio ecuador 03" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
        <View style={{ width: '90%', height: 250, marginHorizontal: '5%', marginVertical: 10 }}>
          <WebView
            style={{ width: '100%', margin: 0, padding: 0, backgroundColor: '#141f23' }}
            originWhitelist={['*']}
            javaScriptEnabled={true}
            source={{
              html: `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1b338JaFxKM" title="textimonio ecuador 01" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            }}
          />
        </View>
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