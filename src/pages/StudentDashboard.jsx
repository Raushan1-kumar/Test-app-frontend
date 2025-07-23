import { useState } from "react";

export default function StudentDashboard() {
//   const { data: user, loading } = useUser();
//   const { signOut } = useAuth();

  const [selectedTab, setSelectedTab] = useState("tests");

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#78C841] to-[#B4E50D]">
//         <div className="text-white text-xl">Loading...</div>
//       </div>
//     );
//   }

//   const handleSignOut = async () => {
//     await signOut({
//       callbackUrl: "/",
//       redirect: true,
//     });
//   };

  const mockTests = [
    {
      id: 1,
      title: "Mathematics Quiz",
      subject: "Math",
      questions: 25,
      duration: 45,
      difficulty: "Medium",
      color: "#FF9B2F",
    },
    {
      id: 2,
      title: "Science Assessment",
      subject: "Science",
      questions: 30,
      duration: 60,
      difficulty: "Hard",
      color: "#FB4141",
    },
    {
      id: 3,
      title: "English Grammar",
      subject: "English",
      questions: 20,
      duration: 30,
      difficulty: "Easy",
      color: "#78C841",
    },
    {
      id: 4,
      title: "History Test",
      subject: "History",
      questions: 35,
      duration: 50,
      difficulty: "Medium",
      color: "#B4E50D",
    },
  ];

  const mockAttempts = [
    {
      id: 1,
      testName: "History Quiz",
      score: 85,
      totalQuestions: 20,
      date: "2025-01-20",
      status: "completed",
    },
    {
      id: 2,
      testName: "Biology Test",
      score: 92,
      totalQuestions: 25,
      date: "2025-01-18",
      status: "completed",
    },
    {
      id: 3,
      testName: "Physics Assessment",
      score: 78,
      totalQuestions: 30,
      date: "2025-01-15",
      status: "completed",
    },
  ];

  const stats = {
    totalTests: 12,
    completedTests: 8,
    averageScore: 84,
    totalHours: 15,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A400C] to-[#0A400C]">
      {/* Mobile Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
              <h1 className="text-xl font-bold text-white">EduTest</h1>
            </div>

            <button
            //   onClick={handleSignOut}
              className="px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome back! 👋
          </h2>
          <p className="text-white/80">Ready to continue learning?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FF9B2F] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {stats.totalTests}
                </p>
                <p className="text-white/70 text-xs">Total Tests</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#78C841] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {stats.completedTests}
                </p>
                <p className="text-white/70 text-xs">Completed</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FB4141] rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {stats.averageScore}%
                </p>
                <p className="text-white/70 text-xs">Avg Score</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-[#78C841]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {stats.totalHours}h
                </p>
                <p className="text-white/70 text-xs">Study Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 mb-6 border border-white/20">
          <button
            onClick={() => setSelectedTab("tests")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "tests"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Available Tests
          </button>
          <button
            onClick={() => setSelectedTab("attempts")}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "attempts"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            My Results
          </button>
        </div>

        {/* Content Area */}
        {selectedTab === "tests" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Available Tests</h3>

            <div className="space-y-4">
              {mockTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-2xl p-4 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: test.color }}
                      >
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {test.title}
                        </h4>
                        <p className="text-gray-600 text-sm">{test.subject}</p>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        test.difficulty === "Easy"
                          ? "bg-green-100 text-green-800"
                          : test.difficulty === "Medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {test.difficulty}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                        </svg>
                        <span>{test.duration}min</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        <span>{test.questions} questions</span>
                      </div>
                    </div>
                  </div>

                  <button
                    className="w-full py-3 rounded-lg font-medium text-white transition-colors"
                    style={{ backgroundColor: test.color }}
                    onClick={() => (window.location.href = `/test`)}
                  >
                    Start Test
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "attempts" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">
              Recent Test Results
            </h3>

            <div className="space-y-4">
              {mockAttempts.map((attempt) => (
                <div
                  key={attempt.id}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#78C841] rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {attempt.testName}
                        </h4>
                        <p className="text-gray-600 text-sm">{attempt.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#78C841]">
                        {attempt.score}%
                      </p>
                      <p className="text-gray-600 text-sm">
                        {Math.round(
                          (attempt.score * attempt.totalQuestions) / 100
                        )}
                        /{attempt.totalQuestions}
                      </p>
                    </div>
                  </div>
                  <button
                    className="w-full py-2 bg-[#78C841] text-white rounded-lg hover:bg-[#6bb838] transition-colors text-sm"
                    onClick={() =>
                      (window.location.href = `/result/${attempt.id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Actions */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
          <h3 className="text-lg font-bold text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              onClick={() => (window.location.href = "/progress")}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
              </svg>
              <span className="text-white text-sm font-medium">
                View Progress
              </span>
            </button>

            <button
              className="flex flex-col items-center space-y-2 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
              onClick={() => (window.location.href = "/profile")}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" />
              </svg>
              <span className="text-white text-sm font-medium">Profile</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


