'use client'

import { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	
	const [theme, setTheme] = useState('light')

	// Persistencia del tema en localStorage
	useEffect(() => {
		const savedTheme = localStorage.getItem('theme')
		if (savedTheme) setTheme(savedTheme)
	}, [])

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme)
		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () => {
		setTheme((theme) === 'light' ? 'dark' : 'light')
	}

	return <ThemeContext.Provider value={{ theme, toggleTheme }}>
		{children}
	</ThemeContext.Provider>

}

export const useTheme = () => useContext(ThemeContext)