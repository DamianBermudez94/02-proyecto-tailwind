import React from 'react'
import { useEffect, useState } from 'react'

const Header = () => {

  const [darkMode, setDarkmode] = useState(false);

  const handleClick = () => {
    setDarkmode(!darkMode)
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        'dark'
      );
      console.log(darkMode);
      
    }
    else {
      document.documentElement.classList.remove(
        'dark'
      );
    }
  }, [darkMode])
  return (
    <header className='bg-Very-Pale-Blue dark:bg-Very-Dark-Blue-superior w-full h-[235px] rounded-b-[20px] p-6'>
      <h1 className='text-Very-Dark-Blue dark:text-Light-Grayish-Blue text-responsive font-bold mb-1'>Social Media Dashboard</h1>
      <p className='text-Dark-Grayish-Blue dark:text-Desaturated-Blue text-[14px] font-bold mb-6'>Total Followers: 23,004</p>
      <hr className='text-Very-Dark-Blue borde' />
      <div className='flex justify-between mt-5 overflow-hidden'>
        <p className='text-Dark-Grayish-Blue font-bold dark:text-Desaturated-Blue'>Dark mode</p>
        <label htmlFor="darkmode" className='border relative bg-Desaturated-Blue overflow-hidden w-12 h-6 rounded-full cursor-pointer p-[3px]'>
          <input onClick={handleClick} id='darkmode' type="checkbox" className='peer sr-only' />
          <div className='w-full h-full peer-checked:bg-Toggle-Gradient absolute top-0 left-0 overflow-hidden'>
          </div>
          <div className='w-[16px] h-[16px] bg-Light-Grayish-Blue   dark:bg-Very-Dark-Blue rounded-full peer-checked:translate-x-[24px] transition-all'></div>
        </label>

      </div>
    </header>
  )
}

export default Header