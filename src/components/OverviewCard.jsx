import React from 'react';
import facebookLogo from '../assets/images/icon-facebook.svg';
import TwitterLogo from '../assets/images/icon-twitter.svg';
import InstagramLogo from '../assets/images/icon-instagram.svg';
import YoutubeLogo from '../assets/images/icon-youtube.svg';

const networkLogos = {
    facebook: facebookLogo,
    twitter: TwitterLogo,
    instagram: InstagramLogo,
    yootube: YoutubeLogo
}

export const OverviewCard = ({ user, audience, followers, day, network }) => {
    return (
        <article className='bg-Light-Grayish-Blue mb-4 mx-auto rounded-[5px] flex-col fle text-center p-4 w-[326px] h-[216px] border-t-4 border-Facebook'>
            <div className='flex justify-center'>
                <img className='p-1' src={networkLogos[network]} alt={`logo ${network}`} />
                <p className='p-1'>{user}</p>
            </div>
            <p className='text-6xl font-bold pt-6'>{followers}</p>
            <p className='text-2xl responsive font-Inter'>{audience}</p>
            <p>{day}</p>
        </article>
    )
}
