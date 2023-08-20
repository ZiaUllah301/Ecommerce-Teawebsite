import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, updateCartItemQuantity  } from '../../cartSlice';

const CartDisplay = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleRemoveFromCart = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    dispatch(updateCartItemQuantity({ itemId, quantity: newQuantity }));
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h3>{item.title}</h3>
            <p>Price: €{item.price}</p>
            <div className="cart-item-quantity">
              <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
            </div>
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDisplay;
