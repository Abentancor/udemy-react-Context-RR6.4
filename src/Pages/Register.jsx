import React, { useEffect, useState } from 'react'
import { useUserContext } from '../Context/ContextUser';
import { register } from '../Utils/firebase';

import { Formik } from 'formik'
import * as Yup from "yup"
import { useNavigate } from 'react-router-dom';

const Register = () => {


    const navigate = useNavigate()
    const {user}= useUserContext 

    useEffect(()=>{
        if(user){
            navigate('/dashboard')
        }
    }, [])


    const onSubmit = async ({email, password}, {setsubmitting, setErrors, resetForm})=>{
        try {
            const credentialUSer =  await register({ email, password })
            console.log(credentialUSer)
            resetForm()
        } catch (error) {
            
        }finally{
            setsubmitting(false)
        }
    }
    const validationSchema = Yup.object().shape({
        email:Yup.string().email("email no valido").required("Email requerido"),
        password:Yup.string().trim().min(6, "minimo 6 caracteres").required("Password requerido")
    })


    return (
        <>
        <div className='w-1/2 m-auto gap-4 flex flex-col my-36'>
            <h1 className='text-xl text-center'>Register</h1>

            <Formik
             initialValues={{email:"", password:""}}
             onSubmit ={onSubmit}
             validationSchema={validationSchema}
             >
            {({values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting})=>(
                <form className='m-auto gap-4 flex flex-col' onSubmit={handleSubmit}>
                    <input 
                        className='p-2 rounded-md text-black'  
                        value={values.email} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Ingrese su Email'
                        name="email"
                        onBlur={handleBlur}
                    />
                    {
                        errors.email && touched.email && errors.email
                    }
                    <input 
                        className='p-2 rounded-md text-black'  
                        value={values.password} 
                        onChange={handleChange} 
                        type="password" 
                        placeholder='Ingrese su Password'
                        name="password"
                        onBlur={handleBlur}
                    />
                    {
                        errors.password && touched.password && errors.password
                    }
                    <button disabled={isSubmitting} className='border-b-2 px-2 m-auto' type='submit'>Register</button>
                </form>
            )}
            </Formik>
         </div>
        </>
      )
}

export default Register