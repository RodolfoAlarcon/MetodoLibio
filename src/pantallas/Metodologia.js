import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Metodologia() {

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
      <View style={{ width: '90%' }}>
        <Text style={styles.Titulo}>
          ¿QUÉ INCLUYE NUESTRAS SESIONES?
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Evaluación de su tartamudez📔
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  MétodoLibio: Explicación de nuestra metodología🤔
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Tartamudez - Condición o estado🧠
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Mitos y verdades de la tartamudez👂🏻
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Técnicas para pronunciar correctamente las palabras👌
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Neutralizar tus bloqueos y repeticiones💥
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Actividades lúdicas para niños y adultos🗣
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Tips para mantener la calma frente a desconocidos, jefes o en público🔑
        </Text>
        <Text style={styles.Lista}>
          <Icon name='check' size={25} color='#ffb800' />  Ejercicios en casa para no olvidar lo que has aprendido💡
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141f23',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%'
  },
  Titulo: {
    color: '#ffb800',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom:20,
  },
  Lista: {
    color: '#fff',
    fontSize: 21,
    marginVertical: 10,
    textAlign: 'center'
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