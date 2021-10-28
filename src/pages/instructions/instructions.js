import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native'
import aurora from 'assets/aurora-bg.jpg'
import auroraLogo from 'assets/logo-info.png'

import clock from 'assets/icons/clock.png'
import temperature from 'assets/icons/temperature.png'
import electric from 'assets/icons/electric.png'
import usb from 'assets/icons/usb.png'
import magnetic from 'assets/icons/magnetic.png'

//custom google font
import { Text, View, StyleSheet } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins';

const Wrapper = styled.ImageBackground`
    flex: 1;
    padding: 30px;
`

const BottomLogo = styled.Image`
    width: 100%;
    height: 40px;
    resize-mode: contain;
    margin-top:15px;
`

const Content = styled.ScrollView`
    flex: 1;
`

const IconWrapper = styled.ImageBackground`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Icon = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const IconImage = styled.Image`
    height: 50px;
    width: 50px;
    flex-direction: column;
    align-items: center;
`

const IconText = styled.Text`
    flex-direction: column;
    align-items: center;
    font-size: 6px;
    text-align: center;
    color: white;
`

const InstructionWrapper = styled.View`
    margin-bottom: 10px;
    margin-top: 10px;
`

const GreenText=styled.Text`
    color:lime;
    font-weight: bold;
`

const RedText=styled.Text`
    color:red;
    font-weight: bold;
`

const BlueText=styled.Text`
    color:#489ED7;
    font-weight: bold;
`

const Separator = styled.View`
    width: 100%;

    border-bottom-color: rgba(255, 255, 255, 0.5);
    border-bottom-width: 1px;
`

const InstructionText = styled.Text`
    text-align: center;
    color: white;
`

const icons = [
    { title: 'USB3', source: usb },
    { title: 'Energy Efficient', source: electric },
    { title: 'Magnetic top', source: magnetic },
    { title: 'Thermo Regulating', source: temperature },
    { title: 'Runs 24/7', source: clock },
]




const Instructions = () => {


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
        <Wrapper source={aurora} resizeMode="cover">
            <IconWrapper>
                {icons.map((icon, index) => (
                    <Icon key={index}>
                        <IconImage source={icon.source} />
                        <IconText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>{icon.title}</IconText>
                    </Icon>
                ))}
            </IconWrapper>
            <Content>
                <InstructionWrapper>
                    <InstructionText  style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_600SemiBold'
          }}>
                        Aurora+ is a seed germinator. It helps you germinate your seeds
without all the environmental stress. You plug it in, choose one of
the two temperature settings, add some cotton (or use our pads
included), pop in your seed of choice, add a few drops of water
and close the lid.
Aurora+ will cocoon your seed/s in a loving glow of warmth while
maintaining adequate airflow and (the tiniest amount of) light.
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_700Bold'
          }}>
                        PLUG IN TO TURN ON
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>
                       -MUST BE PLUGGED INTO A USB3 PORT, USB PHONE / TABLET CHARGER OR BATTERY BANK {'\n'}
-KEEP COTTON PAD/WOOL ADEQUATELY HYDRATED, AURORA+ IS NOT SELF WATERING. {'\n'}
-DO NOT OVER FILL *NEVER USE MORE THEN 0.5ML OF LIQUID WITHOUT A COTTON PAD.{'\n'}
- 1.5ML IS THE OPTIMAL LIQUID VOLUME WHEN USING OUR COTTON PADS{'\n'}
-NEVER SUBMERGE YOUR AURORA+ IN WATER {'\n'}
-KEEP YOUR AURORA+ CLEAN!
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>
                     Low temperature is the default setting. Press the button at
the back with a pin to change from low to high temperature.
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>
                  The <GreenText>GREEN</GreenText> light glowing indicates that Aurora+ is on its LOW TEMPERATURE setting.
When Aurora+ reaches its LOW temperature setting of 25°C 77°F
the green light will slowly flash.
The <RedText>RED</RedText> light glowing indicates that Aurora+ is on its HIGH TEMPERATURE setting.
When Aurora+ reaches its HIGH temperature setting of 30°C 86°F
the red light will slowly flash.
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>
                    If Aurora+ ever gets hotter than your selected LOW or HIGH temperature (by being
left in the sun or left out on a very hot day) both the RED and GREEN lights will
glow telling you to <BlueText>“chill out and put your Aurora+ in a cool shady spot”</BlueText>
                    </InstructionText>
                </InstructionWrapper>
                <Separator />
                <InstructionWrapper>
                    <InstructionText style={{
           // fontSize,
           // paddingVertical,
            // Note the quoting of the value for `fontFamily` here; it expects a string!
            fontFamily: 'Poppins_400Regular'
          }}>
                    Patent Application No. 202102556
                    </InstructionText>
                </InstructionWrapper>
               
            </Content>
            <BottomLogo source={auroraLogo} />
        </Wrapper>
    )
}
}

export default Instructions
