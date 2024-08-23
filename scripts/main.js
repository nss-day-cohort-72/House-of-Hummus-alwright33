import { FoodTruck } from "./FoodTruck.js"
import { sales } from "./Sales.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    const mainHTML = FoodTruck()
    const salesHTML = await sales()
    /*The saveOrder function is asynchronous, it dispatches the "orderPlaced" event immediately 
    after the fetch request, but before the DOM is updated with the new order data. In order
    to get the DOM to update I needed to make `renderAllHTML` an async function and making the `sales`
    function await to get the latest sales data. Before it was updating the DOM before it received the
    updated data. */

    mainContainer.innerHTML = mainHTML + salesHTML
}

document.addEventListener("orderPlaced", renderAllHTML)

renderAllHTML()

