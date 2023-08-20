import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

const Delivery = () => {
    return (
        <div className="w-full mt-12 md:w-1/2 md:pl-4 bg-gray-200 p-4 md:h-[424px]">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4">Delivery and Retour</h2>
            <p className="mb-4">
                <AiOutlineRight className="inline-block mr-2" />
                Order before 12:00 and we will ship the same day.
            </p>
            <p className="mb-4">
                <AiOutlineRight className="inline-block mr-2" />
                Orders made after Friday 12:00 are processed on Monday.
            </p>
            <p className="mb-4">
                <AiOutlineRight className="inline-block mr-2" />
                To return your articles, please contact us first.
            </p>
            <p className="mb-4">
                <AiOutlineRight className="inline-block mr-2" />
                Postal charges for retour are not reimbursed.
            </p>
        </div>
    );
};

export default Delivery;
