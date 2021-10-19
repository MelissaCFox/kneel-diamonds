import { addCustomOrder, getOrders, getMetals, getStyles, getSizes } from "./database.js"


const metalArray = getMetal()
const foundMetal = metalArray.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

const stylesArray = getStyles()
const foundStyle = stylesArray.find(
    (style) => {
        return style.id === orderArray.styleId
    }
)

const sizesArray = getSizes()
const foundSize = sizesArray.find(
    (size) => {
        return size.id === order.sizeId
    }
)


const totalCost = foundMetal.price + foundStyle.price + foundSize.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})



const buildOrderListItem = (order) => {
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
