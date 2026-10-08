import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navigation from './AppRouter'
import AuthProvider from './context/Authcontext'
import UserProvider from './context/Usercontext'
//192.168.76.5:81/contact/GetAll
//http://192.168.76.5:81/swagger/index.html
//user name : developer@springandriver.com
//password : Dev@321
function App() {
  

  return (
    <>
    <AuthProvider>
      <UserProvider>
        <Navigation/>
      </UserProvider>
    </AuthProvider>
    </>
  )
}

export default App
