import { getJewelryTypes, setJewelryType } from "./database.js"

const types = getJewelryTypes()

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
    let html = "<ul>"

    const listItems = types.map(type => {
        return `<li>
            <input type="radio" name="jewelryType" value="${type.id}"/> ${type.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}