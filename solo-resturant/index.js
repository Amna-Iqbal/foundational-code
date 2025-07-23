import menuArray from "./data.js";

const cart = document.getElementById('cart');
const modal = document.getElementById('modal');
const paymentForm = document.getElementById('pay-form');
const cartItems = [];

// load and display menu items
function getMenuHTMl(menuArray) {
    return menuArray.map(menuItem =>{
        const { name, ingredients, price, emoji, id } = menuItem;
        const ingredientList = ingredients.map(ingredient=> ingredient).join(",");
        return `<section class="card" id=${id}>
                <div class="group">
                  <p class="emoji">${emoji}</p>
                  <div class="card-right">
                    <h3 class="item-name">${name}</h3>
                    <p class="ingredients">${ingredientList}</p>
                    <p class="price">$${price}</p>
                  </div>
                </div>
                <button class="add-btn" data-btn= ${id} aria-label="Add ${name} to cart.">+</button>
              </section>`
    }).join('');
}
document.getElementById("container").innerHTML = getMenuHTMl(menuArray);

// event listeners
document.addEventListener("click", function(event){
    if(event.target.dataset.btn){
        addItem(event.target.dataset.btn);
    }
    if(event.target.dataset.remove){
        removeItem(event.target.dataset.remove);
    }
    if(event.target.id === 'order-btn'){
        modal.style.display = 'block';
    }
}
)

function addItem(id){

    const item = menuArray.find(item=>item.id ==id);
    const existingItem  = cartItems.find (cartItem => cartItem.id == id)

    if (existingItem){
        existingItem.quantity++;
        existingItem.price += item.price; //Calculting price based on quantity
    }
    else {
        const itemCopy = { ...item, quantity: 1 };
        cartItems.push(itemCopy);
}
renderCart();
}


function removeItem(id) {
    const existingItem = cartItems.find(item => item.id == id);
    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity--;
            existingItem.price -= menuArray.find(item => item.id == id).price;  // Revert price
        } else {
            const index = cartItems.indexOf(existingItem);
            cartItems.splice(index, 1);
        }
    }
    renderCart();
}


function renderCart(){
    if(cartItems.length>0){
    cart.innerHTML = '<h3 class="cart-heading">Your order here</h3>';
 cart.innerHTML +=  cartItems.map(item => {
    return `
    <div class="order-item">
    <div class="order-group">
    <div class="group">
    <p class="item-name">${item.name}</p>
    <button class="remove-btn" data-remove=${item.id}>remove</button>
    </div>
    <p class="price">$${item.price}</p></div>
    <p>Quantity: ${item.quantity}</p></div>`
    
 }).join('');
    const total = getTotal();
    cart.innerHTML += `<hr>
    <p class="total">Total price: <span>$${total}</span></p>
    <button class="order-btn btn" id="order-btn">Complete order</button>`;}
    else {
        cart.innerHTML = ''
    }
   
}
function getTotal(){
    return cartItems.reduce((total, currentItem)=>{
        return total + currentItem.price;
     }, 0)
}


paymentForm.addEventListener('submit', function(event){
    event.preventDefault();
    const payFormData = new FormData(paymentForm)
    const name = payFormData.get('name');
    modal.style.display = 'none';
    renderThankYou(name);
    
})

function renderThankYou(name){
    const user = document.createElement('div')
    user.innerHTML = `<h2>Thanks ${user.textContent=name}! Your order is on its way!</h2>`;
    cart.innerHTML = user.innerHTML;
    cart.classList.add('thank-you');

}