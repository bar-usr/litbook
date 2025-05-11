const TextBox = ({title, text}: {title: string, text: string}) => {
  return (
    <div className="flex flex-col gap-2 mb-15">
        <div className="w-fit self-end rounded-lg bg-gray-800/50 p-2 font-bold text-lg">Read the text carefully. Note any vocabullary you don't recognise.</div>
        <div className="rounded-lg bg-gray-800/60 p-6">
            <h2 className="text-2xl text-center font-bold mb-3">{title}</h2>
            <p className="text-xl text-justify">{text}</p>
        </div>
    </div>
  )
}

const MultipleChoice = () => {
    return (
        <div>
            <h2>True False</h2>
        </div>
    )
}

const TrueFalse = () => {
    return (
        <div>
            <h2>True False</h2>
        </div>
    )
}

const FillInTheBlank = () => {
    return (
        <div>
            <h2>Fill In The Blank</h2>
        </div>
    )
}

const ShortAnswer = () => {
    return (
        <div>
            <h2>Short Answer</h2>
        </div>
    )
}

const ComprehensionQuestions = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2>Comprehension Questions</h2>
            <MultipleChoice />
            <TrueFalse />
            <FillInTheBlank />
            <ShortAnswer /> 
        </div>
    )
}

const VocabularyQuestions = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2>Vocabulary Questions</h2>
            <MultipleChoice />
            <TrueFalse />
            <FillInTheBlank />
            <ShortAnswer /> 
        </div>
    )
}

const GrammarQuestions = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2>Grammar Questions</h2>
            <MultipleChoice />
            <TrueFalse />
            <FillInTheBlank />
            <ShortAnswer /> 
        </div>
    )
}

const UseOfLanguageQuestions = () => {
    return (
        <div className="flex flex-col gap-5">
            <h2>Use of Language Questions</h2>
            <MultipleChoice />
            <TrueFalse />
            <FillInTheBlank />
            <ShortAnswer /> 
        </div>
    )
}

export default function Generation() {
  return (
    <div>
        <div className="flex flex-col gap-5 p-10">
            <div className="flex flex-col mx-15">
            
                <TextBox title="Title" text="
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />


                <div className="flex flex-col gap-20">
                    <ComprehensionQuestions />
                    <VocabularyQuestions />
                    <GrammarQuestions />
                    <UseOfLanguageQuestions />
                </div>
            </div>
        </div>
        
    </div>
  )
}