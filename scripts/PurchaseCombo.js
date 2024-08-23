import { saveSale } from "./TransientState.js"

export const purchaseCombo = async () => {

    document.addEventListener("click", handleComboPurchase)

    const button = "<div><button id='purchase'>Purchase Combo</button><div/>"
    return button
}

const handleComboPurchase = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        saveSale()
    }
}