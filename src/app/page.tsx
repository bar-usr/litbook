'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CardListElement = ({image, title, description}: {image: string, description: string, title: string}) => {
  return (
    <div className="bg-gray-500/10 inset-shadow-sm p-4 rounded-xl flex flex-row items-center gap-5">
      <Image src={image} alt={title} width={50} height={50} />
      <div className="flex flex-col">
        <h3 className="text-lg font-bold text-gray-100">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  )
}

const Card = ({ title, description, elements }: { 
  title: string, 
  description?: string, 
  elements?: { image: string, title: string, description: string }[] 
}) => {
  return (
    <div className="bg-gray-800/40 pt-4 pb-7 px-5 rounded-xl flex flex-col gap-2 items-center w-[450px] shadow-lg shadow-zinc-600/10 hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
      <h3 className="text-[21px] font mb-2 text-gray-100 ">{title}</h3>
      {description && <p className="text-sm text-gray-400 text-center">{description}</p>}
      <div className="flex flex-col gap-2 w-full">
        {elements?.map((element, index) => (
          <CardListElement 
            key={index}
            image={element.image} 
            title={element.title} 
            description={element.description} 
          />
        ))}
      </div>
    </div>
  );
}

const Header = () => {
  const router = useRouter();

  return (
    <div className="mt-60 mb-5 flex flex-col p-10 justify-between items-center">
      <Image src="/litbook_logo_white.png" alt="Litbook" width={400} height={400} />
      <h2 className="text-2xl mb-15 text-zinc-500">
        Light up your language learning.
      </h2>

      <div className="flex flex-row gap-4">
        <button onClick={() => router.push('/tool')} className="bg-orange-400 text-white hover:bg-orange-500 hover:scale-105 transition-all duration-400 hover:cursor-pointer px-4 py-2 rounded-md">
          Generate My First Workbook
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-10 flex flex-wrap justify-center items-start gap-20">
        <Card
            title="Features"
            //description="Your AI-powered textbook."
            elements={[
              {
                image: "/images/book.png",
                title: "Fresh Workbooks Every Time",
                description: "AI-generated texts built for practice"
              },
              {
                image: "/images/target.png",
                title: "Minimal, Disctraction-Free UI",
                description: "Designed to help you focus"
              },
              {
                image: "/images/jigsaw.png",
                title: "All-in-one Practice",
                description: "Grammar, vocab and reading in one place"
              }
            ]}
          />
          <Card
            title="How it works"
            //description="Your AI-powered textbook."
            elements={[
              {
                image: "/images/notepad.png",
                title: "Step 1",
                description: "Choose your language, interests, and target topic"
              },
              {
                image: "/images/sparkling.png",
                title: "Step 2",
                description: "AI generates a textbook tailored to your interests and language level"
              },
              {
                image: "/images/brain.png",
                title: "Step 3",
                description: "Practice your new language on grammar, comprehension, and more"
              }
            ]}
          />
      </div>
    </div>
  );
}
