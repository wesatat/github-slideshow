import * as React from 'react'
import styled, { css } from 'styled-components/native'
import { useSeedlingsStore } from 'store/seedling.store'
import { SeedlingButton } from 'components/seedling-button'
import { ScrollView } from 'react-native'
import aurora from 'assets/aurora-bg.jpg'


const Wrapper = styled.ImageBackground`
    flex: 1;
    padding: 30px;
`
const Inner = styled.View`
    flex-direction: column;
    flex-wrap: wrap;
`

const WindowView = styled.SafeAreaView`
    flex: 1;
`

const SeedlingWrapper = styled.View`
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
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

   const getBorderStyle = (colorIndex) =>{
       const colorString = colorArray[colorIndex];
       return colorString;
   }

const getIsLarge = (index) => (index + 3) % 5 === 0

const renderRows = (navigation) => (seedling, index) => {
    return (
        <SeedlingWrapper key={index}>
           
            <SeedlingButton 
                style={{
                    borderColor:getBorderStyle(index),
                    
                }}
                key={seedling.slug}
                onPress={() =>
                    navigation.navigate('Details', {
                        seedlingId: seedling.id,
                    })
                }
            >
                {seedling.name}
            </SeedlingButton>
        </SeedlingWrapper>
    )
}

const Home = ({ navigation }) => {
    const seedlings = useSeedlingsStore((state) =>
        Object.values(state.seedlings)
    )

    return (
        <Wrapper source={aurora} resizeMode="cover">
        <WindowView>
            <ScrollView>
                <Inner>{seedlings.map(renderRows(navigation))}</Inner>
            </ScrollView>
        </WindowView>
        </Wrapper>
    )
}

export default Home
