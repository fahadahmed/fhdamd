import React, { useEffect, useState, ReactNode, FunctionComponent } from 'react';

export const AppContext = React.createContext(null);

type Props = {
  children: ReactNode
}

export const AppProvider: FunctionComponent<Props> = ({children}) => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return(
    <AppContext.Provider value={{theme, toggleTheme}}>
      {children}
    </AppContext.Provider>
  )
}