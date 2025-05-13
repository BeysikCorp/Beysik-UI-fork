export const getCart = () => {
  const cartData = localStorage.getItem('cart');
  return cartData ? JSON.parse(cartData) : [];
};

export const addToCart = (item) => {
  const cartData = getCart();

  // Check if the item already exists in the cart
  const existingItem = cartData.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // Update the quantity if the item already exists
    existingItem.quantity += item.quantity;
  } else {
    // Add the new item to the cart
    cartData.push(item);
  }

  // Save the updated cart data back to localStorage
  localStorage.setItem('cart', JSON.stringify(cartData));
};

export const removeFromCart = (id) => {
  const cartData = getCart();
  const updatedCart = cartData.filter((item) => item.id !== id);

  // Save the updated cart data back to localStorage
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const clearCart = () => {
  localStorage.removeItem('cart');
};