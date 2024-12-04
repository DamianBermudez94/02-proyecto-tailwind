import React from 'react'

const Header = () => {
  return (
    <header className='bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6'>
        <h1 className='text-Very-Dark-Blue text-2x1 font-bold mb-1'>Social Media Dashboard</h1>
        <p className='text-Dark-Grayish-Blue font-bold mb-6'>Total Followers: 23,004</p>
        <hr />
        <div className='flex justify-between mt-5'>
            <p>Dark mode</p>
            <input type="checkbox"/>
        </div>
    </header>
  )
}

export default Header