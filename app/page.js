"use client"
import './globals.css'
import Image from 'next/image'
import { useState } from 'react';


const colors = ['green', 'red', 'blue', 'yellow', 'purple', 'emerald'];
const modes = ['light', 'dark'];


export default function Home() {
  
  const [color, setColor] = useState(colors[0]);
  const [mode, setMode] = useState(modes[0]);

  const switchTheme = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <div className={['font-mono bg-primaryBg h-screen flex flex-col justify-center', `theme-${color}`, `theme-${mode}` ].filter(Boolean).join(' ')}>
    <div className='mx-auto bg-neutralBg text-onNeutralBg border-8 border-onNeutralBg p-5 '>
      <h1 className='text-3xl font-bold text-center'>Tailwind Themes</h1>
      <div className="flex justify-between space-x-8 mt-2">
        {colors.map((color) => (
          <button
            key={color}
            className={`px-4 py-2 rounded-md text-onPrimary`}
            style={{ backgroundColor: color !== 'emerald' ? color : 'hsl(159, 100%, 30%)' }}
            onClick={() => setColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <div className='mt-10'>
          <p>{mode === 'light' ? 'Enable dark mode:' : 'Enable light mode:' }</p>
          <button className='bg-onNeutralBg h-6 w-14 rounded-full relative inline-flex items-center' onClick={switchTheme}>
            <span className={`h-4 w-4 ml-0.5  rounded-full inline-block transform transition ${mode === 'light' ? 'translate-x-0.5 bg-neutralBg' : 'translate-x-9 bg-black'}`}/>
          </button>
      </div>
    </div>
    </div>
  )
}
