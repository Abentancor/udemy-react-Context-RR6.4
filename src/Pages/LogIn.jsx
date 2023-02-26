import React, { useEffect } from 'react'

import { Formik } from 'formik'
import * as Yup from "yup"

import { useNavigate, Link } from 'react-router-dom'

import { useUserContext } from '../Context/ContextUser'

import { login } from '../Utils/firebase'
import LoginGoogle from '../Components/LoginGoogle'

import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab'

const LogIn = () => {


    const navigate = useNavigate()
    const {user}= useUserContext()

    useEffect(()=>{
        if(user){
            navigate('/dashboard')
        }
    }, [])
    
    const onSubmit = async ({email, password}, {setsubmitting, setErrors, resetForm})=>{
        console.log({email, password})
        try {
          const credentialUSer =  await login({ email, password });
          console.log(credentialUSer)
          resetForm()
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            if(error.code === "auth/user-not-found"){
              return  setErrors({email: "usuario no registrado"})
            }
            if(error.code === "auth/wrong-password"){
                return setErrors({password:"password incorrecto"})
            }
        }finally{
            setsubmitting(false)
        }
    }

    const validationSchema = Yup.object().shape({
        email:Yup.string().email("email no valido").required("Email requerido"),
        password:Yup.string().trim().min(6, "minimo 6 caracteres").required("Password requerido")
    })


  return (
    <Box sx={{mt:"1rem", maxWidth:"400px", textAlign:"center", mx:"auto"}}>
            <Avatar sx={{mx: "auto", bgcolor:"#111"}}>
                <LoginIcon/>
            </Avatar>
        <Typography variant='h4'>Login</Typography>
        <Formik
        initialValues={{email:"", password:""}}
        onSubmit ={onSubmit}
        validationSchema={validationSchema}
        >
            {({values, handleSubmit, handleChange, errors, touched, handleBlur, isSubmitting})=>(
                <Box sx={{mt:2}} component="form" className='' onSubmit={handleSubmit}>

                    <TextField
                        className='' 
                        value={values.email} 
                        onChange={handleChange} 
                        type="text" 
                        placeholder='Email@example.com'
                        name="email"
                        onBlur={handleBlur}
                        id="email"
                        label="ingrese su email"
                        fullWidth
                        sx={{mb:3}}
                        error={ errors.email && touched.email && errors.email}
                        helperText={ errors.email && touched.email && errors.email}
                    />

                    <TextField 
                        className='' 
                        value={values.password} 
                        onChange={handleChange} 
                        type="password" 
                        placeholder='Ingrese su Password' 
                        name='password'
                        onBlur={handleBlur}
                        id="password"
                        label="ingrese su password"
                        fullWidth
                        sx={{mb:3}}
                        error={ errors.email && touched.email && errors.email}
                        helperText={ errors.email && touched.email && errors.email}
                    />
                    <LoadingButton disabled={isSubmitting} sx={{mb:3}} loading={isSubmitting} variant="contained" fullWidth className='' type='submit'>LogIn</LoadingButton>
                    <LoginGoogle/>
                    <Button
                    component={Link}
                    to="/register"
                    >Registrate</Button>
                </Box>
            )}            
        </Formik>
    </Box>
  )
}

export default LogIn