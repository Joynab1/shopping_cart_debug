const addProduct = () => {
    const productField = document.getElementById('product-name'); const product = productField.value;
    productField.value = '';
    const quantityField = document.getElementById('product-quantity');
    const quantity = quantityField.value;
    quantityField.value = '';
    
    console.log(product, quantity);
    displayProduct(product, quantity)
    saveProductToLocalStorage(product,quantity);
    
}
const displayProduct=(product, quantity)=>{
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML=`
    ${product}: ${quantity}
    `
    ul.appendChild(li);
}
const getStoredShoppingCart=()=>{
    let cart ={};
    const storedCart =localStorage.getItem('cart');
    console.log(storedCart);
    if(storedCart){
      cart =JSON.parse(cart);
    }
    return cart;
}
const saveProductToLocalStorage =(product,quantity)=>{
const cart = getStoredShoppingCart();
cart[product]= quantity;
cartStringified= JSON.stringify(cart);
localStorage.setItem('cart', cartStringified);
console.log(cartStringified);
}
const displayProductsFromLocalStorage =()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for (const product in savedCart){
        const quantity = savedCart [product];
        console.log(product, quantity);
    }
}