import { HoroscopeDay } from "@/types/horoscope";
import { HoroscopeCards } from "./HoroscopeCards";
import { HoroscopeDayCard } from "./HoroscopeDayCard";
import { useEffect, useState } from "react";

import style from '../styles/main_section.module.css'
import { useRouter, useSearchParams } from "next/navigation";

interface MainSectionConainerProps{
    days: HoroscopeDay[];
}


export function MainSectionContainer ({days} : MainSectionConainerProps){
    const router = useRouter();
    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams?.toString());
    const [currentDay, setCurrentDay] = useState<HoroscopeDay>(
        params.get('date') ? 
        days.find(day => day.date === params.get('date'))! :
        days[0]
    );

    useEffect(() => {
        params.set('date', currentDay.date);
        router.push('?' +params.toString(), {scroll: false})
    }, [currentDay])
    return (
        <div className={style['horoscope-main-section']} >
            
            <HoroscopeCards days={days} currentDay={currentDay} onChange={setCurrentDay} />
            <HoroscopeDayCard day={currentDay} />
        </div>
    )
}