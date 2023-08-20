import React, { useState } from 'react';
import { BiChevronDown, BiPlus, BiMinus } from 'react-icons/bi';
import chai from '../../../assets/Desi.jpg'
import chai1 from '../../../assets/Desi(1).jpg';
import chai2 from '../../../assets/desi(2).jpg';
import chai3 from '../../../assets/Desi(3).jpg';
import chai4 from '../../../assets/Desi(4).jpg';
import chai5 from '../../../assets/Desi(5).jpg';
import chai6 from '../../../assets/Desi(6).jpg';
import chai7 from '../../../assets/desi(7).jpg';
import chai8 from '../../../assets/Desi(8).jpg';
import { useNavigate } from 'react-router-dom';

const TeaItemExpand = () => {
    const [isCollectionsExpanded, setCollectionsExpanded] = useState(false);
    const [isOriginExpanded, setOriginExpanded] = useState(false);
    const [isFlavourExpanded, setFlavourExpanded] = useState(false);
    const [isQualitiesExpanded, setQualitiesExpanded] = useState(false);
    const [isCaffeineExpanded, setCaffeineExpanded] = useState(false);
    const [isAllergensExpanded, setAllergensExpanded] = useState(false);
    const [isOrganic, setIsOrganic] = useState(false);
    const [sortBy, setSortBy] = useState('title');

    const navigate=useNavigate()

    const [selectedCollections, setSelectedCollections] = useState([]);
    const [selectedOrigins, setSelectedOrigins] = useState([]);
    const [selectedFlavours, setSelectedFlavours] = useState([]);
    const [selectedQualities, setSelectedQualities] = useState([]);
    const [selectedCaffeine, setSelectedCaffeine] = useState([]);
    const [selectedAllergens, setSelectedAllergens] = useState([]);

    const sections = [
        {
            id: 'collections',
            title: 'COLLECTIONS',
            state: isCollectionsExpanded,
            toggle: setCollectionsExpanded,
            selected: selectedCollections,
            setSelected: setSelectedCollections,
            options: ['Black teas', 'Green teas', 'White teas', 'Chai', 'Matcha', 'Herbal teas', 'Oolong']
        },
        { id: 'origin', title: 'ORIGIN', state: isOriginExpanded, toggle: setOriginExpanded, selected: selectedOrigins, setSelected: setSelectedOrigins, options: ['India', 'Iran', 'Japan', 'South Africa'] },
        { id: 'flavour', title: 'Flavour', state: isFlavourExpanded, toggle: setFlavourExpanded, selected: selectedFlavours, setSelected: setSelectedFlavours, options: ['Spicy', 'Sweet', 'Citrus', 'Smooth', 'Fruity', 'Floral', 'Grassy'] },
        { id: 'qualities', title: 'QUALITIES', state: isQualitiesExpanded, toggle: setQualitiesExpanded, selected: selectedQualities, setSelected: setSelectedQualities, options: ['Detax', 'Energy', 'Relax', 'Digestion'] },
        { id: 'caffeine', title: 'CAFFEINE', state: isCaffeineExpanded, toggle: setCaffeineExpanded, selected: selectedCaffeine, setSelected: setSelectedCaffeine, options: ['No Caffeine', 'Low Caffeine', 'Medium Caffeine', 'High Caffeine'] },
        { id: 'allergens', title: 'ALLERGENS', state: isAllergensExpanded, toggle: setAllergensExpanded, selected: selectedAllergens, setSelected: setSelectedAllergens, options: ['Lactose-free', 'Glutin-free', 'Nuts-free', 'soy-free'] },
    ];

    const toggleExpand = (section) => {
        switch (section) {
            case 'collections':
                setCollectionsExpanded(!isCollectionsExpanded);
                break;
            case 'origin':
                setOriginExpanded(!isOriginExpanded);
                break;
            case 'flavour':
                setFlavourExpanded(!isFlavourExpanded);
                break;
            case 'qualities':
                setQualitiesExpanded(!isQualitiesExpanded);
                break;
            case 'caffeine':
                setCaffeineExpanded(!isCaffeineExpanded);
                break;
            case 'allergens':
                setAllergensExpanded(!isAllergensExpanded);
                break;
            default:
                break;
        }
    };

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
    const handleCheckboxChange = (sectionId, value) => {
        const selectedSection = sections.find(section => section.id === sectionId);
    
        // If the selected value is already in the list, remove it (toggle behavior)
        const newSelected = selectedSection.selected.includes(value)
            ? selectedSection.selected.filter(item => item !== value)
            : [value];
    
        // Update the selected options for the section
        selectedSection.setSelected(newSelected);
    };
    

    return (
        <div className="flex flex-col md:flex-row p-4 md:space-x-4">
            <div className="w-full md:w-1/4  pr-4">
                <h2 className="flex items-start pb-4 text-sm md:text-lg lg:text-xl">
                    HOME / COLLECTIONS / CHAI
                </h2>
                {sections.map(section => (
                    <div key={section.id}>
                        <li className="flex items-center text-lg mb-4 cursor-pointer" onClick={() => section.toggle(!section.state)}>
                            {section.title}{' '}
                            {section.state ? <BiMinus className="ml-2" /> : <BiPlus className="ml-2" />}
                        </li>
                        {section.state && (
                            <>
                                {section.options.map((option, index) => (
                                    <li className="flex items-center" key={index}>
                                        <input
                                            type="checkbox"
                                            className="mr-1"
                                            checked={section.selected.includes(option)}
                                            onChange={() => handleCheckboxChange(section.id, option)}
                                        />
                                        {option}

                                    </li>
                                ))}

                            </>
                        )}

                    </div>
                ))}
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
                <div className="py-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {teaImages.map((tea, index) => (
                            <div onClick={()=>navigate("/collectionpage/expandmenu/products")} key={index} className="flex flex-col items-center">
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

export default TeaItemExpand;
