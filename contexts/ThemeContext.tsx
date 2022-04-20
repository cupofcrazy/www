import { createContext, useContext, useState } from 'react';


type Props = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>
}

type ThemeOptions = 'light' | 'dark'

const ThemeContext = createContext<Props>({
  theme: 'light',
  setTheme: (color) => color
})

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ThemeOptions>('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}


export const useTheme = () => useContext(ThemeContext)