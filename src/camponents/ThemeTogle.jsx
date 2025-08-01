import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { cn } from '../lib/utlis';

const ThemeTogle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      const getTheme = localStorage.getItem('theme');
      if(getTheme === 'dark')
      {
        document.documentElement.classList.add('dark')
        setIsDark(true)
      }else{
        localStorage.setItem('theme','light')
        setIsDark(false)
      }
        
    }, [])
    

    const toggleTheme = () =>{
        if(isDark)
        {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme','light');
            setIsDark(false);
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
            setIsDark(true);
        }
        
    }
  return (
    <button onClick={toggleTheme} 
    className={cn(
        'fixed max-sm:hidden top-3 right-5 z-50 p-2 roun-full transition-colors duration-300',
        "focus:outline-hidden"
        )}>
        {isDark ? 
        <Sun className='h-6 w-6 text-yellow-400'/> 
        : <Moon className='h-6 w-6 text-blue-900' />}
    </button>
  )
}

export default ThemeTogle
