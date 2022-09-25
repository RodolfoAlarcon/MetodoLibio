import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inicio } from "../pantallas/Inicio";
import { QuienesSomos } from "../pantallas/QuienesSomos";
import { Metodologia } from "../pantallas/Metodologia";
import { Testimonios } from '../pantallas/Testimonios';
import { Contactenos } from '../pantallas/Contactenos';
import { Terminos } from '../pantallas/Terminos';
import { Formulario } from '../pantallas/Formulario';

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Inicio"
                    component={Inicio}
                />
                <Stack.Screen
                    name="QuienesSomos"
                    component={QuienesSomos}
                />
                <Stack.Screen
                    name="Metodologia"
                    component={Metodologia}
                />
                <Stack.Screen
                    name="Testimonios"
                    component={Testimonios}
                />
                <Stack.Screen
                    name="Contactenos"
                    component={Contactenos}
                />
                <Stack.Screen
                    name="Terminos"
                    component={Terminos}
                />
                <Stack.Screen
                    name="Formulario"
                    component={Formulario}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}