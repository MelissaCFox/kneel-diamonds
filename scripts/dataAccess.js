import { databaseCopy } from "./database.js";

const copyOfDatabase = databaseCopy

//Get Arrays
export const getMetals = () => {
    return copyOfDatabase.metals.map(metal => ({...metal}))
}

export const getSizes = () => {
    return copyOfDatabase.sizes.map(sizes => ({...sizes}))
}

export const getStyles = () => {
    return copyOfDatabase.styles.map(styles => ({...styles}))
}

export const getJewelryTypes = () => {
    return copyOfDatabase.jewelryTypes.map(type => ({...type}))
}

export const getOrders = () => {
    return copyOfDatabase.customOrders.map(customOrders => ({...customOrders}))
}

export const getOrderBuilder = () => {
    return copyOfDatabase.orderBuilder
}


//Set Values
export const setMetal = (id) => {
    copyOfDatabase.orderBuilder.metalId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setSize = (id) => {
    copyOfDatabase.orderBuilder.sizeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setStyle = (id) => {
    copyOfDatabase.orderBuilder.styleId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setJewelryType = (id) => {
    copyOfDatabase.orderBuilder.jewelryTypeId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


//Add New Custom Order to its Array from User Selections
export const addCustomOrder = () => {
    const newOrder = {...copyOfDatabase.orderBuilder}
    if (copyOfDatabase.customOrders.length === 0) {
        newOrder.id = 1
    } else {
        const lastIndex = copyOfDatabase.customOrders.length - 1
        newOrder.id = copyOfDatabase.customOrders[lastIndex].id + 1
        }
    newOrder.timestamp = Date.now()

    copyOfDatabase.customOrders.push(newOrder)

    copyOfDatabase.orderBuilder = {}

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
