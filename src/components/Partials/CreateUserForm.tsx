import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/Firebase";
import AuthForm from "./AuthForm";
import { useState } from "react";


  const CreateUserForm = () => {
    const [error, setError] = useState('');

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
      } catch (error) {
        console.error('Fel vid registrering:');
        setError('Ett fel uppstod vid registrering. Försök igen senare.');
      }
    };

    return (
      <>
        <section className="login-container">
        <h2 className='login-header'>Skapa användare</h2>
        <AuthForm handleAction={handleSignUp} error={error} isLoginPage={false}></AuthForm>
        </section>
      </>
    );
  };

  export default CreateUserForm;
