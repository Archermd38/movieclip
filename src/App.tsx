import { Routes, Route } from 'react-router'
import './App.css'
import RootLayout from './layouts/RootLayout'
import AdminLayout from './layouts/AdminLayout'
import AuthLayout from './layouts/AuthLayout'
import PublicLayout from './layouts/PublicLayout'

import Dashboard from './pages/admin/Dashboard'
import Profile from './pages/admin/Profile'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import HomePage from './pages/public/HomePage'
import NotFoundPage from './pages/public/NotFoundPage'

function App() {
  

  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="auth" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<PublicLayout />}>
            <Route path="home" element={<HomePage />} />
            <Route element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
