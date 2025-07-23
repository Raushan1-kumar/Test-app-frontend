"use client";
import React, { useState } from "react";

function TestResult() {
  const [showCelebration, setShowCelebration] = useState(true);
  const [currentTab, setCurrentTab] = useState("overview");

  // Mock test result data
  const testResult = {
    id: 1,
    testTitle: "Mathematics Quiz",
    subject: "Mathematics",
    score: 85,
    totalQuestions: 25,
    correctAnswers: 21,
    incorrectAnswers: 4,
    timeSpent: 38, // minutes
    totalTime: 45, // minutes
    completedAt: "2025-01-22",
    difficulty: "Medium",
    percentile: 78,
    questions: [
      {
        id: 1,
        question: "What is the value of x in the equation 2x + 5 = 15?",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 2.5"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 45, // seconds
      },
      {
        id: 2,
        question: "Which of the following is a prime number?",
        options: ["15", "21", "17", "25"],
        correctAnswer: 2,
        userAnswer: 1,
        isCorrect: false,
        timeSpent: 62,
      },
      {
        id: 3,
        question: "What is the area of a circle with radius 4 units?",
        options: ["8π", "16π", "12π", "4π"],
        correctAnswer: 1,
        userAnswer: 1,
        isCorrect: true,
        timeSpent: 38,
      },
      {
        id: 4,
        question: "Solve: 3² + 4² = ?",
        options: ["25", "49", "14", "7"],
        correctAnswer: 0,
        userAnswer: 0,
        isCorrect: true,
        timeSpent: 28,
      },
      {
        id: 5,
        question: "What is 15% of 200?",
        options: ["30", "25", "35", "20"],
        correctAnswer: 0,
        userAnswer: 2,
        isCorrect: false,
        timeSpent: 55,
      },
    ],
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "#78C841";
    if (score >= 80) return "#FF9B2F";
    if (score >= 70) return "#B4E50D";
    return "#FB4141";
  };

  const getPerformanceMessage = (score) => {
    if (score >= 90) return "Excellent! 🎉";
    if (score >= 80) return "Great job! 👏";
    if (score >= 70) return "Good work! 👍";
    return "Keep practicing! 💪";
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowCelebration(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };

  const formatSeconds = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A400C] to-[#0A400C] relative">
      {/* Celebration Animation */}
      {showCelebration && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
          <div className="bg-white rounded-3xl p-8 shadow-2xl text-center max-w-sm mx-4 celebration-card">
            <div className="w-20 h-20 bg-gradient-to-r from-[#78C841] to-[#B4E50D] rounded-full flex items-center justify-center mx-auto mb-4 celebration-icon">
              <svg
                className="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Test Completed!
            </h2>
            <p
              className="text-4xl font-bold mb-2"
              style={{ color: getScoreColor(testResult.score) }}
            >
              {testResult.score}%
            </p>
            <p className="text-lg text-gray-600 mb-4">
              {getPerformanceMessage(testResult.score)}
            </p>
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-[#78C841] rounded-full celebration-dot"></div>
              <div className="w-3 h-3 bg-[#FF9B2F] rounded-full celebration-dot"></div>
              <div className="w-3 h-3 bg-[#FB4141] rounded-full celebration-dot"></div>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-40">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => (window.location.href = "/student")}
              className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
              </svg>
              <span className="font-medium">Back</span>
            </button>

            <div className="text-center">
              <h1 className="text-lg font-bold text-white">Test Results</h1>
              <p className="text-white/80 text-sm">{testResult.testTitle}</p>
            </div>

            <button
              onClick={() => (window.location.href = "/student")}
              className="px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 text-sm"
            >
              Dashboard
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Score Card */}
        <div className="bg-white rounded-3xl p-6 shadow-xl mb-6 score-card">
          <div className="text-center mb-6">
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 120 120"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#f3f4f6"
                  strokeWidth="8"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke={getScoreColor(testResult.score)}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(testResult.score / 100) * 314} 314`}
                  className="progress-circle"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p
                    className="text-3xl font-bold"
                    style={{ color: getScoreColor(testResult.score) }}
                  >
                    {testResult.score}%
                  </p>
                  <p className="text-gray-600 text-sm">Score</p>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {getPerformanceMessage(testResult.score)}
            </h2>
            <p className="text-gray-600">
              You scored better than {testResult.percentile}% of students
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#78C841]/10 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-[#78C841] rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#78C841]">
                {testResult.correctAnswers}
              </p>
              <p className="text-gray-600 text-sm">Correct</p>
            </div>

            <div className="bg-[#FB4141]/10 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-[#FB4141] rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#FB4141]">
                {testResult.incorrectAnswers}
              </p>
              <p className="text-gray-600 text-sm">Incorrect</p>
            </div>

            <div className="bg-[#FF9B2F]/10 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-[#FF9B2F] rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-[#FF9B2F]">
                {formatTime(testResult.timeSpent)}
              </p>
              <p className="text-gray-600 text-sm">Time Used</p>
            </div>

            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <p className="text-2xl font-bold text-gray-600">
                {testResult.totalQuestions}
              </p>
              <p className="text-gray-600 text-sm">Total Questions</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 mb-6 border border-white/20 overflow-x-auto">
          <button
            onClick={() => setCurrentTab("overview")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              currentTab === "overview"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setCurrentTab("questions")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              currentTab === "questions"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Questions
          </button>
          <button
            onClick={() => setCurrentTab("analytics")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              currentTab === "analytics"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Analytics
          </button>
        </div>

        {/* Content Area */}
        {currentTab === "overview" && (
          <div className="space-y-6">
            {/* Performance Breakdown */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Performance Breakdown
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Accuracy</span>
                    <span className="text-[#78C841] font-bold">
                      {Math.round(
                        (testResult.correctAnswers /
                          testResult.totalQuestions) *
                          100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#78C841] h-3 rounded-full transition-all duration-1000 ease-out progress-bar"
                      style={{
                        width: `${
                          (testResult.correctAnswers /
                            testResult.totalQuestions) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      Time Efficiency
                    </span>
                    <span className="text-[#FF9B2F] font-bold">
                      {Math.round(
                        (testResult.timeSpent / testResult.totalTime) * 100
                      )}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#FF9B2F] h-3 rounded-full transition-all duration-1000 ease-out progress-bar"
                      style={{
                        width: `${
                          (testResult.timeSpent / testResult.totalTime) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">
                      Completion Rate
                    </span>
                    <span className="text-[#B4E50D] font-bold">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-[#B4E50D] h-3 rounded-full w-full transition-all duration-1000 ease-out progress-bar"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Test Details */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Test Details
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Subject</span>
                  <span className="font-medium text-gray-800">
                    {testResult.subject}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Difficulty</span>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      testResult.difficulty === "Easy"
                        ? "bg-green-100 text-green-800"
                        : testResult.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {testResult.difficulty}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Completed On</span>
                  <span className="font-medium text-gray-800">
                    {testResult.completedAt}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Percentile Rank</span>
                  <span className="font-bold text-[#78C841]">
                    {testResult.percentile}th
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentTab === "questions" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Question Review</h3>

            {testResult.questions.map((question, index) => (
              <div
                key={question.id}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        question.isCorrect ? "bg-[#78C841]" : "bg-[#FB4141]"
                      }`}
                    >
                      {question.isCorrect ? (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      Question {index + 1}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">
                      {formatSeconds(question.timeSpent)}
                    </span>
                  </div>
                </div>

                <h4 className="font-medium text-gray-800 mb-4 leading-relaxed">
                  {question.question}
                </h4>

                <div className="space-y-2">
                  {question.options.map((option, optionIndex) => (
                    <div
                      key={optionIndex}
                      className={`p-3 rounded-lg border-2 ${
                        optionIndex === question.correctAnswer
                          ? "bg-[#78C841]/10 border-[#78C841] text-[#78C841]"
                          : optionIndex === question.userAnswer &&
                            !question.isCorrect
                          ? "bg-[#FB4141]/10 border-[#FB4141] text-[#FB4141]"
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            optionIndex === question.correctAnswer
                              ? "border-[#78C841] bg-[#78C841]"
                              : optionIndex === question.userAnswer &&
                                !question.isCorrect
                              ? "border-[#FB4141] bg-[#FB4141]"
                              : "border-gray-400"
                          }`}
                        >
                          {optionIndex === question.correctAnswer && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          )}
                          {optionIndex === question.userAnswer &&
                            !question.isCorrect && (
                              <svg
                                className="w-3 h-3 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                              </svg>
                            )}
                        </div>
                        <span className="font-medium">{option}</span>
                        {optionIndex === question.correctAnswer && (
                          <span className="text-xs bg-[#78C841] text-white px-2 py-1 rounded-full">
                            Correct
                          </span>
                        )}
                        {optionIndex === question.userAnswer &&
                          optionIndex !== question.correctAnswer && (
                            <span className="text-xs bg-[#FB4141] text-white px-2 py-1 rounded-full">
                              Your Answer
                            </span>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {currentTab === "analytics" && (
          <div className="space-y-6">
            {/* Time Analysis */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Time Analysis
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">
                    Average Time per Question
                  </span>
                  <span className="font-bold text-[#FF9B2F]">
                    {formatSeconds(
                      Math.round(
                        (testResult.timeSpent * 60) / testResult.totalQuestions
                      )
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Fastest Question</span>
                  <span className="font-bold text-[#78C841]">
                    {formatSeconds(
                      Math.min(...testResult.questions.map((q) => q.timeSpent))
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Slowest Question</span>
                  <span className="font-bold text-[#FB4141]">
                    {formatSeconds(
                      Math.max(...testResult.questions.map((q) => q.timeSpent))
                    )}
                  </span>
                </div>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Performance Insights
              </h3>

              <div className="space-y-4">
                <div className="p-4 bg-[#78C841]/10 rounded-xl border-l-4 border-[#78C841]">
                  <h4 className="font-semibold text-[#78C841] mb-2">
                    Strengths
                  </h4>
                  <p className="text-gray-700 text-sm">
                    You answered {testResult.correctAnswers} questions correctly
                    with good time management.
                  </p>
                </div>

                {testResult.incorrectAnswers > 0 && (
                  <div className="p-4 bg-[#FF9B2F]/10 rounded-xl border-l-4 border-[#FF9B2F]">
                    <h4 className="font-semibold text-[#FF9B2F] mb-2">
                      Areas for Improvement
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Review the {testResult.incorrectAnswers} questions you got
                      wrong to strengthen your understanding.
                    </p>
                  </div>
                )}

                <div className="p-4 bg-[#B4E50D]/10 rounded-xl border-l-4 border-[#B4E50D]">
                  <h4 className="font-semibold text-[#B4E50D] mb-2">
                    Next Steps
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Practice similar questions to improve your score and try
                    more challenging tests.
                  </p>
                </div>
              </div>
            </div>

            {/* Comparison Chart */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Score Comparison
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Your Score</span>
                    <span className="font-bold text-[#78C841]">
                      {testResult.score}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div
                      className="bg-[#78C841] h-4 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${testResult.score}%` }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Class Average</span>
                    <span className="font-bold text-gray-600">72%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-gray-400 h-4 rounded-full w-[72%] transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Top Score</span>
                    <span className="font-bold text-[#FF9B2F]">96%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div className="bg-[#FF9B2F] h-4 rounded-full w-[96%] transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 space-y-3">
          <button
            onClick={() => (window.location.href = "/test")}
            className="w-full py-4 bg-[#78C841] text-white rounded-xl hover:bg-[#6bb838] transition-colors font-semibold text-lg shadow-lg"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M13,7H11V11H7V13H11V17H13V13H17V11H13V7Z" />
              </svg>
              <span>Retake Test</span>
            </div>
          </button>

          <button
            onClick={() => (window.location.href = "/student")}
            className="w-full py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-colors font-semibold text-lg backdrop-blur-sm border border-white/30"
          >
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z" />
              </svg>
              <span>Back to Dashboard</span>
            </div>
          </button>
        </div>
      </div>

      <style jsx global>{`
        @keyframes celebration {
          0% { transform: scale(0.8) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.1) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes progressFill {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .celebration-card {
          animation: celebration 0.8s ease-out;
        }
        
        .celebration-icon {
          animation: bounce 2s infinite;
        }
        
        .celebration-dot {
          animation: bounce 1.5s infinite;
        }
        
        .celebration-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .celebration-dot:nth-child(3) {
          animation-delay: 0.4s;
        }
        
        .score-card {
          animation: fadeInUp 0.6s ease-out;
        }
        
        .progress-circle {
          animation: progressFill 2s ease-out;
        }
        
        .progress-bar {
          animation: progressFill 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default TestResult;