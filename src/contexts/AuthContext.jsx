import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()
const userLogin = localStorage.getItem('user')



function AuthContextProvider({children}) {

    // const [isLogin, setIsLogin] = useState(!!userLogin)
    const [user, setUser] = useState(JSON.parse(userLogin))
    

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContextProvider }
export default AuthContext