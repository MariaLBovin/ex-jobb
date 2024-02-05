import { useState } from "react";
import AuthForm from "./AuthForm"
import { auth } from "../../services/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const LoginUserForm =  () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogIn = async (email: string, password: string) => {
        
        try{
            await signInWithEmailAndPassword(auth, email, password);
            console.log('inloggad');
            navigate('/min-sida')
            
        }catch (error) {
            console.log(error);
            setError('ett fel uppstod vid inloggningen')
        }
    }

  return (
    <>
    <h2 className='login-header'>Logga in</h2>
    <AuthForm handleAction={handleLogIn} error={error}></AuthForm>
    </>
  )
}

export default LoginUserForm