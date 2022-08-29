import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

export function Metodologia() {

  const url = "https://api.whatsapp.com/send?phone=+593993371891"
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => Linking.openURL(url)}
        style={styles.ContainerWhatsapp}
      >
        <Image
          source={require('../img/whatsapp.png')}
          style={styles.whatsapp}
        />
      </TouchableOpacity>
      <ScrollView style={styles.container}>
        <View style={{ paddingBottom: 30 }}>
          <Text style={styles.Titulo}>
            ¿QUÉ INCLUYE NUESTRAS SESIONES?
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Evaluación de su tartamudez📔
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> MétodoLibio: Explicación de nuestra metodología🤔
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Tartamudez - Condición o estado🧠
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Mitos y verdades de la tartamudez👂🏻
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Técnicas para pronunciar correctamente las palabras👌
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Neutralizar tus bloqueos y repeticiones💥
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Actividades lúdicas para niños y adultos🗣
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Tips para mantener la calma frente a desconocidos, jefes o en público🔑
          </Text>
          <Text style={styles.Lista}>
            <Icon name='check' size={20} color='#ffb800' /> Ejercicios en casa para no olvidar lo que has aprendido💡
          </Text>
        </View>
      </ScrollView>
      <View style={styles.copy}>
        <Text style={{ color: '#fff', fontSize: 15, marginRight: 4 }}>
          Copyright® 2022,
        </Text>
        <Text style={{ color: '#ffb800', fontSize: 15 }}>
          Created by AlucinaMKT
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141f23',
    width: '100%',
    paddingHorizontal: '5%',
  },
  Titulo: {
    color: '#ffb800',
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  Lista: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center'
  },
  ContainerWhatsapp: {
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 9,
    bottom: 25,
    right: 10
  },
  whatsapp: {
    width: 50,
    height: 50,
  },
  copy: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5
  }
});