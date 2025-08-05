import React from 'react'
import './index.css'
import admin from '../context/Admin/Admin'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'
import About from './pages/About/About'
import Training from './pages/Contact/Contact'
import Profile from './pages/Profile/Profile'
import Saving from './pages/Saving/Saving'
import LoanService from './pages/Loan/Loan'
import Membership from './pages/Training/Training'
import Login from './components/Layout/Layout'
import Logout from './pages/Logout/Logout'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Unauthorized from './pages/Unauthorized/Unauthorized'
import Register from './pages/Register/Register'
import Linkage from './pages/Linkage/Linkage'
import { AuthProvider } from './context/AuthContext'
import Dashboard from './pages/Dashboard/Dashboard'
import RequireAuth from './components/Login/RequireAuth';


const ROLES = {
  USER: 2001,
  ADMIN: 5150,
  EDITOR: 1984
};

function App() {
  return (
    <div>
      <Route>
        <Route path="/" element={<Layout />}>
        {/* Public Routes */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/linkage' element={<Linkage />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Training />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/linkage" element={<Linkage />} />
        <Route path="/membership" element={<Membership />} />
      
 

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[2001]}/>}>
        <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[1984]}/>}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/loan" element={<LoanService />} />
        <Route element={<RequireAuth allowedRoles={[5150]}/>}>
        <Route path="/admin" element={<Admin />} />
        </Route>
        <Route path="/training" element={<Membership />} />
        <Route path="/service" element={<LoanService />} />
        </Route>
        </Route>
        {/* Catch-all route for 404 Not Found */}
        <Route>
          <Route path="*" element={<Unauthorized />} />
        </Route>
       
    </div>
  )
}

export default App