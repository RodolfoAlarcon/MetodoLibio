import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Buttom, ScrollView, Image, TouchableOpacity, Linking, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import { Video, AVPlaybackStatus } from 'expo-av';

export function Testimonios() {

  const url = "https://api.whatsapp.com/send?phone=+593993371891";
  const [img, setImg] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const video = useRef(null);
  const [status, setStatus] = useState({});


  function handleModal(item) {

    setImg(item);
    setModalVisible(!modalVisible);

  }


  function handleModalView() {

    if (img === "testimoniouno") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-espana-01-1.mp4',
            }}
            useNativeControls
            resizeMode='stretch'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }

    if (img === "testimoniodos") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-argentina-02.mp4',
            }}
            useNativeControls
            resizeMode='stretch'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }

    if (img === "testimoniocuatro") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-ecuador-03.mp4',
            }}
            useNativeControls
            resizeMode='stretch'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }

    if (img === "testimoniotres") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-argentina-03.mp4',
            }}
            useNativeControls
            resizeMode='stretch'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }


    if (img === "testimoniossiete") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-peru-01.mp4',
            }}
            useNativeControls
            resizeMode='stretch'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }

    if (img === "testimoniosocho") {
      return (
        <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{ position: 'absolute', top: '1%', right: '2%' }}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Icon size={25} color='#fff' name='close' />
          </TouchableOpacity>
          <Video
            ref={video}
            style={styles.backgroundVideo}
            source={{
              uri: 'https://metodolibio.com/wp-content/uploads/2022/08/textimonio-peru-04.mp4',
            }}
            useNativeControls
            resizeMode='contain'
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}
            useNativeControls={false}
            shouldPlay={true}
          />
        </View>
      )
    }

  }

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        {
          handleModalView()
        }
      </Modal>
      <ScrollView>
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() => handleModal("testimoniouno")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniouno.png')}
              style={{ width: '100%', height: 250 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleModal("testimoniodos")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniodos.png')}
              style={{ width: '100%', height: 250 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() => handleModal("testimoniocuatro")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniocuatro.png')}
              style={{ width: '100%', height: 250 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleModal("testimoniotres")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniotres.png')}
              style={{ width: '100%', height: 250 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: '5%', marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() => handleModal("testimoniossiete")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniossiete.png')}
              style={{ width: '100%', height:250 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleModal("testimoniosocho")}
            style={{ width: '45%', }}
          >
            <Image
              source={require('../img/testimoniosocho.png')}
              style={{ width: '100%', height:250 }}
            />
          </TouchableOpacity>
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
  },
  backgroundVideo: {
    width: '90%',
    height: '70%',
  }
});