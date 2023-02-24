import React from 'react'
import { useUserContext } from '../Context/ContextUser'

const DashBoard = () => {


  const {user} = useUserContext()

  return (
    <>
    <h1 className='text-3xl mb-4 text-center'>DashBoard</h1>

    <div className=''>
      <h3 className='text-2xl mb-2'>Bienvenido:</h3>
      <p className='text-xl mb-2' >"{user.name}"</p>
      <p className='mb-2'>{user.email}</p>
    </div>
    </>
  )
}

export default DashBoard