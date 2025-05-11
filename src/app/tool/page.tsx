'use client'

import { useState } from "react";

const CardElement = ({
  text, 
  image, 
  showText,
  onClick,
  isSelected
}: {
  text: string; 
  image?: string; 
  showText: boolean; 
  onClick?: () => void;
  isSelected?: boolean;
}) => {
  return(
    <button 
    onClick={onClick} 
    className={`flex flex-col gap-5 justify-center items-center ${
      isSelected 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 ${image ? "w-[120px] h-[120px]" : "w-full h-full"} hover:cursor-pointer`}
    >
      {image && <img src={image} alt={text} className="w-full h-full object-cover rounded-lg" />}
      {showText && <h2 className={`${image ? "text-md" : "text-4xl"} text-md font-bold`}>{text}</h2>}
    </button>
  )
}

const SelectorWrapper = (
  {
    isSelectorOpen,
    onToggle,
    selectorType,
    elements
  }: 
  {
    isSelectorOpen: boolean,
    onToggle: () => void,
    selectorType: string,
    elements: { text: string, image?: string }[],
  }
) => {

  const [selectedField, setSelectedField] = useState(elements[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language: string) => {
    const selected = elements.find(el => el.text === language);
    if (selected) {
      setSelectedField(selected);
      onToggle();
    }
  };

  return(
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between items-center gap-10 border border-gray-700 rounded-lg p-5 w-[450px]">
          <div className="flex-1 flex justify-center text-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold"> Selected {selectorType}</h1>
            </div>
          </div>
          <SelectButton image={selectedField.image} text={selectedField.text} handleClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
      </div>
        <SelectorCard elements={elements} handleSelect={handleSelect} selectedField={selectedField.text} isOpen={isOpen} selectorType={selectorType}/>
    </div>
  )
}

const SelectButton = ({
  image,
  text,
  handleClick,
  isOpen
}: {
  image?: string;
  text: string;
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return(
    <button 
    onClick={handleClick} 
    className={`flex flex-col gap-5 justify-center items-center ${
      isOpen 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 w-[120px] h-[120px] hover:cursor-pointer`}
    >
      {image && <img src={image} alt={text} className="w-full h-full object-cover rounded-lg" />}
      <h2 className={` ${image ? "text-md" : "text-4xl"} font-bold`}>{text}</h2>
    </button>
  )
}

const SelectorCard = ({ 
  elements, 
  handleSelect, 
  selectedField,
  isOpen,
  selectorType
}: { 
  elements: { text: string, image?: string }[],  
  handleSelect: (language: string) => void;
  selectedField: string;
  isOpen: boolean;
  selectorType: string;
}) => {
  return(
    <div className={`absolute top-full z-20 flex flex-row justify-center items-center mt-5 transition-all duration-500 
    ${isOpen 
    ? 'opacity-100 scale-y-100 translate-y-0' 
    : 'opacity-0 scale-y-98 pointer-events-none -translate-y-10'}`}> 
      <div className="flex flex-col w-[550px] bg-gray-800 rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Choose a {selectorType}</h2>
        <div className="border border-gray-300 rounded-lg flex flex-wrap justify-center items-center gap-8 p-5">
          {elements.map((element) => (
            <CardElement 
              key={element.text}
              text={element.text}
              image={element.image ? element.image : undefined}
              showText={true} 
              onClick={() => handleSelect(element.text)}
              isSelected={selectedField === element.text}
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default function Tool() {

  const [openSelector, setOpenSelector] = useState<string | null>(null);

  const lang_elements = [
    {text: "English", image: "images/country_flags/united-kingdom.png"},
    {text: "French", image: "images/country_flags/france.png"},
    {text: "Spanish", image: "images/country_flags/spain.png"},
    {text: "German", image: "images/country_flags/germany.png"},
    {text: "Italian", image: "images/country_flags/italy.png"},
    {text: "Portuguese", image: "images/country_flags/portugal.png"},
    {text: "Dutch", image: "images/country_flags/netherlands.png"},
    {text: "Czech", image: "images/country_flags/czech-republic.png"},
    {text: "Swedish", image: "images/country_flags/sweden.png"},
    {text: "Polish", image: "images/country_flags/poland.png"},
    {text: "Romanian", image: "images/country_flags/romania.png"},
    {text: "Russian", image: "images/country_flags/russia.png"},
    {text: "Turkish", image: "images/country_flags/turkey.png"},
  ]

  const level_elements = [
    {text: "A1"}, //image: "images/country_flags/united-kingdom.png"},
    {text: "A2"}, //image: "images/country_flags/france.png"},
    {text: "B1"}, //image: "images/country_flags/spain.png"},
    {text: "B2"}, //image: "images/country_flags/germany.png"},
    {text: "C1"}, //image: "images/country_flags/italy.png"},
    {text: "C2"}, //image: "images/country_flags/portugal.png"},
  ]
  
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <SelectorWrapper isSelectorOpen={openSelector === "languages" ? true : false} onToggle={() => setOpenSelector(null)} selectorType="language" elements={lang_elements} />
          <SelectorWrapper isSelectorOpen={openSelector === "levels" ? true : false} onToggle={() => setOpenSelector(null)} selectorType="level" elements={level_elements} />
        </div>
      </div>
    </div>
  )
}