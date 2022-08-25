import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Image, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';


export function QuienesSomos() {
  const url = "https://api.whatsapp.com/send?phone=+593993371891"

  const video = useRef(null);
  const [status, setStatus] = useState({});

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
        <Video
          ref={video}
          style={styles.backgroundVideo}
          source={{
            uri: 'https://metodolibio.com/wp-content/uploads/2021/08/video-1628539909.mp4',
          }}
          useNativeControls
          resizeMode='cover'
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          isMuted
          useNativeControls={false}
          shouldPlay={true}
        />

        <Text style={styles.QueEs}>
          ¿Qué es Método Libio?
        </Text>
        <Text style={styles.QueEsTexto}>
          <Text style={styles.Bold}>
            Metodolibio
          </Text>, es el análisis más preciso acerca del origen de la tartamudez y te enseña cómo controlar este inconveniente generado por un exceso de pensamientos y patrones de comportamiento involuntarios; los ejercicios y las técnicas complementan el proceso para que puedas crear voluntariamente nuevas conexiones neuronales que te ayudarán a minimizar los bloqueos y las repeticiones progresivamente.
        </Text>
        <View style={styles.ContainerAprender}>
          <View style={styles.ContainerHijo}>
            <Text style={styles.Numero}></Text>
            <Text style={styles.Titulo}>1) Origen de la Tartamudez</Text>
            <Text style={styles.Texto}>Conocerás la verdadera razón por la que se origina la tartamudez y entenderás porque son tan efectivos nuestros procesos.</Text>
          </View>
          <View style={styles.ContainerHijo}>
            <Text style={styles.Numero}></Text>
            <Text style={styles.Titulo}>2) Mitos de la Ciencia</Text>
            <Text style={styles.Texto}>Existen muchos mitos de la tartamudez que atormentan los pensamientos de quien lo tiene, aquí responderemos todas tus dudas.</Text>
          </View>
          <View style={styles.ContainerHijo}>
            <Text style={styles.Numero}></Text>
            <Text style={styles.Titulo}>3) Técnicas de ayuda</Text>
            <Text style={styles.Texto}>Una vez que conozcas como controlarla te enseñaremos algunas técnicas que serán de mucha ayuda en tu proceso de mejora.</Text>
          </View>
          <View style={styles.ContainerHijo}>
            <Text style={styles.Numero}></Text>
            <Text style={styles.Titulo}>4) Consejos prácticos</Text>
            <Text style={styles.Texto}>Aprenderás algunos tips para generar en ti la confianza que necesitas aún si no utilizas nuestras técnicas.</Text>
          </View>
        </View>
        <View style={styles.copy}>
          <Text style={{ color: '#fff', fontSize: 15, marginRight: 4 }}>
            © Copyright,
          </Text>
          <Text style={{ color: '#ffb800', fontSize: 15 }}>
            Alucinamkt
          </Text>
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
  QueEs: {
    color: '#ffb800',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 15,
    marginTop:25
  },
  QueEsTexto: {
    color: '#fff',
    fontSize: 19,
    paddingHorizontal: '5%',
    textAlign: 'justify'
  },
  Bold: {
    fontWeight: 'bold'
  },
  ContainerAprender: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  ContainerHijo: {
    width: '100%',
    marginBottom: 10
  },
  Numero: {
    textAlign: 'center',
    color: '#ffb800',
    fontWeight: 'bold',
    fontSize: 40
  },
  Titulo: {
    textAlign: 'center',
    color: '#ffb800',
    fontWeight: 'bold',
    fontSize: 27
  },
  Texto: {
    textAlign: 'justify',
    color: '#fff',
    fontSize: 21,
    marginTop: 5
  },
  copy: {
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
    marginVertical: 5,
    marginTop: 20
  },
  ContainerWhatsapp:{
    resizeMode:'contain',
    position:'absolute',
    zIndex:9,
    bottom:10,
    right:10
  },
  whatsapp:{
    width:50,
    height:50,
  }
});