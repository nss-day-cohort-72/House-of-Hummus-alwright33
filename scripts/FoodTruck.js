import { entreeOptions } from "./Entrees.js"
import { sideDishOptions } from "./SideDishes.js"
import { vegetableOptions } from "./Vegetables.js"

const entreeHTML = await entreeOptions()
const veggieHTML = await vegetableOptions()
const sideHTML = await sideDishOptions()

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__entree options">
                <h2>Entrees</h2>
                ${entreeHTML}
            </section>

            <section class="choices__veggie options">
                <h2>Vegetable Options</h2>
                ${veggieHTML}
            </section>

            <section class="choices__side options">
                <h2>Side Dishes</h2>
                ${sideHTML}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>

        </article>

    `
}
