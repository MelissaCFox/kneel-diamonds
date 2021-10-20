import { getJewelryTypes, getOrderBuilder, setJewelryType } from "./dataAccess.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "jewelryType") {
            // window.alert(`User chose diamond size ${event.target.value}`)
            setJewelryType(parseInt(event.target.value))
        }
    }
    )
    
export const jewelryTypes = () => {
    const types = getJewelryTypes()
    const orderBuilder = getOrderBuilder()
    let html = "<ul>"

    const listItems = types.map(type => {
        if (orderBuilder.jewelryTypeId === type.id) {
            return `<li>
            <input type="radio" name="jewelryType" value="${type.id}" checked="checked"/>${type.type}
            </li>`
        } else
        return `<li>
            <input type="radio" name="jewelryType" value="${type.id}"/>${type.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}