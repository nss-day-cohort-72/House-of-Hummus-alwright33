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

export const saveSale= async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/orders", postOptions)

    const customEvent = new CustomEvent("orderPlaced")
    document.dispatchEvent(customEvent)
}