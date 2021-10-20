import { getMetals, getOrderBuilder, setMetal } from "./database.js"


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            // window.alert(`User chose metal option ${event.target.value}`)
            setMetal(parseInt(event.target.value))
        }
    }
    )
    
export const Metals = () => {
    const orderBuilder = getOrderBuilder()
    const metals = getMetals()
    let html = "<ul>"

    for (const metal of metals) {
        if (orderBuilder.metalId === metal.id) {
            html += `<li>
            <input type="radio" name="metal" value="${metal.id}" checked="checked"/>${metal.metal}
            </li>`
        } else
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

