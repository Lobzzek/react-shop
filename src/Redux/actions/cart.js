export const setOrders = items => ({
    type: "ADD_TO_CART",
    payload: items,
    id: items.id
})

export const removeOrder = id => ({
    type: "REMOVE_IN_CART",
    payload: id
})