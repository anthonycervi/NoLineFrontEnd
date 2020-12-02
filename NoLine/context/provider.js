import React, {createContext, useState, useContext}  from 'react'


const AppContext = createContext({user:null, setUser:null})

const AppProvider = ({children}) => {

const [user, setUser] = useState({})
return <AppContext.Provider value={{user,setUser}}>{children}</AppContext.Provider>
}
export const useInfo = () => {
  return useContext(AppContext)
}
export default AppProvider