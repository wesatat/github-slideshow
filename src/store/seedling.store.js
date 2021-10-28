import create from 'zustand'
import { times } from '../lib/utilities'
import { persist } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const createSeedling = (id) => ({
    id,
    slug: `seedling-${id}`,
    name: `Seedling #${id + 1}`,
    notes: '',
    plantedAt: null,
})

const initialValues = times(10).reduce((previousValue, currentValue) => {
    return { ...previousValue, [currentValue]: createSeedling(currentValue) }
}, {})

export const useSeedlingsStore = create(
    persist(
        (set, get) => ({
            seedlings: initialValues,

            updateValues: (values, id) => {
                const oldSeedlings = get().seedlings
                const oldValue = get().seedlings[id]

                return set({
                    seedlings: {
                        ...oldSeedlings,
                        [id]: { ...oldValue, ...values },
                    },
                })
            },
        }),
        {
            name: 'food-storage', // unique name
            getStorage: () => AsyncStorage, // Add this here!
        }
    )
)
