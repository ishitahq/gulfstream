import { useTheme as useNextTheme } from 'next-themes'

export type Theme = 'light' | 'dark'

// Get theme from localStorage or system preference
export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light'
  
  const savedTheme = localStorage.getItem('theme') as Theme
  if (savedTheme) return savedTheme

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

// Set theme and save to localStorage
export const setTheme = (theme: Theme) => {
  if (typeof window === 'undefined') return

  localStorage.setItem('theme', theme)
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
    document.documentElement.classList.remove('light')
  } else {
    document.documentElement.classList.add('light')
    document.documentElement.classList.remove('dark')
  }
}

// Custom hook for theme management
export const useTheme = () => {
  const { theme, setTheme, resolvedTheme } = useNextTheme()

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  return { 
    theme: resolvedTheme as Theme, 
    toggleTheme,
    setTheme: (newTheme: Theme) => setTheme(newTheme)
  }
}

// Initialize theme
export const initTheme = () => {
  // Theme initialization is now handled by next-themes
  return
}