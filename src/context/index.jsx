import React, { createContext, useState } from 'react'

export const Context = createContext();


export const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return window.sessionStorage.getItem('token_petgram');
  });

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true)
      window.sessionStorage.setItem('token_petgram', token);
    },
    removeAuth: () => {
        setIsAuth(false);
        window.sessionStorage.removeItem('token_petgram');
    }
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

