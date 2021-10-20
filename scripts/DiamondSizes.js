import { getOrderBuilder, getSizes, setSize } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            // window.alert(`User chose diamond size ${event.target.value}`)
            setSize(parseInt(event.target.value))
        }
    }
    )
    
export const DiamondSizes = () => {
    const orderBuilder = getOrderBuilder()
    const sizes = getSizes()
    let html = "<ul>"

    const listItems = sizes.map(size => {
        if (orderBuilder.sizeId === size.id) {
            return `<li>
            <input type="radio" name="size" value="${size.id}" checked="checked"/>${size.carets}
            </li>`
        } else
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

