import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context/ContextUser'
import { logOut } from '../Utils/firebase'

const Navbar = () => {

    const {user} = useUserContext()

    const handleLogOut= async ()=>{
        try {
            await logOut()
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='px-6 my-2 flex justify-between text-white items-baseline'>
        <Link to='/' className=' font-bold text-4xl '>Titulo</Link>
        <nav className='font-semibold flex justify-around gap-8'>
            <NavLink to='/' className='border-b-2 px-2'>Links</NavLink>
            {
                user ? (
                    <div className='flex justify-evenly gap-2'>
                        <NavLink to='/dashboard' className='border-b-2 px-2'>Dashboard</NavLink>
                        <button onClick={handleLogOut} className='border-b-2 px-2'>LogOut</button>
                    </div>
                ):(
                    <>
                    <Link to='/register' className='border-b-2 px-2'>Register</Link>
                    <NavLink to='/Login' className='border-b-2 px-2'>Login</NavLink>
                    </>
                )
            }
        </nav>
    </div>
  )
}

export default Navbar