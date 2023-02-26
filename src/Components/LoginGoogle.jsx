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
    <button className='border-b-2 px-2 m-auto' onClick={loginGoogle}>Google access</button>
    </>
  )
}

export default LoginGoogle