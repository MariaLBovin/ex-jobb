import { useContext, useState } from "react";
import AuthForm from "./AuthForm";
import { auth } from "../../services/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../context/LoginUserContext";
import { fetchBookShelf } from "../../utils/fetchBookShelf";


const LoginUserForm =  () => {
    const [error, setError] = useState('');
    const {setLoggedInUser, setLoading, setLoggedInUserBooks} = useContext(LoginUserContext);
    const navigate = useNavigate();

    const handleLogIn = async (email: string, password: string) => {
        
        try{
            setLoading(true)
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/min-sida');
            const user = {email: auth.currentUser?.email, uid: auth.currentUser?.uid}
            sessionStorage.setItem('user', JSON.stringify(user));
            setLoggedInUser(user);
            const books= await fetchBookShelf({user})
            setLoggedInUserBooks(books ?? null)
            
        }catch (error) {
            console.log(error);
            setError('ett fel uppstod vid inloggningen')
        }finally{
          setLoading(false)
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