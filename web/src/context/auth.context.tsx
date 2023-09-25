import { PropsWithChildren, createContext, useState } from "react"

const AuthContext = createContext({})

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [auth, setAuth] = useState({})

  return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>
}
