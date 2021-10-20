import { getOrderBuilder, getStyles, setStyle } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            // window.alert(`User chose jewelry style ${event.target.value}`)
            setStyle(parseInt(event.target.value))
        }
    }
    )
    
    
export const JewelryStyles = () => {
    const orderBuilder = getOrderBuilder()
    const styles = getStyles()
    let html = "<ul>"

    const listItemsArray = styles.map(style => {
        if (orderBuilder.styleId === style.id) {
            return `<li>
            <input type="radio" name="styles" value="${style.id}" checked="checked"/>${style.style}
            </li>`
        } else
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    })

    // Join all of the strings in the array into a single string
    html += listItemsArray.join("")

    html += "</ul>"
    return html
}

