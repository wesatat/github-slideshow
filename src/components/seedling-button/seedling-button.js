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


  const ColorArray=[
    "#C61FDD",
    "#2EEF40",
    "#3FA2C9",
    "#DB2121",
   "#DBC921",
    "#23D886",
    "#DB2164",
    "#82D32D",
    "#212BDB",
    "#D63E25",
  ]

  // const colorChoice=()=>{
  //   for(var i=0; i>10;i++){
  //     return i
  //   }
  // }

const StyledPressable = styled.Pressable`
    align-items: center;
    justify-content: center;
    background: rgba(256,256, 256, 0.7);
    border-radius: 20px;
    padding: 10px;
    margin:3px;
    width: 100%;
    height: 60px;
   border: 3px solid ${lighten(0.3, '#333')};
`
// border: 4px solid ${lighten(0.3, '#333')};
const colorArray=[
  "#C61FDD",
  "#2EEF40",
  "#3FA2C9",
  "#DB2121",
 "#DBC921",
  "#23D886",
  "#DB2164",
  "#82D32D",
  "#212BDB",
  "#D63E25",
]

//  function getBorderStyle(props){
//      const colorString = colorArray[props.index];
//      return "2px solid "+  colorString;
//  }

const StyledText = styled.Text`
    text-align: center;
    font-family: Poppins_500Medium;
    font-size:18px;
`

const SeedlingButton = ({ children, ...props }) => {

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

    return (
        <StyledPressable {...props}>
            <StyledText >{children}</StyledText>
        </StyledPressable>
    )
}
}

export default SeedlingButton
