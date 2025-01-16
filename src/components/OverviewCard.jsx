import React from 'react';
import facebookLogo from '../assets/images/icon-facebook.svg'

export const OverviewCard = ({ user, audience, followers, day }) => {
    return (
        <article className='bg-Light-Grayish-Blue mb-4 mx-auto rounded-[5px] flex-col fle text-center p-4 w-[326px] h-[216px] border-t-4 border-Facebook'>
            <div className='flex justify-center'>
                <img src={facebookLogo} alt={'logo facebook'} />
                <p>{user}</p>
            </div>
            <p className='text-6xl font-bold pt-6'>{followers}</p>
            <p className='text-2xl responsive font-Inter'>{audience}</p>
            <p>{day}</p>
        </article>
    )
}
