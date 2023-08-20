import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { addItemToCart, removeItemFromCart } from '../../cartSlice';
import { addItemToCart,removeItemFromCart, updateCartItemQuantity } from '../../cartSlice';
 // Import your actions from cartSlice

const Modal = ({ item, closeModal }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Extract item details from the provided item object
  const { title, price, imageUrl } = item;

  const handleAddToCart = () => {
    dispatch(addItemToCart({ ...item, quantity }));
    closeModal();
  };

  const handleRemoveFromCart = () => {
    dispatch(removeItemFromCart(item.id));
    closeModal();
  };
  const handleQuantityChange = newQuantity => {
    setQuantity(newQuantity);
    dispatch(updateCartItemQuantity({ itemId: item.id, quantity: newQuantity }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 max-w-full shadow-md overflow-y-auto">
        <div className="flex items-start mb-4">
          <img
            src={item.imageUrl} // Replace with actual product image
            alt="Product"
            className="w-16 h-16 object-cover"
          />
          <div className="flex-grow ml-6">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="flex justify-between gap-2">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                <FaMinus />
              </button>
              <span className="text-lg">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>
                <FaPlus />
              </button>
            </div>
            <div className="flex justify-between">
              <button
                className="bg-black text-white py-2 px-4 md:px-10"
                onClick={handleRemoveFromCart}
              >
                Remove
              </button>
              <p className="text-xl font-semibold mb-2">{`€${price}`}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>{`€${price * quantity}`}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>€3.60</span>
        </div>
        <div className="border-t border-black my-4" />
        <div className="flex justify-between mb-6">
          <span>Total</span>
          <span>{`€${price * quantity + 3.60}`}</span>
        </div>
        <div className="flex justify-between">
          <Link to={'/collectionpage/expandmenu/products/bagdetails'}>
            <button
              className="bg-black text-white py-2 px-6 md:px-10 hover:bg-gray-600"
              onClick={handleAddToCart}
            >
              ADD TO PURCHASE
            </button>
          </Link>
          <button
            className="bg-black text-white py-2 px-8 md:px-10 hover:bg-gray-600"
            onClick={closeModal}
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
