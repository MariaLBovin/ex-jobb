import { useContext, useState } from "react";
import AuthForm from "./AuthForm"
import { auth } from "../../services/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../context/LoginUserContext";


const LoginUserForm =  () => {
    const [error, setError] = useState('');
    const {setLoggedInUser} = useContext(LoginUserContext)
    const navigate = useNavigate();

    const handleLogIn = async (email: string, password: string) => {
        
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log('inloggad', auth.currentUser);
            navigate('/min-sida')
            const user = {email: auth.currentUser?.email, uid: auth.currentUser?.uid}
        
            setLoggedInUser(user)
            
        }catch (error) {
            console.log(error);
            setError('ett fel uppstod vid inloggningen')
        }
    }

  return (
    <>
    <h2 className='login-header'>Logga in</h2>
    <AuthForm handleAction={handleLogIn} error={error} isLoginPage={true}></AuthForm>
    </>
  )
}

export default LoginUserForm