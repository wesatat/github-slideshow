import React from 'react'
import styled from 'styled-components/native'

import { lighten } from 'polished'

import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins';


const lightGrey = lighten(0.7, '#999')

const getDisabledBorder = (props) => (props.disabled ? lightGrey : '#333')



export const StyledButton = styled.Pressable`
    border: 2px solid ${getDisabledBorder};
    background: ${(props) => (props.disabled ? lightGrey : 'white')};
    align-items: center;
    justify-content: center;
    padding: 8px;
    color: ${(props) => (props.disabled ? lightGrey : '#333')};
    border-radius: 5px;
    background: rgba(256,256, 256, 0.7);
    
`

export const StyledText = styled.Text`
    font-size: ${({ fontSize = 18 }) => fontSize}px;
    color: ${(props) => (props.disabled ? lightGrey : '#333')};
    font-family:Poppins_400Regular;
`

export const Button = ({ children, fontSize, ...props }) => {
    
    let [fontsLoaded] = useFonts({
        Poppins_300Light,
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
      });

    if (!fontsLoaded) {
        return <AppLoading />;
      } else{
    return(
    <StyledButton {...props}>
        <StyledText fontSize={fontSize}>{children}</StyledText>
    </StyledButton>
)
}
}