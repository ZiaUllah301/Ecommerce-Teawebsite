import React from 'react';
import card from '../assets/cards.png';
import card1 from '../assets/Image Holder.png';
import card2 from '../assets/Image Holder (1).png';
import card3 from '../assets/Cards (1).png';
import card4 from '../assets/cards (2).png';
import card5 from '../assets/cards (3).png';
import card6 from '../assets/cards (4).png';
import card7 from '../assets/cards (5).png';
import card8 from '../assets/cards (6).png';

const Collection = () => {
  const collectionItems = [
    { image: card},
    { name: 'Green Tea', image: card1 },
    { name: 'White Tea', image: card2 },
    { image: card3 },
    { image: card4 },
    { image: card5 },
    { image: card6 },
    { image: card7 },
    { image: card8 },
  ];

  return (
    <div className="py-16 text-center">
      <h2 className="text-2xl font-semibold mb-6"> Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collectionItems.map((item, index) => (
          <div key={index} className="p-4 text-center">
            <img src={item.image} className="w-full h-auto mx-auto mb-2"  />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
