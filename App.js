import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Details } from 'pages/details'
import { Instructions } from 'pages/instructions'
import HomeV2 from './src/pages/home-v2/home-v2'
import Home from './src/pages/home/home'


const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeV2">
                <Stack.Screen
                    name="HomeV2"
                    component={HomeV2}
                    options={{
                       headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                   // options={{
                   //     headerShown: false,
                    //}}
                />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen
                    name="Instructions"
                    component={Instructions}
                    //options={{
                    //    headerShown: false,
                    //}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
