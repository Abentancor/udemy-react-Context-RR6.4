import { Button } from "@mui/material"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../Utils/firebase"

const LoginGoogle = () => {

    const loginGoogle = async()=>{
        try {
            const provider = new GoogleAuthProvider()
            const {user} = await signInWithPopup(auth, provider)
            console.log(user)
        } catch (error) {
            
        }
    }


  return (
    <>
    <Button sx={{bgcolor: "#FCBF0E"}} onClick={loginGoogle} variant="contained">Google access</Button>

    </>
  )
}

export default LoginGoogle