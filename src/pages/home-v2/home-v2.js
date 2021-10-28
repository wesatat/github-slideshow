import * as React from 'react'
import styled from 'styled-components/native'
import { Clickable } from 'components/clickable'
import woodenBackground from 'assets/wooden-background.jpg'
import auroraLogo from 'assets/logo-info-white.png'
import auroraCoverOpen from 'assets/aurora-cover-open.png'
import { AntDesign } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

const Background = styled.ImageBackground`
    flex: 1;
    padding: 30px;
`

const LogoContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
const Logo = styled.Image`
margin-top:25px;
margin-bottom: 25px;
    width: 210px;
    height: 50px;
    opacity:0.7;
`

const IconContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-top: 30px;
`



const UnitImage = styled.ImageBackground`
    flex: 1;
`


const WindowView = styled.SafeAreaView`
    flex: 1;
`
const HomeV2 = ({ navigation }) => {
    return (
        <WindowView>
            <Background source={woodenBackground}>
                <LogoContainer>
                    <Logo source={auroraLogo} />
                </LogoContainer>

                <UnitImage
                    source={auroraCoverOpen}
                    imageStyle={{ resizeMode: 'contain' }}
                />
                <IconContainer>
                    <Clickable
                        onPress={() => navigation.navigate('Instructions')}
                    >
                        <AntDesign name="infocirlceo" size={42} color="white" />
                    </Clickable>

                    <Clickable
                        onPress={() => navigation.navigate('Home')}
                    >
                        <AntDesign name="pluscircleo" size={42} color="white"  />
                    </Clickable>
                </IconContainer>
            </Background>
        </WindowView>
    )
}

export default HomeV2
