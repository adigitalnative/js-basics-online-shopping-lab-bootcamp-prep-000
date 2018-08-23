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
    var counter = 0
    var descs = []
    while (counter < getCart().length-1) {
      descs.push(`${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}`)
      counter++
    }
    descs.push(`and ${getCart()[counter].itemName} at $${getCart()[counter].itemPrice}.`)
    
    return `In your cart, you have ${descs.join(", ")}`
    // For the last one, add oxford comma 'and'
    // Join them with a comma
    // Return the full string
  }
}

function total() {
  var total = 0
  
  for (let i=0, l=getCart().length; i<l; i++) {
    total = total + parseInt(getCart()[i].itemPrice)
  }
  
  return total
}

function removeFromCart(item) {
  if (item in getCart()) {
    indexOfItemToRemove = cart.indexOf(item)
    getCart().splice(indexOfItemToRemove,1)
    return getCart();
  }
  } else {
    
    return "That item is not in your cart."
  }
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