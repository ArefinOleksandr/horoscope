"use client"
import { generateHoroscope } from "@/utils/HoroscopeGenerator"
import { useState, useMemo } from "react";
import { DateRangeSelector } from "@/components/DateRangeSelector";

import style from '../styles/page.module.css'
import { ZodiacContainer } from "@/components/ZodiacContainer";
import { MainSectionContainer } from "@/components/MainSectionContainer";


export default function Page(){
  const [selectedZodiac, setSelectedZodiac] = useState('aries');
  const [days, setDays] = useState<3 | 7>(3);

  const horoscope = useMemo(() => {
    return generateHoroscope(selectedZodiac, days)
}, [selectedZodiac, days]);


  return (
    <div className={style['bgc']}>
      <section className={style['head-section']}>
        <ZodiacContainer selectedZodiac={selectedZodiac} onSelect={setSelectedZodiac}/> 
        <DateRangeSelector range={days} onChange={setDays} />
      </section>
      <section className={style['main-section']}>
        <MainSectionContainer days={horoscope} />
      </section>
      
      
    </div>
  )
}