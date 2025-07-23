"use client";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
//   const { data: user, loading } = useUser();
//   const { isAuthenticated, isReady } = useAuth();

  // if (!isReady) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#78C841] to-[#B4E50D]">
  //       <div className="text-white text-xl">Loading...</div>
  //     </div>
  //   );
  // }

//   if (isAuthenticated && user) {
//     // Redirect based on user role
//     if (user.user_role === "admin") {
//       window.location.href = "/admin-dashboard";
//     } else {
//       window.location.href = "/student-dashboard";
//     }
//     return null;
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A400C] to-[#0A400C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#FF9B2F] rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#FB4141] rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <header className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z" />
              </svg>
              <h1 className="text-2xl font-bold text-white">EduTest</h1>
            </div>
            <div className="flex space-x-2">
              <Link
                to="/admin"
                className="px-3 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/30 text-sm"
              >
                Sign In
              </Link>
              <Link
                to="/student"
                className="px-3 py-2 bg-[#FF9B2F] text-white rounded-lg hover:bg-[#e8891a] transition-colors font-medium text-sm"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 px-4 py-6">
          {/* Hero Section */}
          <div className="text-center mb-8">
            {/* Hero Image */}
            <div className="mb-6 flex justify-center">
              <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <svg
                  className="w-16 h-16 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                </svg>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-4 leading-tight">
              Master Your
              <span className="block text-[#FF9B2F]">Knowledge</span>
            </h2>

            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Take tests, track progress, and excel in your studies with our
              comprehensive testing platform
            </p>

            <div className="space-y-3">
              <a
                href="/account/signup"
                className="w-full block px-6 py-4 bg-[#FF9B2F] text-white rounded-xl hover:bg-[#e8891a] transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                  <span>Get Started</span>
                </div>
              </a>
              <a
                href="/account/signin"
                className="w-full block px-6 py-4 bg-white/20 text-white rounded-xl hover:bg-white/30 transition-all duration-300 font-semibold text-lg backdrop-blur-sm border border-white/30"
              >
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 7L9.6 8.4l2.6 2.6H2v2h10.2l-2.6 2.6L11 17l5-5-5-5z" />
                  </svg>
                  <span>Sign In</span>
                </div>
              </a>
            </div>
          </div>

          {/* Professional Study Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-full h-48 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-24 h-24 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center mb-2">
                Interactive Learning
              </h3>
              <p className="text-white/80 text-sm text-center">
                Engage with dynamic content and real-time feedback
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF9B2F] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Timed Tests
                  </h3>
                  <p className="text-white/80 text-sm">
                    Take tests with proper time management and real exam
                    conditions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FB4141] rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Track Progress
                  </h3>
                  <p className="text-white/80 text-sm">
                    Monitor your performance and see detailed results and
                    analytics
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#78C841]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Instant Results
                  </h3>
                  <p className="text-white/80 text-sm">
                    Get immediate feedback and detailed explanations for better
                    learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Study Statistics */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-8">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              Why Choose EduTest?
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#FF9B2F]">10K+</div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#FB4141]">500+</div>
                <div className="text-white/80 text-sm">Tests</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Study Image 2 */}
          <div className="mb-8 flex justify-center">
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="w-full h-40 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-20 h-20 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM12 17.5L8.5 15 12 12.5 15.5 15 12 17.5z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-center mb-2">
                Smart Analytics
              </h3>
              <p className="text-white/80 text-sm text-center">
                Track your progress with detailed performance insights
              </p>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center">
          <p className="text-white/70 text-sm">
            © 2025 EduTest. Empowering students worldwide.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;