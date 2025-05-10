'use client'

import { useState } from "react";

const LanguageCardElement = ({
  language, 
  image, 
  showText,
  onClick,
  isSelected
}: {
  language: string; 
  image: string; 
  showText: boolean; 
  onClick?: () => void;
  isSelected?: boolean;
}) => {
  return(
    <button 
    onClick={onClick} 
    className={`flex flex-col gap-5 items-center ${
      isSelected 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 w-[120px] h-[120px] hover:cursor-pointer`}
    >
      <img src={image} alt={language} className="w-full h-full object-cover rounded-lg" />
      {showText && <h2 className="text-md font-bold">{language}</h2>}
    </button>
  )
}

const LanguageSelectButton = ({
  image,
  language,
  handleClick,
  isOpen
}: {
  image: string;
  language: string;
  handleClick: () => void;
  isOpen: boolean;
}) => {
  return(
    <button 
    onClick={handleClick} 
    className={`flex flex-col gap-5 items-center ${
      isOpen 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 w-[120px] h-[120px] hover:cursor-pointer`}
    >
      <img src={image} alt={language} className="w-full h-full object-cover rounded-lg" />
      <h2 className="text-md font-bold">{language}</h2>
    </button>
  )
}

const LanguageCard = ({ 
  elements, 
  handleSelect, 
  selectedLanguage,
  isOpen,
}: { 
  elements: { language: string, image: string }[],  
  handleSelect: (language: string) => void;
  selectedLanguage: string;
  isOpen: boolean;
}) => {
  return(
    <div className={`flex flex-row justify-center items-center mt-20 transition-all duration-500 transform origin-top 
    ${isOpen 
    ? 'opacity-100 scale-100 translate-y-0' 
    : 'opacity-0 scale-95 -translate-y-20 pointer-events-none'}`}> 
      <div className="flex flex-col w-[550px] bg-gray-800/40 rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Choose a language</h2>
        <div className="border border-gray-300 rounded-lg flex flex-wrap justify-center items-center gap-8 p-5">
          {elements.map((element) => (
            <LanguageCardElement 
              key={element.language} 
              language={element.language} 
              image={element.image} 
              showText={true} 
              onClick={() => handleSelect(element.language)}
              isSelected={selectedLanguage === element.language}
            />
            ))}
        </div>
      </div>
    </div>
  )
}

export default function Tool() {

  const elements = [
    {language: "English", image: "images/country_flags/united-kingdom.png"},
    {language: "French", image: "images/country_flags/france.png"},
    {language: "Spanish", image: "images/country_flags/spain.png"},
    {language: "German", image: "images/country_flags/germany.png"},
    {language: "Italian", image: "images/country_flags/italy.png"},
    {language: "Portuguese", image: "images/country_flags/portugal.png"},
    {language: "Dutch", image: "images/country_flags/netherlands.png"},
    {language: "Czech", image: "images/country_flags/czech-republic.png"},
    {language: "Swedish", image: "images/country_flags/sweden.png"},
    {language: "Polish", image: "images/country_flags/poland.png"},
    {language: "Romanian", image: "images/country_flags/romania.png"},
    {language: "Russian", image: "images/country_flags/russia.png"},
    {language: "Turkish", image: "images/country_flags/turkey.png"},
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(elements[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (language: string) => {
    const selected = elements.find(el => el.language === language);
    if (selected) {
      setSelectedLanguage(selected);
    }
  };

  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center gap-10 border border-gray-700 rounded-lg p-5">
            <h1 className="text-2xl font-bold"> Selected language</h1>
            <LanguageSelectButton image={selectedLanguage.image} language={selectedLanguage.language} handleClick={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
          </div>
          <LanguageCard elements={elements} handleSelect={handleSelect} selectedLanguage={selectedLanguage.language} isOpen={isOpen}/>}
        </div>
      </div>
    </div>
  )
}