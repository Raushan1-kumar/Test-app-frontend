import { useState } from "react";

export default function AdminDashboard() {
//   const { data: user, loading } = useUser();
//   const { signOut } = useAuth();

  const [selectedTab, setSelectedTab] = useState("overview");

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

  const mockStats = {
    totalTests: 24,
    totalStudents: 156,
    totalQuestions: 480,
    activeTests: 8,
  };

  const mockTests = [
    {
      id: 1,
      title: "Mathematics Final Exam",
      subject: "Mathematics",
      questions: 30,
      duration: 90,
      students: 45,
      status: "active",
      created: "2025-01-20",
    },
    {
      id: 2,
      title: "Science Quiz Chapter 5",
      subject: "Science",
      questions: 20,
      duration: 45,
      students: 32,
      status: "draft",
      created: "2025-01-19",
    },
    {
      id: 3,
      title: "English Grammar Test",
      subject: "English",
      questions: 25,
      duration: 60,
      students: 28,
      status: "completed",
      created: "2025-01-18",
    },
  ];

  const mockStudents = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice@example.com",
      testsCompleted: 12,
      averageScore: 87,
      lastActive: "2025-01-22",
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob@example.com",
      testsCompleted: 8,
      averageScore: 92,
      lastActive: "2025-01-21",
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      testsCompleted: 15,
      averageScore: 78,
      lastActive: "2025-01-22",
    },
  ];

  const mockRecentActivity = [
    {
      id: 1,
      type: "test_completed",
      student: "Alice Johnson",
      test: "Mathematics Quiz",
      score: 85,
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "test_created",
      admin: "You",
      test: "Science Assessment",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "student_registered",
      student: "David Wilson",
      time: "6 hours ago",
    },
  ];

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
              <h1 className="text-xl font-bold text-white">Admin Panel</h1>
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
            Admin Dashboard 👨‍💼
          </h2>
          <p className="text-white/80">Manage tests and monitor students</p>
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
                  {mockStats.totalTests}
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
                  <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v4H4v-4z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {mockStats.totalStudents}
                </p>
                <p className="text-white/70 text-xs">Students</p>
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
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {mockStats.totalQuestions}
                </p>
                <p className="text-white/70 text-xs">Questions</p>
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
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div>
                <p className="text-xl font-bold text-white">
                  {mockStats.activeTests}
                </p>
                <p className="text-white/70 text-xs">Active Tests</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 mb-6 border border-white/20 overflow-x-auto">
          <button
            onClick={() => setSelectedTab("overview")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "overview"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setSelectedTab("tests")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "tests"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Tests
          </button>
          <button
            onClick={() => setSelectedTab("students")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "students"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Students
          </button>
          <button
            onClick={() => setSelectedTab("questions")}
            className={`flex-shrink-0 py-3 px-4 rounded-lg font-medium transition-all text-sm ${
              selectedTab === "questions"
                ? "bg-white text-[#78C841] shadow-lg"
                : "text-white hover:bg-white/10"
            }`}
          >
            Questions
          </button>
        </div>

        {/* Content Area */}
        {selectedTab === "overview" && (
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  className="flex flex-col items-center space-y-2 p-4 bg-[#78C841] text-white rounded-xl hover:bg-[#6bb838] transition-colors"
                  onClick={() => (window.location.href = "/create-test")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                  <span className="text-sm font-medium">Create Test</span>
                </button>

                <button
                  className="flex flex-col items-center space-y-2 p-4 bg-[#FF9B2F] text-white rounded-xl hover:bg-[#e8891a] transition-colors"
                  onClick={() => (window.location.href = "/add-question")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
                  <span className="text-sm font-medium">Add Question</span>
                </button>

                <button
                  className="flex flex-col items-center space-y-2 p-4 bg-[#FB4141] text-white rounded-xl hover:bg-[#e63939] transition-colors"
                  onClick={() => (window.location.href = "/reports")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                  <span className="text-sm font-medium">View Reports</span>
                </button>

                <button
                  className="flex flex-col items-center space-y-2 p-4 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition-colors"
                  onClick={() => (window.location.href = "/settings")}
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
                  </svg>
                  <span className="text-sm font-medium">Settings</span>
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-3">
                {mockRecentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-[#78C841] rounded-lg flex items-center justify-center">
                      {activity.type === "test_completed" && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      )}
                      {activity.type === "test_created" && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                      )}
                      {activity.type === "student_registered" && (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v4H4v-4z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      {activity.type === "test_completed" && (
                        <p className="text-gray-800 text-sm">
                          <span className="font-medium">
                            {activity.student}
                          </span>{" "}
                          completed{" "}
                          <span className="font-medium">{activity.test}</span>{" "}
                          with {activity.score}% score
                        </p>
                      )}
                      {activity.type === "test_created" && (
                        <p className="text-gray-800 text-sm">
                          <span className="font-medium">{activity.admin}</span>{" "}
                          created{" "}
                          <span className="font-medium">{activity.test}</span>
                        </p>
                      )}
                      {activity.type === "student_registered" && (
                        <p className="text-gray-800 text-sm">
                          <span className="font-medium">
                            {activity.student}
                          </span>{" "}
                          registered as a new student
                        </p>
                      )}
                      <p className="text-gray-500 text-xs">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === "tests" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Test Management</h3>
              <button
                className="px-4 py-2 bg-[#FF9B2F] text-white rounded-lg hover:bg-[#e8891a] transition-colors font-medium text-sm"
                onClick={() => (window.location.href = "/create-test")}
              >
                Create Test
              </button>
            </div>

            <div className="space-y-3">
              {mockTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-[#78C841] rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-white"
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
                        test.status === "active"
                          ? "bg-green-100 text-green-800"
                          : test.status === "draft"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {test.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm mb-3">
                    <div className="flex items-center space-x-4">
                      <span>{test.questions} questions</span>
                      <span>{test.duration}min</span>
                      <span>{test.students} students</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      className="flex-1 py-2 bg-[#78C841] text-white rounded-lg hover:bg-[#6bb838] transition-colors text-sm"
                      onClick={() =>
                        (window.location.href = `/edit-test/${test.id}`)
                      }
                    >
                      Edit
                    </button>
                    <button className="flex-1 py-2 bg-[#FB4141] text-white rounded-lg hover:bg-[#e63939] transition-colors text-sm">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "students" && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Student Analytics</h3>

            <div className="space-y-3">
              {mockStudents.map((student) => (
                <div
                  key={student.id}
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
                          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zM4 18v-4h3v4h2v-7.5c0-.83.67-1.5 1.5-1.5S12 9.67 12 10.5V11h2.5c.83 0 1.5.67 1.5 1.5V18h2v4H4v-4z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">
                          {student.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{student.email}</p>
                        <p className="text-gray-500 text-xs">
                          Last active: {student.lastActive}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#78C841]">
                        {student.testsCompleted}
                      </p>
                      <p className="text-gray-600 text-xs">Tests</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-[#FF9B2F]">
                        {student.averageScore}%
                      </p>
                      <p className="text-gray-600 text-xs">Avg Score</p>
                    </div>
                  </div>

                  <button
                    className="w-full py-2 bg-[#78C841] text-white rounded-lg hover:bg-[#6bb838] transition-colors text-sm"
                    onClick={() =>
                      (window.location.href = `/student/${student.id}`)
                    }
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === "questions" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Question Bank</h3>
              <button
                className="px-4 py-2 bg-[#FF9B2F] text-white rounded-lg hover:bg-[#e8891a] transition-colors font-medium text-sm"
                onClick={() => (window.location.href = "/add-question")}
              >
                Add Question
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4">
                Create Question
              </h4>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Question Text
                  </label>
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C841] focus:border-transparent text-sm"
                    rows="3"
                    placeholder="Enter your question here..."
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C841] focus:border-transparent text-sm">
                      <option value="">Select Subject</option>
                      <option value="math">Mathematics</option>
                      <option value="science">Science</option>
                      <option value="english">English</option>
                      <option value="history">History</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C841] focus:border-transparent text-sm">
                      <option value="">Select Difficulty</option>
                      <option value="easy">Easy</option>
                      <option value="medium">Medium</option>
                      <option value="hard">Hard</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Answer Options
                  </label>
                  {[1, 2, 3, 4].map((option) => (
                    <div key={option} className="flex items-center space-x-3">
                      <input
                        type="radio"
                        name="correct_answer"
                        value={option}
                        className="w-4 h-4 text-[#78C841] focus:ring-[#78C841]"
                      />
                      <input
                        type="text"
                        placeholder={`Option ${option}`}
                        className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#78C841] focus:border-transparent text-sm"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-[#78C841] text-white rounded-lg hover:bg-[#6bb838] transition-colors font-medium text-sm"
                  >
                    Save Question
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


