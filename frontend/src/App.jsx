// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import React from 'react'
import './index.css'
// import Button  from './components/elements/button'
// import InputForm from './components/elements/input/Index'
import FormLogin from './components/fragments/FormLogin'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'


//reuse componen function
// function BTN (){
//   return (
//    <button className='h-10 px-6 font-semibold rounded-md bg-black text-white'type='submit'>Buy now</button>
//   )
// }

// function BTNred(){
//   return(
//     <button className='h-10 px-6 font-semibold rounded-md bg-red-600 text-white'type='submit'>Buy now</button>
//   )
// }


function App() {
return(
    
  //reuse componen concepts
    // <div className='flex justify-center items-center'>
    //   <h1>beli sekarang</h1>
    // <div className='flex justify-center min-h-screen items-center'>
    // <BTN></BTN>
    // <BTN></BTN>
    // <BTNred></BTNred>
    // </div>
    // </div>

  //reuse props concepts 
  // <div className="flex justify-center min-h-screen items-center">
  //   <div className="flex gap-x-3">
  //     <Button variant="bg-red-600" text="logout"></Button>
  //     <Button variant="bg-black" text="login"></Button>
  //     <Button variant="bg-gray-600" text="register"></Button>
  //   </div>

  // </div>



  <div className="flex justify-center min-h-screen items-center">
  {/* <LoginPage></LoginPage> */}
  {/* <RegisterPage></RegisterPage> */}

  </div>
    
)
    


}

export default App
