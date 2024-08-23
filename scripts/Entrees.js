import { setEntree } from "./TransientState.js"

export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChoice)

    let entreesHTML = `
        <div id='entreeOptions'>
            ${entrees.map(entree =>
                `<label>
                    <div>
                        <input type='radio' name='entree' value='${entree.id}'/>
                        ${entree.name}
                    <div/>
                </label>`
            ).join("")}
        </div>`

    return entreesHTML
}

const handleEntreeChoice = (changeEvent) => {
    if (changeEvent.target.name === "entree") {
        setEntree(parseInt(changeEvent.target.value))
    }
}
   


