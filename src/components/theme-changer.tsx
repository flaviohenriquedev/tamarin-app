'use client'

import {useTheme} from 'next-themes'
import {useEffect, useState} from 'react'

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (mounted && !theme) {
            setTheme('dark')
        }
    }, [mounted, theme, setTheme])

    if (!mounted) {
        return null // Não renderiza nada até estar montado no cliente
    }

    return (
        <div className={`flex flex-col`}>
            <>The current theme is: {theme}</>
            <button onClick={() => setTheme('light')}>Light Mode</button>
            <button onClick={() => setTheme('dark')}>Dark Mode</button>
        </div>
    )
}
