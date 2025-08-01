import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TestResult from './pages/TestResult'
import TestPage from './pages/TestPage'
import StudentDashboard from './pages/StudentDashboard'
import AdminDashboard from './pages/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
       <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/student" element={<StudentDashboard/>}/>
        <Route path="/test" element={<TestPage/>}/>
        {/* <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/> */}
        <Route path="/result" element={<TestResult/>}/>



      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
