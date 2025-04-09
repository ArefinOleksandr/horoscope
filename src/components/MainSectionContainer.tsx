import { HoroscopeDay } from "@/types/horoscope";
import { HoroscopeCards } from "./HoroscopeCards";
import { HoroscopeDayCard } from "./HoroscopeDayCard";
import { useState } from "react";

import style from '../styles/main_section.module.css'

interface MainSectionConainerProps{
    days: HoroscopeDay[];
}


export function MainSectionContainer ({days} : MainSectionConainerProps){
    const [currentDay, setCurrentDay] = useState<HoroscopeDay>(days[0]);



    return (
        <div className={style['horoscope-main-section']} >
            
            <HoroscopeCards days={days} currentDay={currentDay} onChange={setCurrentDay} />
            <HoroscopeDayCard day={currentDay} />
        </div>
    )
}