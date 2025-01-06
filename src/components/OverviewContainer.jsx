import React from 'react';
import data from "../data/data.json"
import { OverviewCard } from './OverviewCard';


export const OverviewContainer = () => {
  return (
    <section>
      {
        data.overview.map((item) => {
          return <OverviewCard
            key={item.id}
            user={item.user}
            followers={item.audience}
            audience={item.audienceType}
            day={item.today}
          />
        })
      }
    </section>
  )
}
