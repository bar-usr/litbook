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

type MultipleChoiceProps = {
    question: string,
    answers: string[]
}

type TrueFalseProps = {
    statements: { statement: string, is_true: boolean }[]
}

type FillInTheBlankProps = {
    sentences: { sentence: string, blanks_index: number }[]
}

type ShortAnswerProps = {
    question: string,
    answer: string
}

const MultipleChoice = ({ question, answers }: MultipleChoiceProps) => {
    return (
        <div>
            <h2>{ question }</h2>
            <div className="flex flex-col gap-2">
                {answers.map((answer, index) => (
                    <div key={index}>{answer}</div>
                ))}
            </div>
        </div>
    )
}

const TrueFalse = ({ statements }: TrueFalseProps) => {
    return (
        <div>
            <h2>True False</h2>
            <div className="flex flex-col gap-2">
                {statements.map((statement, index) => (
                    <div key={index}>{statement.statement}</div>
                ))}
            </div>
        </div>
    )
}

const FillInTheBlank = ({ sentences }: FillInTheBlankProps) => {
    return (
        <div>
            <h2>Fill In The Blank</h2>
            <div className="flex flex-col gap-2">
                {sentences.map((sentence, index) => (
                    <div key={index}>{sentence.sentence}</div>
                ))}
            </div>
        </div>
    )
}

const ShortAnswer = ({ question, answer }: ShortAnswerProps) => {
    return (
        <div>
            <h2>{question}</h2>
            <div className="flex flex-col gap-2">
                <div>{answer}</div>
            </div>
        </div>
    )
}

const Question = ({
    question_component: QuestionComponent,
    question_array
}: {
    question_component: React.ComponentType<{ question: string; answers: string[] }>,
    question_array:
}) => {
    return (
        <div className="rounded-lg p-5 flex flex-col gap-5 bg-gray-800/50">
            <h2>{question_array[0]?.type}</h2>
            <div className="flex flex-col gap-5">
                {question_array.map((type, index) => (
                    <QuestionComponent 
                        key={index}
                        question={type.questions[0]}
                        answers={["Option 1", "Option 2", "Option 3", "Option 4"]}
                    />
                ))}     
            </div>
        </div>
    )
}

const ComprehensionQuestions = (multiple_choice_array: {type: string, questions: {question: string, answers: string[]}[]}[]) => {
    return (
        <div>
            <Question question_component={MultipleChoice} question_array={multiple_choice_array} />
        </div>
    )
}

const VocabularyQuestions = (multiple_choice_array: {type: string, questions: {question: string, answers: string[]}[]}[]) => {
    return (
        <div className="flex flex-col gap-5">
            <Question question_component={MultipleChoice} question_array={multiple_choice_array} />
        </div>
    )
}

const GrammarQuestions = (multiple_choice_array: {type: string, questions: {question: string, answers: string[]}[]}[]) => {
    return (
        <div className="flex flex-col gap-5">
            <Question question_component={MultipleChoice} question_array={multiple_choice_array} />
        </div>
    )
}

const UseOfLanguageQuestions = (multiple_choice_array: {type: string, questions: {question: string, answers: string[]}[]}[]) => {
    return (
        <div className="flex flex-col gap-5">
            <Question question_component={MultipleChoice} question_array={multiple_choice_array} />
        </div>
    )
}

export default function Generation() {

    const multiple_choice_array = [
        {
            questions: [{question: "What is the capital of France?", answers: ["Paris", "Berlin", "Rome", "Madrid"]}]
        }
]

    const multipleChoiceProps: MultipleChoiceProps = {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Rome"],
    };

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
                    <ComprehensionQuestions multiple_choice_array={multipleChoiceProps}/>
                </div>
            </div>
        </div>
        
    </div>
  )
}