import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase";
import AuthForm from "./AuthForm";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginUserContext } from "../../context/LoginUserContext";
import { FirebaseError } from "firebase/app";


  const CreateUserForm = () => {
    const [error, setError] = useState('');
    const {setLoggedInUser} = useContext(LoginUserContext);
    const navigate = useNavigate()

    const isValidEmail = (email: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const isValidPassword = (password : string) => {
      return password.length >= 6 && /[A-Z]/.test(password);
    };

    const handleSignUp = async (email: string, password: string) => {
      try {
        if (!isValidEmail(email)) {
          setError('Ogiltig e-postadress');
          return;
        }

        if (!isValidPassword(password)) {
          setError('Lösenordet måste vara minst 6 tecken långt och innehålla minst en stor bokstav');
          return;
        }

        await createUserWithEmailAndPassword(auth, email, password);
        console.log('Användare skapad');

        await signInWithEmailAndPassword(auth, email, password);
        console.log('Användare inloggad');

        const user = {email: auth.currentUser?.email, uid: auth.currentUser?.uid}
        sessionStorage.setItem('user', JSON.stringify(user));
        setLoggedInUser(user);

        navigate('/min-sida');
      } catch (error:unknown) {
        console.error('Fel vid registrering:');
        if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
          setError('Användarkontot finns redan. Logga in istället.');
        } else {
          setError('Ett fel uppstod vid registrering. Försök igen senare.');
        }
        
      }
    };

    return (
      <>
      <section className='login-container'>
      <div className="login-wrapper">
        <h2 className='login-header'>Skapa användare</h2>
        <AuthForm handleAction={handleSignUp} error={error} isLoginPage={false}></AuthForm>
        </div>
        </section>
      </>
    );
  };

  export default CreateUserForm;
