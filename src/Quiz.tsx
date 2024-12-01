import Confetti from "react-confetti";
import {useState} from "react";

interface Question {
    question: string;
    options: string[];
    answer: string;
}
const questions: Question[] = [
    {
        question: "What is my favorite color?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: "Blue",
    },
    {
        question: "What is my favorite animal?",
        options: ["Cat", "Dog", "Elephant", "Dolphin"],
        answer: "Dolphin",
    },
    {
        question: "What is my favorite food?",
        options: ["Pizza", "Burger", "Sushi", "Pasta"],
        answer: "Pizza",
    },
];
const Quiz: React.FC = () => {
    // State to track user's selected answer and confetti
    const [selectedAnswers, setSelectedAnswers] = useState<{
        [key: number]: { selectedOption: string; isCorrect: boolean };
    }>({});
    const [showConfetti, setShowConfetti] = useState(false);

    // Handle answer selection
    const handleAnswerClick = (questionIndex: number, selectedOption: string) => {
        const isCorrect = selectedOption === questions[questionIndex].answer;

        setSelectedAnswers((prev) => ({
            ...prev,
            [questionIndex]: {
                selectedOption,
                isCorrect,
            },
        }));

        if (isCorrect) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts 3 seconds
        }
    };

    return (
        <>
            {showConfetti && <Confetti />}
            <div className="row">
                <div className="col-12 display-4 text-center">Quiz Time ⏰</div>
            </div>
            <div className="row p-5">
                <div className="col-12">
                    {questions.map((item, index) => (
                        <div key={index} className="mb-5 text-center">
                            <p className="display-6">
                                {index + 1}. {item.question}
                            </p>

                            <div className="d-flex justify-content-center">
                                {item.options.map((option, optIndex) => (
                                    <button
                                        key={optIndex}
                                        className={`btn me-2 ${
                                            selectedAnswers[index]?.selectedOption === option
                                                ? selectedAnswers[index]?.isCorrect
                                                    ? "btn-success"
                                                    : "btn-danger"
                                                : "btn-outline-primary"
                                        }`}
                                        onClick={() => handleAnswerClick(index, option)}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {selectedAnswers[index] && (
                                <div className="mt-2">
                                    {selectedAnswers[index].isCorrect ? (
                                        <p className="text-success">🎉 Correct!</p>
                                    ) : (
                                        <p className="text-danger">❌ Incorrect! Try again.</p>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};


export default Quiz;
