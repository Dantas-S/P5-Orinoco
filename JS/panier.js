function displayCart() {
    
    let cartItems = localStorage.getItem("cart");
    cartItems = JSON.parse(cartItems);
}