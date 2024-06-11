import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

const AuthContext = createContext()
const userLogin = localStorage.getItem('user')



function AuthContextProvider(props) {

    const [isLogin, setIsLogin] = useState(!!userLogin)
    const [user, setUser] = useState(JSON.parse(userLogin))
    

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}
  AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export { AuthContextProvider }
export default AuthContext