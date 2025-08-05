import React from 'react'
import './index.css'
import Admin from './context/Admin.js'
import Home from './pages/Home/Home.js'
import Service from './pages/Services/Service.js'
import About from './pages/About/About.js'
import Training from './pages/Training/Training.js'
import Profile from './pages/Profile/Profile.js'
import Saving from './pages/Saving/Saving.js'
import LoanService from './pages/LoanService/Loan.js'
import Membership from './pages/Training/Training.js'
import Login from './components/Login/Login.js'
import Logout from './pages/Logout/Logout.js'
import { Route } from 'react-router-dom'
import Layout from './components/Layout/Layout.js'

import Register from './components/Login/Register.js'
import Linkage from './pages/Linkage.js'
import UnAuthorized from './components/UnAuthorized/UnAuthorized.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import RequireAuth from './components/Login/RequireAuth.js';


const ROLES = {
  'USER': 2001,
  'ADMIN': 5150,
  'EDITOR': 1984
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
        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/training" element={<Training />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/linkage" element={<Linkage />} />
        <Route path="/membership" element={<Membership />} />
      
 

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.USER]}/>}>
        <Route path="/home" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR]}/>}>
        <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.EDITOR, ROLES.ADMIN]}/>}>
        <Route path="/saving" element={<Saving />} />
        <Route path="/loan" element={<LoanService />} />
         <Route path="/training" element={<Membership />} />

        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]}/>}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Route>
        </Route>
        {/* Catch-all route for 404 Not Found */}
        <Route>
          <Route path="*" element={<UnAuthorized />} />
        </Route>
       
    </div>
  )
}

export default App