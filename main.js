document.addEventListener("DOMContentLoaded", () => {
  const cartLink = document.getElementById("cart-link");
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

  const updateCartCount = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const cartCount = cartItems.length;
    cartLink.textContent = `Cart (${cartCount})`;
  };

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const product = button.parentElement;
      const productName = product.querySelector("h3").textContent;
      const productPrice = product.querySelector("p").textContent;

      cartItems.push({ name: productName, price: productPrice });
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      updateCartCount();
    });
  });

  updateCartCount();
});
