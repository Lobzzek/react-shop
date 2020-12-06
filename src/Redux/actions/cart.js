export const setOrders = items => ({
    type: "ADD_TO_CART",
    payload: items,
    id: items.id
})

export const removeOrder = id => ({
    type: "REMOVE_IN_CART",
    payload: id
})

export const increment = item => ({
    type: "INCREMENT",
    payload: item
})
export const decrement = item => ({
    type: "DECREMENT",
    payload: item
})
export const setColor = ( id, color ) => ({
    type: "COLOR",
    id: id,
    color: color,
})
export const setSize = ( id, size ) => ({
    type: "SIZE",
    id: id,
    size: size,
})