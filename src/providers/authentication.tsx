import React, { createContext, useState, useCallback } from 'react';
import firebase from '../config/firebase'

interface IAuthenticationContext {
    user: firebase.auth.UserCredential | null,
    token: string,
    authenticate?: () => void
}
export const AuthenticationContext = createContext<IAuthenticationContext>({
    user: null,
    token: ''
  })

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets')

export const AuthenticationProvider : React.FC = ({ children }) => {
    const [user, setUser] = useState(null)

    const authenticate = useCallback(
        () => {
            if (!user) 
            firebase.auth()
                .signInWithPopup(provider)
                .then(setUser);
        },
        [user],
    )

    return (<AuthenticationContext.Provider value={{
        user, token: user?.credential.accessToken, authenticate
    }} >
        { children }
    </AuthenticationContext.Provider>)
}