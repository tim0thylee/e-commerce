export default (cartItems = [], action) => {
    if(action.type === 'ADD_CART') {
        return [...cartItems, action.payload]
    }
    
    return cartItems;
}