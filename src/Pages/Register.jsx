import React, { useEffect} from 'react'
import { useUserContext } from '../Context/ContextUser';
import { register } from '../Utils/firebase';

import { Formik } from 'formik'
import * as Yup from "yup"
import { Link, useNavigate } from 'react-router-dom';

import { Avatar, Box, Button, TextField, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { LoadingButton } from '@mui/lab'

const Register = () => {


    const navigate = useNavigate()
    const {user}= useUserContext()

    useEffect(()=>{
        if(user){
            navigate('/dashboard')
        }
    }, [user])


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
        <Box sx={{mt:"1rem", maxWidth:"400px", textAlign:"center", mx:"auto"}} className=''>
            <Avatar sx={{mx: "auto", bgcolor:"#111"}}>
                <LoginIcon/>
            </Avatar>
            <Typography variant='h4' sx={{}}>Register</Typography>

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
                        placeholder='email@example.com'
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
                        name="password"
                        onBlur={handleBlur}
                        id="password"
                        label="ingrese su password"
                        fullWidth
                        sx={{mb:3}}
                        error={ errors.email && touched.email && errors.email}
                        helperText={ errors.email && touched.email && errors.email}
                    />

                    <LoadingButton sx={{mb:3}} loading={isSubmitting} variant="contained" fullWidth disabled={isSubmitting} className='' type='submit'>Register</LoadingButton>
                    <Button
                    component={Link}
                    to="/login"
                    >Accede</Button>
                </Box>
            )}
            </Formik>
         </Box>
        </>
      )
}

export default Register