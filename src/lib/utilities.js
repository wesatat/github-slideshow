export const times = (numberOfItems, callback = (index) => index) =>
    Array.from({ length: numberOfItems }).map((_, index) => callback(index))
