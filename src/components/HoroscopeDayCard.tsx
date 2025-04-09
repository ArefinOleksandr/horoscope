import { fetchCatFact } from "@/services/fetchCatFact";
import { HoroscopeDay } from "@/types/horoscope"
import { useEffect, useState } from "react";

import style from '../styles/main_section.module.css'
import { formatDateToUkrainian } from "@/utils/FormatedDate";

interface HoroscopeDayCardProps {
    day : HoroscopeDay
}

export function HoroscopeDayCard ({day}: HoroscopeDayCardProps){
    const [fact, setFact] = useState<string>('');

    useEffect(() => {
        fetchCatFact().then(setFact).catch(() => setFact('Не вдалося завантажити факт'))
    }, [day.date]);

    return (
        <div className={style['horoscope-day']}>
            <div>
                <img src="/icons/Emoji.svg" alt="" />
                <div>
                    <h2 style={{whiteSpace: 'pre-line'}}>{formatDateToUkrainian(day.date)}</h2>
                    <div><img src="/icons/BigHealth.svg" alt="" /><span className={day.best === "health" ? 'best' : ''}>Здоров&apos;я : {day.values.health}</span></div>
                    <div><img src="/icons/BigCareer.svg" alt="" /><span className={day.best === "career" ? 'best' : ''}>Кар&apos;єра : {day.values.career}</span></div>
                    <div><img src="/icons/BigLove.svg" alt="" /><span className={day.best === "love" ? 'best' : ''}>Любов : {day.values.love}</span></div>
           
                </div>
               </div>
             <p>Забавный факт: {fact}</p>
        </div>
    )
}