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
    return getCart()[0];
    // return `In your cart, you have foo at $foo.`
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