import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Progress from 'react-native-progress';
import { useState } from 'react';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';



export function Formulario({ navigation }) {

    //barra progresop
    const [progresive, setProgresive] = useState(0.0)

    //politica
    const [politica, setPolitica] = useState(true);
    const [check, setCheck] = useState(false);


    //datos personales
    const [personal, setPersonal] = useState(false);
    const [opcpuno, setOpcpuno] = useState(true)
    const [nombre, onChangeNombre] = useState("");
    const [correo, onChangeCorreo] = useState("");
    const [opcpdos, setOpcpdos] = useState(false);
    const [sexo, setSexo] = useState("");
    const Dsexo = [
        {
            nombre: "Hombre",
            id: "01"
        },
        {
            nombre: "Mujer",
            id: "02"
        }
    ]
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
    const [pais, setPais] = useState("");
    let codi = 0;
    const [telefono, onChangeTelefono] = useState("");

    //casos
    const [casos, setCasos] = useState(false);
    const [casosSi, setCasosSi] = useState(false);
    const [casosNo, setCasosNo] = useState(false);



    function LogicaPregunta() {

        function handlePolitica() {
            if (check == false) {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que aceptar los terminos de MetodoLibio",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            } else {
                const total = progresive + 0.1
                setProgresive(total)
                setPolitica(!politica)
                setPersonal(!personal)
            }
        }

        if (politica == true) {

            return (
                <View style={styles.caja}>
                    <Text style={styles.Preguntas}>
                        Doy autorización a Libio Pareja Paredes con C.I. 092373715-9 a utilizar esta información para fines investigativos y testimoniales multimedia para mejorar la evolución de mi tartamudez.
                    </Text>
                    <CheckBox
                        center
                        checked={check}
                        onPress={() => setCheck(!check)}
                        checkedColor='#F4B02B'
                    />
                    <View style={styles.cajaboton}>
                        <TouchableOpacity
                            onPress={() => handlePolitica()}
                            style={styles.boton}
                        >
                            <Text style={styles.textoBoton}>
                                Siguiente
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )

        }
        if (personal == true) {

            if (opcpuno == true) {
                return (
                    <View style={styles.caja}>
                        <Text style={styles.PreguntasTitulo}>
                            Datos Personales
                        </Text>
                        <Text style={styles.Label}>Nombre y Apellido</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="text"
                            onChangeText={onChangeNombre}
                            value={nombre}
                            placeholder="Metodo Libio"
                            placeholderTextColor="#ffffff7d"
                        />
                        <Text style={styles.Label}>Corero Electronico</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType="text"
                            onChangeText={onChangeCorreo}
                            value={correo}
                            placeholder="admin@metodolibio.com"
                            placeholderTextColor="#ffffff7d"
                        />
                        <Text style={styles.Label}>Fecha de nacimiento</Text>
                        <TouchableOpacity
                            onPress={() => setOpen(true)}
                            style={{ borderRadius: 10, borderWidth: 1, borderColor: '#ffb800', height: 40, width: '100%', justifyContent: 'center', paddingLeft: 10, marginBottom: 20 }}
                        >
                            <Text style={styles.Label}>

                            </Text>
                        </TouchableOpacity>
                        <View style={styles.cajaboton}>
                            <TouchableOpacity
                                onPress={() => handlePersonalUno()}
                                style={styles.boton}
                            >
                                <Text style={styles.textoBoton}>
                                    Siguiente
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
            if (opcpdos == true) {
                return (
                    <View style={styles.caja}>
                        <Text style={styles.PreguntasTitulo}>
                            Datos Personales
                        </Text>
                        <Text style={styles.Label}>Sexo</Text>
                        <View style={{ borderWidth: 1, width: '100%', borderRadius: 10, height: 40, marginBottom: 10, borderColor: '#ffb800', paddingHorizontal: 12, justifyContent: 'center' }}>
                            <Picker
                                selectedValue={sexo}
                                style={
                                    sexo.length === 0
                                        ? { color: "#ffffff7d" }
                                        : { color: '#fff' }
                                }
                                onValueChange={(itemValue, itemIndex) =>
                                    setSexo(itemValue)
                                }>
                                <Picker.Item style={{ fontSize: 15 }} label="Genero" value="" />
                                {
                                    Dsexo.map(item =>
                                        <Picker.Item style={{ fontSize: 15, }} label={item.nombre} value={item.nombre} />
                                    )
                                }
                            </Picker>
                        </View>
                        <Text style={styles.Label}>Pais</Text>
                        <View style={{ borderWidth: 1, width: '100%', borderRadius: 10, height: 40, marginBottom: 10, borderColor: '#ffb800', paddingHorizontal: 12, justifyContent: 'center' }}>
                            <Picker
                                selectedValue={pais}
                                style={
                                    pais.length === 0
                                        ? { color: "#ffffff7d" }
                                        : { color: '#fff' }
                                }
                                onValueChange={(itemValue, itemIndex) =>
                                    setPais(itemValue)
                                }>
                                <Picker.Item label="Selecione un País" value="" />
                                {
                                    Paises.map(item =>
                                        <Picker.Item label={item.nombre} value={item.nombre} />
                                    )
                                }
                            </Picker>
                        </View>
                        <Text style={styles.Label}>Teléfono</Text>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <View style={{ width: '16%' }}>
                                <View style={{ borderWidth: 1, width: '100%', borderRadius: 10, height: 40, marginBottom: 15, borderColor: '#ffb800', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#fff' }}>
                                        {
                                            Paises.map(e => {
                                                if (pais === e.nombre) {
                                                    codi = e.numero
                                                    return (
                                                        e.numero
                                                    )
                                                }
                                            })
                                        }
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '2%' }}>

                            </View>
                            <View style={{ width: '82%' }}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    onChangeText={onChangeTelefono}
                                    value={telefono}
                                    placeholder="Metodo Libio"
                                    placeholderTextColor="#ffffff7d"
                                />
                            </View>
                        </View>
                        <View style={styles.cajaboton}>
                            <TouchableOpacity
                                onPress={() => handlePersonalDos()}
                                style={styles.boton}
                            >
                                <Text style={styles.textoBoton}>
                                    Siguiente
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

        }
        function handlePersonalUno() {
            if (nombre === "") {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que colocar un Nombre y un Apellido",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            if (correo === "") {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que colocar un Correo Electronico",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            setOpcpuno(!opcpuno)
            setOpcpdos(!opcpdos);
        }
        function handlePersonalDos() {
            if (sexo == "") {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que colocar el sexo",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            if (pais == "") {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que colocar el País",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            if (telefono == "") {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que colocar el Teléfono",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            setOpcpdos(!opcpdos)
            setCasos(!casos)

        }

        if (casos == true) {
            return (
                <View style={styles.caja}>
                    <Text style={styles.Preguntas}>
                        Has escuchado casos que personas con disfluencia que  han mejorado su comunicación?
                    </Text>
                    <CheckBox
                        center
                        checked={casosSi}
                        onPress={() => setCheck(!casosSi)}
                        checkedColor='#F4B02B'
                    />
                    <CheckBox
                        center
                        checked={casosNo}
                        onPress={() => setCheck(!casosNo)}
                        checkedColor='#F4B02B'
                    />
                    <Text style={styles.Preguntas}>
                        Danos tu opinión con respecto a la pregunta anterior
                    </Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={10}
                        style={[styles.input, { height: 100 }]}
                        keyboardType="text"
                        onChangeText={onChangeCorreo}
                        value={correo}
                        placeholder="Opinion"
                        placeholderTextColor="#ffffff7d"
                    />
                    <View style={styles.cajaboton}>
                        <TouchableOpacity
                            onPress={() => handleCasos()}
                            style={styles.boton}
                        >
                            <Text style={styles.textoBoton}>
                                Siguiente
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        function handleCasos() {
            if (casosSi == false && casosNo == false) {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "Tienes que marcar una casilla",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            if (casosSi == true && casosNo == true) {
                return (
                    Alert.alert(
                        "Falta de un campo",
                        "No se peude marcar 2 casillas al mismo tiempo",
                        [
                            { text: "OK", onPress: () => console.log("Cerrado") }
                        ]
                    )
                )
            }
            setCasos(!casos)
        }

    }

    return (
        <SafeAreaView style={styles.container}>
            <Progress.Bar progress={progresive} width={200} height={10} color='#F4B02B' style={styles.Progress} />

            {
                LogicaPregunta()
            }



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
        backgroundColor: '#3B3B3B',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    copy: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,
        position: 'absolute',
        bottom: 0
    },
    Progress: {
        position: 'absolute',
        top: 60
    },
    Preguntas: {
        color: '#fff',
        textAlign: 'center'
    },
    caja: {
        width: '90%'
    },
    boton: {
        width: 150,
        backgroundColor: '#F4B02B',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        paddingVertical: 10,
    },
    textoBoton: {
        color: '#141f23',
        fontWeight: '900',
        fontSize: 15
    },
    cajaboton: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderColor: '#ffb800',
        borderRadius: 10,
        color: '#fff',
        marginBottom: 10
    },
    Label: {
        color: '#fff',
        marginBottom: 5,
        fontSize: 15
    },
    PreguntasTitulo: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15
    }
});