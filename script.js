// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Sample product data
    const products = [
      { name: 'Yamaha Electric Guitar - Model 1', price: 78521 },
      { name: 'Yamaha Acoustic Guitar - Model 1', price: 45220 },
      // Add more products as needed
    ];
  
    // Initialize the cart
    let cart = [];
  
    // Function to add a product to the cart
    function addToCart(product) {
      cart.push(product);
      updateCart();
    }
  
    // Function to update the cart details in the UI
    function updateCart() {
      const cartItems = document.getElementById('cart-items');
      const cartTotal = document.getElementById('cart-total');
  
      // Clear existing items
      cartItems.innerHTML = '';
  
      // Add each item to the cart list
      cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = item.name + ' - $' + item.price;
        cartItems.appendChild(listItem);
      });
  
      // Calculate and display the total amount
      const total = calculateTotal();
      cartTotal.textContent = '$' + total.toFixed(2);
    }
  
    // Function to calculate the total amount of items in the cart
    function calculateTotal() {
      return cart.reduce((total, item) => total + item.price, 0);
    }
  
    // Event listener for the "Add to Cart" buttons
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
      button.addEventListener('click', function () {
        const productIndex = this.getAttribute('data-product-index');
        const selectedProduct = products[productIndex];
        addToCart(selectedProduct);
      });
    });
  
    // Event listener for the "View Cart" button
    const viewCartButton = document.querySelector('.btn-view-cart');
    if (viewCartButton) {
      viewCartButton.addEventListener('click', function () {
        window.location.href = 'cart.html';
      });
    }
  });
  