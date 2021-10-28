import React from 'react'
import styled from 'styled-components/native'

const StyledTextInput = styled.TextInput`
    background: white;
    border: 1px solid #333;
    padding: 8px;
    width: 100%;
    justify-content: flex-start;
    font-size: 16px;
`

export const Input = (props) => <StyledTextInput {...props} />
