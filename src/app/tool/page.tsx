'use client'

import { useState } from "react";

const CardElement = ({
  text, 
  image, 
  showText,
  onClick,
  isSelected,
  imageSize = "w-[70px] h-[70px]"
}: {
  text: string; 
  image?: string; 
  showText: boolean; 
  onClick?: () => void;
  isSelected?: boolean;
  imageSize?: string;
}) => {
  return(
    <button 
    onClick={onClick} 
    className={`flex flex-col gap-1 justify-center items-center ${
      isSelected 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 ${image ? "w-[120px] h-[120px]" : "w-full h-full"} hover:cursor-pointer`}
    >
      {image && <img src={image} alt={text} className={`${imageSize} object-cover rounded-lg`} />}
      {showText && <h2 className={`${image ? "text-md" : "text-4xl"} text-md font-bold`}>{text}</h2>}
    </button>
  )
}

const SelectorWrapper = (
  {
    selectorType,
    elements,
    isToggled,
    onToggle
  }: 
  {
    selectorType: string,
    elements: { text: string, image?: string, size?: string }[],
    isToggled: boolean,
    onToggle: () => void
  }
) => {
  const [selectedField, setSelectedField] = useState(elements[0]);

  const handleButtonClick = () => { 
    onToggle();
  }

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
          <SelectButton image={selectedField.image} imageSize={selectedField.size} text={selectedField.text} handleClick={handleButtonClick} isOpen={isToggled}/>
      </div>
      <SelectorCard elements={elements} handleSelect={handleSelect} isToggled={isToggled} selectedField={selectedField.text} isOpen={isToggled} selectorType={selectorType}/>
    </div>
  )
}

const SelectButton = ({
  image,
  imageSize = "w-[70px] h-[70px]",
  text,
  handleClick,
  isOpen
}: {
  image?: string;
  imageSize?: string;
  text?: string;
  handleClick: () => void;
  isOpen: boolean;
}) => {

  function getFontSize(text: string) {
    const base = 30;        // Max font size
    const reduction = text.length * 1; // Scale down per letter
    return Math.max(14, base - reduction); // Min font size = 14px
  }

  return(
    <button 
    onClick={handleClick} 
    className={`flex flex-col gap-1 justify-center items-center ${
      isOpen 
        ? "bg-orange-900/50 hover:bg-orange-900/90" 
        : "bg-gray-800/60 hover:bg-gray-700/60"
      } rounded-lg p-4 w-[120px] h-[120px] hover:cursor-pointer`}
    >
      {image && <img src={image} alt={text} className={`${imageSize} object-cover rounded-lg`} />}
      {text && <h2 style={{ fontSize: image ? '16px' : `${getFontSize(text)}px` }} className="font-bold">{text}</h2>}
    </button>
  )
}

const SelectorCard = ({ 
  elements, 
  handleSelect, 
  selectedField,
  isOpen,
  selectorType,
  isToggled
}: { 
  elements: { text: string, image?: string, size?: string }[],  
  handleSelect: (language: string) => void;
  selectedField: string;
  isOpen: boolean;
  selectorType: string;
  isToggled: boolean;
}) => {
  return(
    <div className={`absolute top-full z-20 flex flex-row justify-center items-center mt-5 transition-all duration-500 
    ${isToggled && isOpen 
      ? 'opacity-100 scale-y-100 translate-y-0' 
      : 'opacity-0 scale-y-98 pointer-events-none -translate-y-10'}`}> 
      <div className="flex flex-col w-[550px] bg-gray-800 rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Choose a {selectorType}</h2>
        <div className="border border-gray-300 rounded-lg flex flex-wrap justify-center items-center gap-8 p-5">
          {elements.map((element) => (
            <CardElement 
              key={element.text}
              text={element.text}
              imageSize={element.size ? element.size : undefined}
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
  const [activeSelector, setActiveSelector] = useState<string | null>(null);

  const handleSelectorToggle = (selectorType: string) => {
    setActiveSelector(activeSelector === selectorType ? null : selectorType);
  };

  const lang_elements = [
    {text: "English", image: "images/country_flags/united-kingdom.png", size: "w-[70px] h-[70px]"},
    {text: "French", image: "images/country_flags/france.png", size: "w-[70px] h-[70px]"},
    {text: "Spanish", image: "images/country_flags/spain.png", size: "w-[70px] h-[70px]"},
    {text: "German", image: "images/country_flags/germany.png", size: "w-[70px] h-[70px]"},
    {text: "Italian", image: "images/country_flags/italy.png", size: "w-[70px] h-[70px]"},
    {text: "Portuguese", image: "images/country_flags/portugal.png", size: "w-[70px] h-[70px]"},
    {text: "Dutch", image: "images/country_flags/netherlands.png", size: "w-[70px] h-[70px]"},
    {text: "Czech", image: "images/country_flags/czech-republic.png", size: "w-[70px] h-[70px]"},
    {text: "Swedish", image: "images/country_flags/sweden.png", size: "w-[70px] h-[70px]"},
    {text: "Polish", image: "images/country_flags/poland.png", size: "w-[70px] h-[70px]"},
    {text: "Romanian", image: "images/country_flags/romania.png", size: "w-[70px] h-[70px]"},
    {text: "Russian", image: "images/country_flags/russia.png", size: "w-[70px] h-[70px]"},
    {text: "Turkish", image: "images/country_flags/turkey.png", size: "w-[70px] h-[70px]"},
  ]

  const level_elements = [
    {text: "A1"}, //image: "images/country_flags/united-kingdom.png"},
    {text: "A2"}, //image: "images/country_flags/france.png"},
    {text: "B1"}, //image: "images/country_flags/spain.png"},
    {text: "B2"}, //image: "images/country_flags/germany.png"},
    {text: "C1"}, //image: "images/country_flags/italy.png"},
    {text: "C2"}, //image: "images/country_flags/portugal.png"},
  ]

  const topic_elements = [
    {text: "General", image: "images/topic_images/general.png", size: "w-[70px] h-[70px]"},
    {text: "Business", image: "images/topic_images/business.png", size: "w-[70px] h-[70px]"},
    {text: "Technology", image: "images/topic_images/technology.png", size: "w-[70px] h-[70px]"},
    {text: "Science", image: "images/topic_images/science.png", size: "w-[70px] h-[70px]"},
    {text: "Health", image: "images/topic_images/health.png", size: "w-[70px] h-[70px]"},
    {text: "History", image: "images/topic_images/history.png", size: "w-[70px] h-[70px]"},
    {text: "Geography", image: "images/topic_images/geography.png", size: "w-[70px] h-[70px]"},
    {text: "Art", image: "images/topic_images/art.png", size: "w-[70px] h-[70px]"},
    {text: "Music", image: "images/topic_images/music.png", size: "w-[70px] h-[70px]"},
    {text: "Sports", image: "images/topic_images/sports.png", size: "w-[70px] h-[70px]"},
    {text: "Random", image: "images/topic_images/random.png", size: "w-[70px] h-[70px]"},
  ]

  const length_elements = [
    {text: "Short"}, //image: "images/length_images/short.png", size: "w-[70px] h-[70px]"},
    {text: "Medium"}, //image: "images/length_images/medium.png", size: "w-[70px] h-[70px]"},
    {text: "Long"}, //image: "images/length_images/long.png", size: "w-[70px] h-[70px]"},
  ]
  
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5">
          <SelectorWrapper 
            selectorType="language" 
            elements={lang_elements}
            isToggled={activeSelector === "language"}
            onToggle={() => handleSelectorToggle("language")}
          />
          <SelectorWrapper 
            selectorType="level" 
            elements={level_elements} 
            isToggled={activeSelector === "level"}
            onToggle={() => handleSelectorToggle("level")}
          />
          <SelectorWrapper 
            selectorType="topic" 
            elements={topic_elements} 
            isToggled={activeSelector === "topic"}
            onToggle={() => handleSelectorToggle("topic")}
          />
          <SelectorWrapper 
            selectorType="length" 
            elements={length_elements} 
            isToggled={activeSelector === "length"}
            onToggle={() => handleSelectorToggle("length")}
          />
        </div>
      </div>
    </div>
  )
}