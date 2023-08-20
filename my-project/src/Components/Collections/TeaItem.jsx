import React, { useState } from 'react';
import { BiChevronDown, BiPlus } from 'react-icons/bi';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';
import chai from '../../assets/Desi.jpg';
import chai1 from '../../assets/Desi(1).jpg';
import chai2 from '../../assets/Desi(2).jpg';
import chai3 from '../../assets/desi(3).jpg';
import chai4 from '../../assets/Desi(4).jpg';
import chai5 from '../../assets/Desi(5).jpg';
import chai6 from '../../assets/Desi(6).jpg';
import chai7 from '../../assets/desi(7).jpg';
import chai8 from '../../assets/Desi(8).jpg';
import { useNavigate } from 'react-router-dom';

const TeaItem = () => {
    const [isOrganic, setIsOrganic] = useState(false);
    const [sortBy, setSortBy] = useState('title');
    const navigate = useNavigate()

    const toggleOrganic = () => {
        setIsOrganic(!isOrganic);
    };


    const teaImages = [
        { src: chai, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai1, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai2, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai3, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai4, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai5, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai6, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai7, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' },
        { src: chai8, title: 'Ceylon Ginger Cinnamon chai tea', price: '€4.85 / 50 g' }
    ];


    const sortedTeaImages = [...teaImages].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'price') {
            return a.price.localeCompare(b.price);
        }
        return 0;
    });

    return (
        <div className="flex flex-col md:flex-row p-4 md:space-x-4">
            <div className="w-full md:w-1/4 pr-4">

                <h2 className="flex items-start pb-4 text-sm md:text-lg lg:text-xl">
                    HOME / COLLECTIONS / CHAI
                </h2>

                <ul className="space-y-2">
                    <li className="flex items-center underline">
                        COLLECTION(1)
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center underline">
                        ORIGIN
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center underline">
                        FLAVOUR
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center underline">
                        QUALITIES
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center underline">
                        CAFFEINE
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center underline">
                        ALLERGENS
                        <BiPlus className="ml-1 " />
                    </li>
                    <li className="flex items-center">
                        ORGANIC
                        <div className="flex items-center ml-2 cursor-pointer" onClick={toggleOrganic}>
                            {isOrganic ? (
                                <BsToggleOn size={30} className="" />
                            ) : (
                                <BsToggleOff size={30} className="" />
                            )}
                        </div>
                    </li>
                </ul>
            </div>

            <div className="w-full md:w-3/4 pl-4">
                <div className="flex items-center justify-end py-2">
                    <h2 className="text-lg font-semibold">SORT BY</h2>
                    <BiChevronDown size={30} className="text-xl text-blue-500" />
                    <select
                        className="ml-2 p-2 border rounded-md"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="title">Title</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                <div className="py-4" >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {teaImages.map((tea, index) => (
                            <div onClick={()=>navigate("/collectionpage/expandmenu")} key={index} className="flex flex-col items-center">
                                <img src={tea.src} alt={tea.title} className=' w-64 h-64 object-cover shadow-md' />
                                <p className="text-center font-semibold truncate h-7">
                                    Ceylon Ginger
                                </p>
                                <p className="text-center font-semibold truncate h-7">
                                    Cinnamon chai tea
                                </p>
                                <p className="text-center text-gray-600">{tea.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeaItem;
