import React, { useState } from 'react'
import styled from 'styled-components/native'
import { DetailsForm } from './details.form'
import { createSeedling, useSeedlingsStore } from 'store/seedling.store'
import { DetailsInfo } from 'partials/details/details-info'
import aurora from 'assets/aurora-bg.jpg'

import shallow from 'zustand/shallow'


const Wrapper = styled.ImageBackground`
    flex: 1;
    padding: 30px;
`

const Details = ({ route }) => {
    const { seedlingId } = route.params
    const [seedling, updateValues] = useSeedlingsStore(
        (state) => [state.seedlings[seedlingId], state.updateValues],
        shallow
    )

    const [isEditing, setIsEditing] = useState(false)



    return (
        <Wrapper source={aurora} resizeMode="cover">
            {isEditing ? (
                <DetailsForm
                    currentValues={seedling}
                    onSubmit={(values) => {
                        updateValues(values, seedling.id)
                        setIsEditing(false)
                    }}
                />
            ) : (
                <DetailsInfo
                    seedling={seedling}
                    setIsEditing={setIsEditing}
                    onGerminate={() => {
                        updateValues({ plantedAt: new Date() }, seedling.id)
                    }}
                    onReset={() => {
                        updateValues(createSeedling(seedling.id), seedling.id)
                    }}
                />
            )}
        </Wrapper>
    )
}


export default Details
