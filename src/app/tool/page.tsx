'use client'

import { useState } from "react";

const LanguageCardElement = ({language, image, showText}: {language: string, image: string, showText: boolean}) => {
  const [clicked, setIsClicked] = useState(false);

  return(
    <button onClick={() => setIsClicked(!clicked)} className={`flex flex-col gap-5 items-center ${clicked ? "bg-orange-900/50 hover:bg-orange-900/90" : "bg-gray-800/60 hover:bg-gray-700/60"} rounded-lg p-4 w-[120px] h-[120px] hover:cursor-pointer`}>
      <img src={image} alt={language} className="w-full h-full object-cover rounded-lg" />
      {showText && <h2 className="text-md font-bold">{language}</h2>}
    </button>
  )
}

const LanguageCard = ({ elements }: { elements: { language: string, image: string }[] }) => {
  return(
    <div className="flex flex-row justify-center items-center mt-20"> 
      <div className="flex flex-col w-[550px] bg-gray-800/40 rounded-lg p-5">
        <h2 className="text-2xl font-bold mb-5 text-center">Choose a language</h2>
        <div className="border border-gray-300 rounded-lg flex flex-wrap justify-center items-center gap-8 p-5">
          {elements.map((element) => (
            <LanguageCardElement key={element.language} language={element.language} image={element.image} showText={true} />
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

  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-10 border border-gray-700 rounded-lg p-5">
          <h1 className="text-2xl font-bold"> Selected language</h1>
          <LanguageCardElement language={elements[0].language} image={elements[0].image} showText={false}/>
        </div>
        <LanguageCard elements={elements}/>
      </div>
    </div>
  )
}