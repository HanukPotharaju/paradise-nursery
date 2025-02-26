import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";
import { Link } from "react-router-dom";

function ShoppingCartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Function to calculate the total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + parseFloat(item.price.substring(1)) * item.quantity,
      0
    );
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/products">Continue Shopping</Link></p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Unit Price: {item.price}</p>
                <p>Subtotal: ${(parseFloat(item.price.substring(1)) * item.quantity).toFixed(2)}</p>
                
                <div className="cart-controls">
                  <button 
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                    disabled={item.quantity === 1}
                  >-</button>
                  
                  <span>{item.quantity}</span>

                  <button onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>
                    +
                  </button>

                  <button className="remove-btn" onClick={() => dispatch(removeItem(item.id))}>
                    ❌ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <h3>Total Cost: ${calculateTotalAmount().toFixed(2)}</h3>

          <div className="cart-actions">
            <Link to="/products"><button>Continue Shopping</button></Link>
            <button onClick={() => alert("Functionality to be added for future reference")}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
