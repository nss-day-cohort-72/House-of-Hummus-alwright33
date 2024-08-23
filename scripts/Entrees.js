export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

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
   


