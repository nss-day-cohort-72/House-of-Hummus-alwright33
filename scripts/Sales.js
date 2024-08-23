export const sales = async () => {
    const response = await fetch("http://localhost:8088/orders?_expand=entree&_expand=vegetable&_expand=side")
    const salesList = await response.json()

    const salesHTML = salesList.map(
        sale => {
            const salePrice = sale.entree.price + sale.vegetable.price + sale.side.price
            const formattedPrice = salePrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })
            return `<section class='sale'>
                        <div>Receipt #${sale.id} = ${formattedPrice}</div></section>`            
        }
    ).join("")
    
    return salesHTML
}
