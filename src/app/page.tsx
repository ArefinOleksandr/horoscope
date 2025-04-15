"use client"
import { generateHoroscope } from "@/utils/HoroscopeGenerator"
import { useState, useMemo, Suspense } from "react";
import { DateRangeSelector } from "@/components/DateRangeSelector";

import style from '../styles/page.module.css'
import { ZodiacContainer } from "@/containers/ZodiacContainer";
import { MainSectionContainer } from "@/containers/MainSectionContainer";


export default function Page(){
  const [selectedZodiac, setSelectedZodiac] = useState('aries');
  const [days, setDays] = useState<3 | 7>(7);

  const horoscope = useMemo(() => {
    return generateHoroscope(selectedZodiac, days)
}, [selectedZodiac, days]);

  return (
    <Suspense fallback={<div>Загрузка...</div>}>
    <div className={style['bgc']}>
      <section className={style['head-section']}>
        <ZodiacContainer selectedZodiac={selectedZodiac} onSelect={setSelectedZodiac}/> 
        <DateRangeSelector range={days} onChange={setDays} />
      </section>
      <section className={style['main-section']}>
        <MainSectionContainer days={horoscope} />
      </section>
      
    </div>
    </Suspense>
  )
}