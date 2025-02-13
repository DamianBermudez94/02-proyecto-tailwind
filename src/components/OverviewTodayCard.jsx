import React from 'react'
import facebookLogo from '../assets/images/icon-facebook.svg';
import TwitterLogo from '../assets/images/icon-twitter.svg';
import InstagramLogo from '../assets/images/icon-instagram.svg';
import YoutubeLogo from '../assets/images/icon-youtube.svg';
import iconDown from "../assets/images/icon-down.svg";
import iconUp from "../assets/images/icon-up.svg"

const networkLogos = {
  Facebook: facebookLogo,
  Twitter: TwitterLogo,
  Instagram: InstagramLogo,
  YouTube: YoutubeLogo
}
console.log(networkLogos);

const networkColors = {
  Facebook: 'bg-Facebook',
  Twitter: 'bg-Twitter',
  Instagram: 'bg-Instagram-Gradient',
  YouTube: 'bg-YouTube'
}
export const OverviewTodayCard = ({ audienceType, network, audience, followers, day, isUp }) => {
  return (

    <article className='bg-Light-Grayish-Blue dark:bg-Dark-Desaturated-Blue 
  rounded-md p-4 flex flex-col text-center 
  w-full min-w-[250px] max-w-[330px] h-auto 
  overflow-hidden hover:brightness-95 hover:dark:brightness-125 cursor-pointer'>
      <div className='flex justify-between mb-[21px]'>
      <p className='text-xs uppercase tracking-[5px] text-Dark-Grayish-Blue'>{audience}</p>
     
        <img className='p-1 w-8 h-8' src={networkLogos[network]} alt={`logo ${network}`} />
     
      </div>


      <div className='flex justify-between'>
      <p className='text-6xl font-bold text-Very-Dark-Blue pt-4 dark:text-White'>{followers}</p>
        <div className='flex items-center place-content-center gap-1 mt-5'>
          <img className='' src={isUp ? iconUp : iconDown} alt={`Icon ${network}`} />
          <p className={`text-xs font-bold ${isUp ? 'text-Lime-Green' : 'text-Bright-Red'}`}>{day}</p>
        </div>

      </div>

    </article>

  )
}