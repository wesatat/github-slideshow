import React from 'react'

import { Alert } from "react-native";

import { format, formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns'
import styled from 'styled-components/native'
import { Button } from 'components/button'
import AppLoading from 'expo-app-loading';
import {
    useFonts,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  } from '@expo-google-fonts/poppins';

const Wrapper = styled.View`
    padding: 15px;
`

const StyledButton = styled(Button)`
    min-width: 70%;
    margin-bottom: 20px;
    background: rgba(256,256, 256, 0.7);
   
`

const InfoText = styled.Text`
    font-size: 16px;
    color:white;
    margin:5px;
    font-family:Poppins_500Medium;
    
`

const ButtonWrapper = styled.View`
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

export const DetailsInfo = ({
    seedling,
    setIsEditing,
    onReset,
    onGerminate,
}) => {

    const createTwoButtonAlert = () =>
    Alert.alert(
      "Are you sure?",
      "Click Yes to reset seedling",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Yes", onPress: onReset}
      ],
      { cancelable: false }
    );


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
        <Wrapper>
            <InfoText>Seedling name: {seedling.name}</InfoText>
            <InfoText >Seedling notes: {seedling.notes}</InfoText>
            <InfoText>
                {seedling.plantedAt
                    ? `Planted on: ${format(
                          new Date(seedling.plantedAt),
                          'dd MMM, p'
                      )}`
                    : 'Planted at: Not planted yet'}
            </InfoText>
            <InfoText>
                {seedling.plantedAt
                    ? `Age of seedling: ${formatDistanceToNowStrict(
                          new Date(seedling.plantedAt),
                          {
                            unit: 'hour'                                               
                          }         
                      )}`
                    : 'Age of seedling: Not planted yet'}
            </InfoText>
            <ButtonWrapper>
                <StyledButton onPress={() => setIsEditing(true)}>
                    Edit this seedling
                </StyledButton>

                <StyledButton 
                    onPress={onGerminate}
                    disabled={!!seedling.plantedAt}
                >
                    Start germination
                </StyledButton>

                <StyledButton onPress={createTwoButtonAlert}>Reset ⚠️</StyledButton>
            </ButtonWrapper>
        </Wrapper>
    )
}
}