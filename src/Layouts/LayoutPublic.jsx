import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const LayoutPublic = () => {
  return (
    <>
    <div className='h-screen bg-gradient-to-b from-pink-700 via-rose-500 to-yellow-500 absolute w-full'>
    <header>
      <Navbar/>
    </header>
    <main className=' w-4/5 m-auto mt-10 text-slate-100 font-semibold'>
      <Outlet/>
    </main>
    <Footer/>
    </div>
    </>
  )
}

export default LayoutPublic