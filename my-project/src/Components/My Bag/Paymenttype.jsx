import React from 'react';
import pay1 from '../../assets/mastercard-dark-large.png'
import pay2 from '../../assets/Visa.png'
import pay3 from '../../assets/maestro-dark-large.png'
import pay4 from '../../assets/ideal-logo 1.png'

const PaymentType = () => {
    return (
        <div className="mt-8 bg-[#F4F4F4] w-full">
            <h2 className="text-2xl text-start md:text-3xl font-semibold mb-4">Payment Type</h2>
            <div className="flex items-center gap-8">
                <img src={pay1}  className="w-8 h-8 bg-black rounded-sm" />
                <img src={pay2} className="w-8 h-8 bg-black rounded-sm" />
                <img src={pay3}  className="w-8 h-8 bg-black rounded-sm" />    
                <img src={pay4} className="w-8 h-8 bg-black rounded-sm" />
            </div>
        </div>
    );
};

export default PaymentType;
