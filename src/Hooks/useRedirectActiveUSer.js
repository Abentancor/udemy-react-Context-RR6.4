import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useUserContext } from "../Context/ContextUser"

export const useRedirectActiveUSer = (user, path) => {

    const navigate = useNavigate()
    const {user} = useUserContext()

    useEffect(()=>{
        if(user){
            navigate(path)
        }
    }, [])
}