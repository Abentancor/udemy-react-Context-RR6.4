import { Box, Typography } from '@mui/material'
import React from 'react'
import { useUserContext } from '../Context/ContextUser'

const DashBoard = () => {


  const {user} = useUserContext()

  return (
    <>
     <Box sx={{mt:"1rem", maxWidth:"400px", textAlign:"center", mx:"auto"}}>
      <Typography variant='h4'>DashBoard</Typography>
      <h3 className=''>Bienvenido:</h3>
      <p className=''>{user.email}</p>
    </Box>
    </>
  )
}

export default DashBoard