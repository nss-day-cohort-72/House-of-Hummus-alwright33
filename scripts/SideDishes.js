export const sideDishOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let sidesHTML = `
        <div id='sideOptions'>
            ${sides.map(side =>
                `<label>
                    <div>
                        <input type='radio' name='sideDish' value='${side.id}'/>
                        ${side.title}
                    <div/>
                </label>`
            ).join("")}
        </div>`
        
    return sidesHTML
}


