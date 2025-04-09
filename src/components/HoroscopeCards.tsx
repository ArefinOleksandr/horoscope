import { HoroscopeDay } from "@/types/horoscope";

import style from '../styles/main_section.module.css'
import { formatDateToUkrainian } from "@/utils/FormatedDate";


interface HoroscopeInterface {
    days : HoroscopeDay[];
    currentDay : HoroscopeDay;
    onChange : (changeDay : HoroscopeDay) => void
}


export const HoroscopeCards = ({days, currentDay, onChange} : HoroscopeInterface) => {
    

    
    return (<div className={style['horoscope-cards']} >
        {days.map((day) => (
             <button 
             key={day.date}
             onClick={() => onChange(day)}
                className={(day.date === currentDay.date) ? style['active'] : ''}
                style={days.length === 3 ? {width: '18vw'} : { width: '8.54vw'}} >
             <div>
                <h2 style={{whiteSpace: 'pre-line'}}>{formatDateToUkrainian(day.date).replace(' ', '\n')}</h2>
                <p><img src="/icons/Health.svg" alt="" /><span className={day.best === "health" ? 'best' : ''}> {day.values.health}</span></p>
                <p><img src="/icons/Career.svg" alt="" /><span className={day.best === "career" ? 'best' : ''}> {day.values.career}</span></p>
                <p><img src="/icons/Love.svg" alt="" /><span className={day.best === "health" ? 'best' : ''}> {day.values.love}</span></p>
             </div>
             
             </button>
        ))}
    </div>)

}