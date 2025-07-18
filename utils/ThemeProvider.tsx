'use client'

import { createContext, useState, ReactNode, useContext } from "react";
import { useEffect } from "react";

type ThemeContextType = {
    theme: string;
    setTheme: (theme: string) => void;
};


const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    setTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState('');
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
        }
        const handleStorage = (event: StorageEvent) => {
            if (event.key === 'theme' && event.newValue) {
                setTheme(event.newValue);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

// Custom hook for easier usage
export const useTheme = () => useContext(ThemeContext);
