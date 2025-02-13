import React from 'react';
import data from "../data/data.json"
import { OverviewCard } from './OverviewCard';
import { OverviewTodayCard } from './OverviewTodayCard';


export const OverviewContainer = () => {
  const converNumberTok = (number) => {
    if (number >= 10000) {
      number = number / 1000
      return `${number}k`
    }
    return number
  }
  return (
    <div className='absolute top-48 left-0 right-0 lg:top-52'>
      <section className='grid gap-4 sm:gap-6 lg:gap-8 
  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 
  px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40 
  place-items-center'>
        {
          data.overview.map((item) => {
            return <OverviewCard
              key={item.id}
              user={item.user}
              followers={converNumberTok(item.audience)}
              audience={item.audienceType}
              day={item.today}
              network={item.network}
              isUp={item.isUp}
            />
          })
        }
      </section>
      <section className='flex flex-col px-4 sm:px-10 md:px-20 lg:px-32 xl:px-40'>
        <h2 className='w-full min-w-[250px] text-Very-Dark-Blue dark:text-Light-Grayish-Blue text-responsive my-8 font-bold '>Overview - Today</h2>

        <div className='grid gap-4 grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            data.OverviewToday.map((item) => {
              return <OverviewTodayCard
                key={item.id}
                network={item.network}
                audienceType={item.audienceType}
                followers={converNumberTok(item.audience)}
                audience={item.audienceType}
                day={item.today}
                isUp={item.isUp}
              />
            })
          }
        </div>

      </section>
    </div>



  )
}
