'use client'

import { useTheme } from "@/app/context/ThemeContext"

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<button className="outline small" onClick={toggleTheme}>
			{theme === 'light' ? '🌙' : '☀️'}
			{/* Dark */}
		</button>
	)
}