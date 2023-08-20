import React, { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { TiWorld } from 'react-icons/ti';
import { SiWorldhealthorganization } from 'react-icons/si';
import { AiFillHeart } from 'react-icons/ai';
import chai3 from '../../assets/desi(3).jpg';
import kg from '../../assets/Frame 57.png';
import kg1 from '../../assets/Frame 58.png';
import kg2 from '../../assets/Frame 59.png';
import kg3 from '../../assets/Frame 60.png';
import kg4 from '../../assets/Frame 61.png';
import kg5 from '../../assets/Frame 62.png';
import Modal from './Modal';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleIncreaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = (product) => {
        setSelectedProduct(product); // Set the selected product
        setIsModalOpen(true); // Open the modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="flex flex-col md:flex-row p-4">
            {/* Left side (Product image) */}
            <div className="w-full md:w-1/2 pr-4">
                <img src={chai3} alt="Product" className="w-456 h-507 object-cover md:w-456 md:h-507" />
            </div>

            {/* Right side (Product information) */}
            <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ceylon Ginger Cinnamon chai tea</h2>
                <p className='mb-4 text-sm md:text-base'>A lovely warming Chai tea with ginger cinnamon flavours.</p>
                <div className="flex flex-wrap justify-between items-center mb-2">
                    <div className="flex items-center mb-2 md:mb-0">
                        <TiWorld className="mr-1" />
                        <span className="text-xs md:text-sm">Origin: Iran</span>
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <SiWorldhealthorganization className="text-green-500 mr-1" />
                        <span className="text-xs md:text-sm">Organic</span>
                    </div>
                    <div className="flex items-center mb-2 md:mb-0">
                        <AiFillHeart className="text-blue-500" />
                        <span className="text-xs md:text-sm">Vegan</span>
                    </div>
                </div>
                <p className="text-lg md:text-xl flex items-start font-semibold mb-2">€3.90</p>
                <div className="mb-4">
                    <p className=" text-start font-semibold mb-1">Variants:</p>
                    {/* List of variants */}
                    <ul className="flex flex-wrap space-x-2">
                        <li><img src={kg} alt="" /></li>
                        <li><img src={kg1} alt="" /></li>
                        <li><img src={kg2} alt="" /></li>
                        <li><img src={kg3} alt="" /></li>
                        <li><img src={kg4} alt="" /></li>
                        <li><img src={kg5} alt="" /></li>
                    </ul>
                </div>
                <div className="flex items-center gap-4 mb-4 md:mb-0">
                    <button

                        onClick={handleDecreaseQuantity}
                    >
                        <FaMinus />
                    </button>
                    <span className="text-lg">{quantity}</span>
                    <button

                        onClick={handleIncreaseQuantity}
                    >
                        <FaPlus />
                    </button>

                    <button
                        className="bg-black text-white py-2 px-4 md:px-8 hover:bg-gray-600"
                        onClick={() => handleAddToCart({ title: 'Product Title', price: 3.90, imageUrl: chai3 })}
                    >
                        ADD TO BAG
                    </button>

                    {isModalOpen && selectedProduct && (
                        <Modal item={selectedProduct} closeModal={handleCloseModal} /> // Pass the selected product to the modal
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
