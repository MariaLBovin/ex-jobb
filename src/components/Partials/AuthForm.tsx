import { useState } from "react";

interface IAuthformProps {
  handleAction: (email: string, password: string) => void;
  error: string;
  isLoginPage: boolean
}

const AuthForm = ({handleAction, error, isLoginPage} :IAuthformProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <>
    <form className='login-form'>
          <label className="login-form-label">
            E-post:
            <input className="login-form-input" type="email" value={email} placeholder='Ange din emailadress'onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label className="login-form-label">
            Lösenord:
            <input className="login-form-input"  type="password" value={password} placeholder="Minst sex tecken" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="button" onClick={() => handleAction(email, password)} className='login-form-button'>
            {isLoginPage ? 'Logga in' : 'Skapa användare'}
          </button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    </>
  )
}

export default AuthForm