'use client'

import { createContext, ReactNode, useContext } from "react"
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { ThemeType } from '@/types'

interface ThemeContextType {
  theme: ThemeType | string
  setTheme: (theme: ThemeType | string) => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: '',
  setTheme: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
  defaultTheme?: ThemeType | string
}

export const ThemeProvider = ({ children, defaultTheme = 'dark' }: ThemeProviderProps) => {
  const [theme, setTheme] = useLocalStorage<ThemeType | string>('theme', defaultTheme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
