import { Navigate, Outlet } from 'react-router-dom'
import { useUserContext } from '../Context/ContextUser'

const LayoutPrivate = () => {


  const {user} = useUserContext()

 /* const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/')
    }
  }, [user])*/


  return (
    <>
      {
        user ? <Outlet/> : <Navigate to='/'/> 
      }
    </>
  )
}

export default LayoutPrivate