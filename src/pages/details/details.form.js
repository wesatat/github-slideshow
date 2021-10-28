import React from 'react'
import { Formik } from 'formik'
import styled from 'styled-components/native'
import { Input } from 'components/input'
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

const StyledInputs = styled(Input)`
    margin-bottom: 24px;
    border-radius:5px;
    font-family:Poppins_500Medium;
    
`

const StyledTextArea = styled(Input)`
    margin-bottom: 24px;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius:5px;
    font-family:Poppins_400Regular;
    
`

const Wrapper = styled.View`
    padding: 30px;
    
`

export const DetailsForm = ({ currentValues, onSubmit }) => {
    
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
        <Formik
            initialValues={{
                name: currentValues.name || '',
                notes: currentValues.notes || '',
            }}
            onSubmit={onSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <Wrapper>
                    <StyledInputs
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        placeholder="Please insert your name"
                    />

                    <StyledTextArea
                        onChangeText={handleChange('notes')}
                        onBlur={handleBlur('notes')}
                        value={values.notes}
                        placeholder="Please insert any notes?"
                        multiline={true}
                        numberOfLines={8}
                        style={{
                            textAlignVertical: 'top',
                        }}
                    />

                    <Button onPress={handleSubmit}>Save and exit</Button>
                </Wrapper>
            )}
        </Formik>
    )
}
}
