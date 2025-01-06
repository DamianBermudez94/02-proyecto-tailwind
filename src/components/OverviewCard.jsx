import React from 'react';


export const OverviewCard = ({ user,audience,followers,day }) => {
    return (
        <article className='bg-Light-Grayish-Blue m-4 rounded-md flex flex-col text-center p-4'>
            <p>{user}</p>
            <p className='text-3xl font-bold'>{followers}</p>
            <p>{audience}</p>
            <p>{day}</p>
        </article>
    )
}
