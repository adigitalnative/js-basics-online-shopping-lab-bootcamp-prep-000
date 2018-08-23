var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = generateCartItem(item);
  cart.push(item)
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if (getCart().length === 0) {
    
    return "Your shopping cart is empty."
    
  } else if (getCart().length === 1) {
    
    return `In your cart, you have ${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`
  } else {
    // Build an array of formatted "itemName at itemPrice"
    var counter = getCart().length
    var desc = []
    
    while (counter > 1) {
      desc.push()  
    }
    // For the last one, add oxford comma 'and'
    // Join them with a comma
    // Return the full string
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}


// private

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateCartItem(item) {
  return {
    itemName: item,
    itemPrice: getRandomInt(1,100)
  }
}