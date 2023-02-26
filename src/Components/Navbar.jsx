import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
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
    <Box sx={{ display: 'flex', justifyContent: 'space-around' }}  className=''>
        <AppBar position="static">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Button color="inherit" sx={{fontSize: '30px'}} component={Link} to='/' className='  '>Home</Button >
            {
                user ? (
                    <Box sx={{}} className=''>
                        <Button color="inherit" component={NavLink} to='/dashboard' className=''>Dashboard</Button>
                        <Button color="inherit" onClick={handleLogOut} className=''>LogOut</Button>
                    </Box>
                ):(
                    <Box>
                    <Button color="inherit" component={NavLink} to='/register' className=''>Register</Button>
                    <Button color="inherit" component={NavLink} to='/login' className=''>Login</Button>
                    </Box>
                )
            }
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar