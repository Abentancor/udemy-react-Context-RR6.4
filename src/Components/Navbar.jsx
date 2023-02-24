import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useUserContext } from '../Context/ContextUser'

const Navbar = () => {

    const {user, setUser} = useUserContext()

    const navigate = useNavigate()
    const handleLogin= ()=>{
        setUser({
            name:'Angel',
            email:'angel@angel.com'
        });
        navigate('/dashboard')
    }


  return (
    <div className='px-6 my-2 flex justify-between text-white items-baseline'>
        <h1 className=' font-bold text-4xl '>Titulo</h1>
        <nav className='font-semibold flex justify-around gap-8'>
            <NavLink to='/' className='border-b-2 px-2'>Links</NavLink>
            {
                user ? (
                    <div className='flex justify-evenly gap-2'>
                        <NavLink to='/dashboard' className='border-b-2 px-2'>Dashboard</NavLink>
                        <button onClick={()=>setUser(false)} className='border-b-2 px-2'>LogOut</button>
                    </div>
                ):(
                    <button onClick={handleLogin} className='border-b-2 px-2'>LogIn</button>
                )
            }
        </nav>
    </div>
  )
}

export default Navbar