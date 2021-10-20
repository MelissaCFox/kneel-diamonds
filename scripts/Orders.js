import { addCustomOrder, getOrders, getMetals, getStyles, getSizes, getJewelryTypes } from "./database.js"



const buildOrderListItem = (order) => {
    const metalArray = getMetals()
    const foundMetal = metalArray.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )

    const stylesArray = getStyles()
    const foundStyle = stylesArray.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const sizesArray = getSizes()
    const foundSize = sizesArray.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    const typesArray = getJewelryTypes()
    const foundType = typesArray.find(
        (type) => {
            return type.id === order.jewelryTypeId
        }
    )

    const initialCost = foundMetal.price + foundStyle.price + foundSize.price

    const totalCost = initialCost * foundType.priceMultiplier

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} costs ${costString}
        </li>`
}

export const Orders = () => {
    /*
    Can you explain why the state variable has to be inside
    the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const buttonClicked = clickEvent.target
        if (buttonClicked.id === "orderButton") {
            addCustomOrder()
        }
    }
)
