import React, {createContext} from 'react';
import { IUserInfo } from '../models/IUserInfo';

interface ILogInUserContext {
    loggedInUser: IUserInfo | null,
    setLoggedInUser: React.Dispatch<React.SetStateAction<IUserInfo| null>>
}

export const LoginUserContext = createContext(<ILogInUserContext>{
    loggedInUser: null, 
    setLoggedInUser: () => {}, 
})