import React, { createContext, useState } from 'react';

// Create the Authentication Context
export const AuthenticationContext = createContext();

function AuthProvide({ children }) {

  const [UserName, setUserName] = useState()
  const [UserEmail, setUserEmail] = useState()
  return (
    <AuthenticationContext.Provider value={{UserEmail, setUserName,UserName, setUserEmail}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthProvide;