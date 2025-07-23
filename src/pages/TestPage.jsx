import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function TestPage() {
    const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeRemaining, setTimeRemaining] = useState(45 * 60); // 45 minutes in seconds
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock test data
  const testData = {
    id: 1,
    title: "Mathematics Quiz",
    subject: "Mathematics",
    totalQuestions: 25,
    duration: 45,
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 15?",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
        correctAnswer: 0,
      },
      {
        id: 2,
        question: "Which of the following is a prime number?",
        options: ["15", "21", "17", "25"],
        correctAnswer: 2,
      },
      {
        id: 3,
        question: "What is the area of a circle with radius 4 units?",
        options: ["8π", "16π", "12π", "4π"],
        correctAnswer: 1,
      },
      {
        id: 4,
        question: "Solve: 3² + 4² = ?",
        options: ["25", "49", "14", "7"],
        correctAnswer: 0,
      },
      {
        id: 5,
        question: "What is 15% of 200?",
        options: ["30", "25", "35", "20"],
        correctAnswer: 0,
      },
    ],
  };

  // Timer effect
  React.useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmitTest();
    }
  }, [timeRemaining]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAnswerSelect = (optionIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: optionIndex,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < testData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionJump = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const handleSubmitTest = async () => {
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      window.location.href = "/result";
    }, 2000);
  };

  const getAnsweredCount = () => {
    return Object.keys(answers).length;
  };

  const getProgressPercentage = () => {
    return (getAnsweredCount() / testData.questions.length) * 100;
  };

  const currentQuestionData = testData.questions[currentQuestion];

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A400C] to-[#0A400C] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center max-w-sm mx-4">
          <div className="w-16 h-16 bg-[#0A400C] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white animate-spin"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Submitting Test
          </h3>
          <p className="text-gray-600">
            Please wait while we save your answers...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A400C] to-[#0A400C] ">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
              <div>
                <h1 className="text-lg font-bold text-white">
                  {testData.title}
                </h1>
                <p className="text-white/80 text-sm">{testData.subject}</p>
              </div>
            </div>

            {/* Timer */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
                <span
                  className={`text-sm font-bold ${
                    timeRemaining < 300 ? "text-[#FB4141]" : "text-white"
                  }`}
                >
                  {formatTime(timeRemaining)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Progress Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-white/20">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-white font-semibold">Progress</h3>
            <span className="text-white/80 text-sm">
              {getAnsweredCount()}/{testData.questions.length} answered
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-4">
            <div
              className="bg-[#FF9B2F] h-2 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage()}%` }}
            ></div>
          </div>

          {/* Question Navigation Dots */}
          <div className="flex flex-wrap gap-2">
            {testData.questions.map((_, index) => (
              <button
                key={index}
                onClick={() => handleQuestionJump(index)}
                className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${
                  index === currentQuestion
                    ? "bg-white text-[#78C841] shadow-lg"
                    : answers[index] !== undefined
                    ? "bg-[#FF9B2F] text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#78C841] font-semibold text-sm">
              Question {currentQuestion + 1} of {testData.questions.length}
            </span>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-[#78C841] rounded-lg flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-gray-800 mb-6 leading-relaxed">
            {currentQuestionData.question}
          </h2>

          {/* Answer Options */}
          <div className="space-y-3">
            {currentQuestionData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
                  answers[currentQuestion] === index
                    ? "bg-[#78C841] border-[#78C841] text-white shadow-lg"
                    : "bg-gray-50 border-gray-200 text-gray-800 hover:border-[#78C841] hover:bg-[#78C841]/5"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestion] === index
                        ? "border-white bg-white"
                        : "border-gray-400"
                    }`}
                  >
                    {answers[currentQuestion] === index && (
                      <div className="w-3 h-3 bg-[#78C841] rounded-full"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-3 mb-6">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
              <span className="font-medium">Previous</span>
            </div>
          </button>

          {currentQuestion === testData.questions.length - 1 ? (
            <button
              onClick={() => setShowSubmitModal(true)}
              className="flex-1 py-3 bg-[#FB4141] text-white rounded-xl hover:bg-[#e63939] transition-colors font-medium shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                <span>Submit Test</span>
              </div>
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="flex-1 py-3 bg-[#FF9B2F] text-white rounded-xl hover:bg-[#e8891a] transition-colors font-medium shadow-lg"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Next</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </div>
            </button>
          )}
        </div>

        {/* Quick Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-white">
                {getAnsweredCount()}
              </p>
              <p className="text-white/70 text-xs">Answered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#FF9B2F]">
                {testData.questions.length - getAnsweredCount()}
              </p>
              <p className="text-white/70 text-xs">Remaining</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#FB4141]">
                {Math.round(getProgressPercentage())}%
              </p>
              <p className="text-white/70 text-xs">Complete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#FB4141] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Submit Test?
              </h3>
              <p className="text-gray-600 mb-4">
                You have answered {getAnsweredCount()} out of{" "}
                {testData.questions.length} questions.
              </p>
              {getAnsweredCount() < testData.questions.length && (
                <p className="text-[#FB4141] text-sm mb-4">
                  {testData.questions.length - getAnsweredCount()} questions are
                  still unanswered.
                </p>
              )}
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Continue Test
              </button>
              <button
                onClick={handleSubmitTest}
                className="flex-1 py-3 bg-[#FB4141] text-white rounded-lg hover:bg-[#e63939] transition-colors font-medium"
              >
                Submit Now
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .bg-white {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}


