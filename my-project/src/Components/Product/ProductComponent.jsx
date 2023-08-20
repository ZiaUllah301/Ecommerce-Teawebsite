import React,{useState} from 'react';
import chai from '../../assets/Desi.jpg';
import chai1 from '../../assets/Desi(1).jpg';
import chai2 from '../../assets/desi(2).jpg';

const ProductComponent = () => {
    const products = [
        {
            title: 'Ceylon Ginger',
            price: '€10.99',
            imageUrl: chai,
        },
        {
            title: 'Ceylon Ginger',
            price: '€12.99',
            imageUrl: chai1,
        },
        {
            title: 'Ceylon Ginger',
            price: '€9.99',
            imageUrl: chai2,
        },
    ];
    
    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (item) => {
        setSelectedItem(item);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h2 className="text-3xl font-semibold mb-4">You May Like This</h2>
            <div className="flex flex-col sm:flex-row justify-center sm:space-x-4">
                {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center px-4 py-4 sm:w-1/3 md:w-1/4">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-40 h-40 object-cover shadow-lg"
                        />
                        <p className="text-lg font-semibold mt-2">{product.title}</p>
                        <p className="text-sm">{`€${product.price}`}    </p>
                    </div>
                ))}
                 {isModalOpen && <Modal item={selectedItem} closeModal={closeModal} />}
            </div>
        </div>
    );
};

export default ProductComponent;
