import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Image, Linking, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import SendEmail from '../correos/SendEmail'

export function Contactenos() {


  const Paises = [
    {
      nombre: "Argentina",
      numero: "+54",
      id: "0"
    },
    {
      nombre: "Bolivia",
      numero: "+591",
      id: "01"
    },
    {
      nombre: "Chile",
      numero: "+56",
      id: "02"
    },
    {
      nombre: "Colombia",
      numero: "+57",
      id: "03"
    },
    {
      nombre: "Costa Rica",
      numero: "+506",
      id: "04"
    },
    {
      nombre: "Cuba",
      numero: "+53",
      id: "05"
    },
    {
      nombre: "Ecuador",
      numero: "+593",
      id: "06"
    },
    {
      nombre: "El Salvador",
      numero: "+503",
      id: "07"
    },
    {
      nombre: "España",
      numero: "+34",
      id: "08"
    },
    {
      nombre: "Guatemala",
      numero: "+502",
      id: "09"
    },
    {
      nombre: "Honduras",
      numero: "+504",
      id: "10"
    },
    {
      nombre: "Mexico",
      numero: "+52",
      id: "11"
    },
    {
      nombre: "Nicaragua",
      numero: "+505",
      id: "12"
    },
    {
      nombre: "Panama",
      numero: "+507",
      id: "13"
    },
    {
      nombre: "Paraguay",
      numero: "+595",
      id: "14"
    },
    {
      nombre: "Peru",
      numero: "+51",
      id: "15"
    },
    {
      nombre: "Puerto Rico",
      numero: "+1",
      id: "16"
    },
    {
      nombre: "Republica Dominicana",
      numero: "+1",
      id: "17"
    },
    {
      nombre: "Uruguay",
      numero: "+598",
      id: "18"
    },
    {
      nombre: "Venezuela",
      numero: "+58",
      id: "19"
    },
  ]

  const url = "https://api.whatsapp.com/send?phone=+593993371891"

  const [nombre, onChangeNombre] = useState("");
  const [correo, onChangeCorreo] = useState("");
  const [pais, setPais] = useState("");
  const [telefono, onChangeTelefono] = useState("");
  const [codigoPais, setCodigoPais] = useState("");

  function handleEmail(nom,corr,pai,tele,cod) {

    const nombreEnviar = nom;
    const correoEnviar = corr;
    const paisEnviar = pai;
    const telefonoEnviar = tele;
    const codigo = cod;

    console.log(cod)

    if(nombreEnviar.length === 0){
      return (
        Alert.alert(
          "Falta de un campo",
          "Te falta agregar el campo de Nombre y Apellido",
          [
            { text: "OK", onPress: () => console.log("Cerrado") }
          ]
        )
      )
    }
    
    if(correoEnviar.length === 0){
      return (
        Alert.alert(
          "Falta de un campo",
          "Te falta agregar el campo de Correo eléctronico",
          [
            { text: "OK", onPress: () => console.log("Cerrado") }
          ]
        )
      )
    }

    if(paisEnviar.length === 0){
      return (
        Alert.alert(
          "Falta de un campo",
          "Te falta agregar el campo de País",
          [
            { text: "OK", onPress: () => console.log("Cerrado") }
          ]
        )
      )
    }

    if(telefonoEnviar.length === 0){
      return (
        Alert.alert(
          "Falta de un campo",
          "Te falta agregar el campo de Teléfono",
          [
            { text: "OK", onPress: () => console.log("Cerrado") }
          ]
        )
      )
    }
    const prueba = "https://api.whatsapp.com/send?phone=+5804127273005&text=Hola%20" + nom
    const urlWhatsapp = `https://api.whatsapp.com/send?phone=+5804127273005&text=Hola%20Metodo%20Libio%20soy%20Rodolfo,%0D%0Aeste%20es%20mi%20numero%20personal%20,%0D%0Asoy%20de%20Venezuela%20y%20estoy%20interesado%20en%20el%20MetodoLibio!!!`
    Linking.openURL(prueba)

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
      <ScrollView>
        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={require('../img/logo.png')}
            style={styles.logo}
          />
          <Text style={styles.slogan}>
            Controla tu tartamudez
          </Text>
        </View>
        <Text style={[styles.titulo, { marginTop: 20 }]}>Deseo participar y recibir</Text>
        <Text style={[styles.titulo, { marginBottom: 35 }]}>las sesiones online</Text>
        <View style={styles.Formulario}>
          <Text style={styles.Label}>Nombre y Apellido</Text>
          <TextInput
            style={styles.input}
            keyboardType="text"
            onChangeText={onChangeNombre}
            value={nombre}
            placeholder="Admin"
            placeholderTextColor="#fff"
          />
          <Text style={styles.Label}>Correo</Text>
          <TextInput
            style={styles.input}
            keyboardType="text"
            onChangeText={onChangeCorreo}
            value={correo}
            placeholder="admin@ejemplo.com"
            placeholderTextColor="#fff"
          />
          <Text style={styles.Label}>País</Text>
          <View style={{ borderWidth: 1, width: '100%', borderRadius: 10, height: 60, marginBottom: 15, borderColor: '#ffb800', paddingHorizontal: 12 }}>
            <Picker
              selectedValue={pais}
              style={{ color: "#fff" }}
              onValueChange={(itemValue, itemIndex) =>
                setPais(itemValue)
              }>
              <Picker.Item label="Slecione un País" value="" />
              {
                Paises.map(item =>
                  <Picker.Item label={item.nombre} value={item.id} />
                )
              }
            </Picker>
          </View>
          <Text style={styles.Label}>Teléfono</Text>
          <View style={{ flexDirection: 'row', width: '100%' }}>
            <View style={{ width: '16%' }}>
              <View>
                <View style={{ borderWidth: 1, width: '100%', borderRadius: 10, height: 60, marginBottom: 15, borderColor: '#ffb800', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: '#fff' }}>
                    {
                      Paises.map(e => {
                        if (pais === e.id) {
                          const codigo = e.numero
                          if(codigo.length >= 0){
                            return setCodigoPais(codigo)
                          }
                          return (
                            e.numero
                          )
                        }
                      })
                    }
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ width: '2%' }}>

            </View>
            <View style={{ width: '81%' }}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                onChangeText={onChangeTelefono}
                value={telefono}
                placeholder=""
                placeholderTextColor="#fff"
              />
            </View>
          </View>
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => handleEmail(nombre,correo,pais,telefono,codigo)}
            style={styles.boton}
          >
            <Text style={styles.textoBoton}>
              Enviar
            </Text>
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
  titulo: {
    fontSize: 28,
    color: '#ffb800',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic'
  },
  Formulario: {
    width: '90%',
    marginHorizontal: '5%'
  },
  input: {
    height: 60,
    borderWidth: 1,
    padding: 20,
    borderColor: '#ffb800',
    borderRadius: 10,
    color: '#fff',
    marginBottom: 20
  },
  Label: {
    color: '#fff',
    marginBottom: 5,
    fontSize: 20
  },
  boton: {
    width: 250,
    backgroundColor: '#ffb800',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    borderWidth: 1.7,
    borderColor: '#ffb20085',
    borderBottomWidth: 3,
    paddingVertical: 15,
    marginVertical: 8
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
  textoBoton: {
    color: '#141f23',
    fontWeight: '900',
    fontSize: 21
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
    marginVertical: 15,
    marginTop: 30,
  },
  slogan: {
    color: '#fff',
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '600'
  },
});