import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import chai3 from '../../assets/desi(3).jpg';
import { FaMinus, FaPlus } from 'react-icons/fa';
import PaymentType from './Paymenttype';
import Delivery from './Delivery';
import { useDispatch } from 'react-redux';
import { updateCartItemQuantity,removeItemFromCart } from '../../cartSlice';

const Paymentdetails = () => {
    const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const navigate=useNavigate()

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      dispatch(updateCartItemQuantity({ itemId: 1, quantity: quantity - 1 })); // Replace itemId with the actual item ID
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    dispatch(updateCartItemQuantity({ itemId: 1, quantity: quantity + 1 })); // Replace itemId with the actual item ID
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(1)); // Replace itemId with the actual item ID
  };

    const selectedProduct = {
        title: 'Product Title',
        quantity: 1,
        price: 3.90,
        imageUrl: chai3
    };

  

    return (
        <>
            <div className='flex flex-col p-4'>
                <div className="flex justify-between mb-4 border-black space-x-4 pb-4">
                    <h2 className="text-2xl md:text-3xl">1. My Bag</h2>
                    <h2 className="text-2xl md:text-3xl">2. Delivery</h2>
                    <h2 className="text-2xl md:text-3xl">3. Review & Payment</h2>
                </div>
            </div>
            <div className="flex flex-col md:flex-row p-4">

                {/* Left side */}
                <div className="w-full md:w-1/2 md:pr-4">
                    <div className="flex items-start mb-4">
                        <img
                            src={selectedProduct.imageUrl}
                            alt="Product"
                            className="w-16 h-16 object-cover"
                        />
                        <div className="flex-grow ml-6">

                                <div className="flex justify-around md:mr-20">
                                <h2 className="text-2xl font-semibold mb-4">{selectedProduct.title}</h2>
                                    <button  onClick={handleDecreaseQuantity}>
                                        <FaMinus />
                                    </button>
                                    <span className="text-lg">{quantity}</span>
                                    <button onClick={handleIncreaseQuantity}>
                                        <FaPlus />
                                    </button>
                                </div>

                            
                            <div className="flex justify-around gap-2">
                                <button
                                    className="bg-black text-white py-2 px-4 md:px-10"
                                    onClick={handleRemoveItem}
                                    
                                >
                                    Remove
                                </button>
                                <p className="text-xl font-semibold mb-2 md:mr-20">{`€${selectedProduct.price}`}</p>
                            </div>
                            <Link to="/collectionpage/expandmenu/products">
                                <button className=" text-center py-2 border-2 px-4 md:px-10 mt-4">
                                    Back to Shopping
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right side (Order summary) */}
                <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
                    <div className="bg-gray-200 p-4 md:h-[424px] md:relative">
                        <h2 className="text-2xl text-start md:text-3xl font-semibold mb-4">Order Summary</h2>
                        <div className="mb-8">
                            <div className="flex justify-between mb-4">
                                <span>Subtotal</span>
                                <span>{`€${selectedProduct.price}`}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>€3.95</span>
                            </div>
                            <div className="border-t border-black my-4" />
                            <div className="flex justify-between">
                                <span>Total</span>
                                <span>{`€${selectedProduct.price + 3.95}`}</span>
                            </div>
                            <p className="mt-4">Estimated shipping time: 2 days</p>
                            <button onClick={()=>navigate("/collectionpage/expandmenu/products/bagdetails/account")} className= "w-full bg-black text-white py-2 px-4 md:px-8 mt-4">
                                Check Out
                            </button>
                           
                        </div>
                    </div>
                    <PaymentType/>
                    <Delivery/>

                </div>
           

            </div>
            
        </>
    );
};

export default Paymentdetails;
