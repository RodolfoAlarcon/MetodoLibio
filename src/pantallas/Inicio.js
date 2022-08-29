import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Inicio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>

      <Image
        source={require('../img/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.slogan}>
        Controla tu tartamudez
      </Text>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QuienesSomos')
        }}
        style={styles.boton}
      >
        <Text style={styles.textoBoton}>
          Quienes Somos
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Metodologia')
        }}
        style={styles.boton}
      >
        <Text style={styles.textoBoton}>
          Metodología
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Testimonios')
        }}
        style={styles.boton}
      >
        <Text style={styles.textoBoton}>
          Testimonios
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Contactenos')
        }}
        style={styles.boton}
      >
        <Text style={styles.textoBoton}>
          Agenda tu Cita
        </Text>
      </TouchableOpacity>

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
    flex: 1,
    backgroundColor: '#141f23',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10
  },
  slogan: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 50,
    fontWeight: '600'
  },
  boton: {
    width: 220,
    backgroundColor: '#ffb800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1.7,
    borderColor: '#ffb20085',
    borderBottomWidth: 2,
    paddingVertical: 13,
    marginVertical: 10
  },
  textoBoton: {
    color: '#141f23',
    fontWeight: '900',
    fontSize: 18
  },
  copy: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 5,
    marginTop:30,
    position:'absolute',
    bottom:0
  }
});