import React from 'react'

const Header = () => {
  return (
    <header className='bg-Very-Pale-Blue h-[235px] rounded-b-[20px] pt-8 px-6'>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <hr />
        <div className='flex justify-between'>
            <p>Dark mode</p>
            <input type="checkbox"/>
        </div>
    </header>
  )
}

export default Header