import { setVeggie } from "./TransientState.js"

export const vegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/veggies")
    const veggies = await response.json()

    document.addEventListener("change", handleVeggieChoice)

    const veggieHTML = `
        <div id='veggieOptions'>
            ${veggies.map(veggie =>
                `<label>
                    <div>
                        <input type='radio' name='veggie' value='${veggie.id}'/>
                        ${veggie.type}
                    <div/>
                </label>`
            ).join("")}
        </div>`

    return veggieHTML
}

const handleVeggieChoice = (changeEvent) => {
    if (changeEvent.target.name === "veggie") {
        setVeggie(parseInt(changeEvent.target.value))
    }
}
