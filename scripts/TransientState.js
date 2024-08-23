const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0
}

export const setEntree = (chosenEntree) => {
    transientState.entreeId = chosenEntree
    console.log(transientState)
}

export const setVeggie = (chosenVeggie) => {
    transientState.vegetableId = chosenVeggie
    console.log(transientState)
}

export const setSide = (chosenSide) => {
    transientState.sideId = chosenSide
    console.log(transientState)
}