import React from 'react';
import { FaCaretRight, FaTemperatureLow } from 'react-icons/fa';
import { RiCupLine } from 'react-icons/ri';
import { MdOutlineAccessAlarms, MdInvertColors } from 'react-icons/md';

const AboutTea = () => {
    return (
        <div className="flex flex-col md:flex-row p-4">
            <div className="w-full md:w-1/2 md:pl-4">
                <h2 className="text-2xl text-start md:text-3xl font-semibold mb-4">Steeping Instructions</h2>
                <ul className="mb-4 space-y-4 md:space-y-6 md:flex md:flex-col">
                    <li className="flex items-center">
                        <RiCupLine className="text-blue-500 mr-2" />
                        <span className="font-semibold">SERVING SIZE:</span> 2 tsp per cup, 6 tsp per pot
                    </li>
                    <li className="flex items-center">
                        <FaTemperatureLow className="text-blue-500 mr-2" />
                        <span className="font-semibold">WATER TEMPERATURE:</span> 100°C
                    </li>
                    <li className="flex items-center">
                        <MdOutlineAccessAlarms className="text-blue-500 mr-2" />
                        <span className="font-semibold">STEEPING TIME:</span> 3 - 5 minutes
                    </li>
                    <li className="flex items-center">
                        <MdInvertColors className="text-blue-500 mr-2" />
                        <span className="font-semibold">COLOR AFTER 3 MINUTES</span>
                    </li>
                </ul>
            </div>
            <div className="w-full md:w-1/2 md:pr-4">
                <h2 className="text-2xl flex items-start md:text-3xl font-semibold mb-4">About This Tea</h2>
                <ul className="mb-4 flex flex-row">
                <li className="items-center px-4 border-r-2 border-black flex flex-col">
                        <span className="font-semibold">FLAVOR</span>
                        <span className="ml-4">Spicy</span>
                    </li>
                    <li className="flex flex-col items-center border-r-2 px-4 border-black">
                        <span className="font-semibold">QUALITIES</span>
                        <span className="ml-4">Smoothing</span>
                    </li>
                    <li className=" flex flex-col items-center border-r-2 px-4 border-black">
                        <span className="font-semibold">CAFFEINE</span>
                        <span className="ml-4">Medium</span>
                    </li>
                    <li className=" flex flex-col items-center">
                        <span className="font-semibold">ALLERGENS</span>
                        <span className="ml-6">Nuts-free</span>
                    </li>
                </ul>
                <ul>
                    <li className="mt-4">
                        <span className=" flex items-start font-semibold">Ingredient:</span>
                        <p className="ml-4 text-lg">
                            Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper, Cinnamon sticks, Cardamom, Cinnamon pieces.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default AboutTea;
