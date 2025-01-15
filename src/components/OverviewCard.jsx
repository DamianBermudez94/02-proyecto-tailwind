import React from 'react';
import facebookLogo from '../assets/images/icon-facebook.svg'

export const OverviewCard = ({ user,audience,followers,day }) => {
    return (
        <article className='bg-Light-Grayish-Blue mb-4 mx-auto rounded-[5px] flex-col fle text-center p-4 w-[326px] h-[216px] border-t-4 border-Facebook'>
            <img src={facebookLogo} alt={'logo facebook'} />
            <p>{user}</p>
            <p className='text-3xl font-bold'>{followers}</p>
            <p>{audience}</p>
            <p>{day}</p>
        </article>
    )
}
