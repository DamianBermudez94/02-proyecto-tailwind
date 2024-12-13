import React from 'react'

const Header = () => {
  return (
    <header className='bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6'>
        <h1 className='text-Very-Dark-Blue text-2x1 font-bold mb-1'>Social Media Dashboard</h1>
        <p className='text-Dark-Grayish-Blue font-bold mb-6'>Total Followers: 23,004</p>
        <hr />
        <div className='flex justify-between mt-5'>
            <p>Dark mode</p>
            <label htmlFor="darkmode" className='border bg-Toggle-Ligth-theme w-12 h-6 rounded-full cursor-pointer p-[3px]'>
            <input id='darkmode' type="checkbox" className='peer sr-only'/>
            <div className='w-[16px] h-[16px] bg-Light-Grayish-Blue rounded-full peer-checked:translate-x-[24px] transition-all'></div>
            </label>
            
        </div>
    </header>
  )
}

export default Header