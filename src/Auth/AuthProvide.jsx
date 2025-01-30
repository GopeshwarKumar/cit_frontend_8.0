import React, { createContext, useState } from 'react';

// Create the Authentication Context
export const AuthenticationContext = createContext();

function AuthProvide({ children }) {

  const [username, setusername] = useState()
  const [useremail, setuseremail] = useState()
  return (
    <AuthenticationContext.Provider value={{useremail, setuseremail,username, setusername}}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export default AuthProvide;
