import React, {createContext} from 'react';
import { IUserInfo } from '../models/IUserInfo';
import { IBookItem } from '../models/IBookItem';

export interface ILogInUserContext {
    loggedInUser: IUserInfo | null,
    setLoggedInUser: React.Dispatch<React.SetStateAction<IUserInfo| null>>
    loggedInUserBooks: IBookItem[] | null,
    setLoggedInUserBooks: React.Dispatch<React.SetStateAction<IBookItem[]| null>>
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoginUserContext = createContext(<ILogInUserContext>{
    loggedInUser: null, 
    setLoggedInUser: () => {},
    loggedInUserBooks: null,
    setLoggedInUserBooks: () => {},
    loading: true,
    setLoading: () => {}
})