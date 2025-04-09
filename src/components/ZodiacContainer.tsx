import { useState } from "react";
import { ZodiacLogo } from "./ZodiacLogo";
import { ZodiacSelector } from "./ZodiacSelector";

import style from '../styles/zodiac_container.module.css'

interface ZodiacSelectorProps {
    selectedZodiac : string;
    onSelect : (zodiac : string) => void;
}

export function ZodiacContainer ({selectedZodiac, onSelect} : ZodiacSelectorProps){
    const [isActiveSelector, setIsActiveSelector] = useState<boolean>(false);



    return (
        <div className={style['zodiac-container']}>
            <div className={style['zodiac-logo']}>
                <ZodiacLogo selectedZodiac={selectedZodiac} onClick={setIsActiveSelector} isActive={isActiveSelector} />
            </div>
            <div className={style['zodiac-selector'] + ' ' + (isActiveSelector ? style['active'] : '')}>
                <ZodiacSelector selectedZodiac={selectedZodiac} onSelect={onSelect} />
            </div>
        </div>
    )


}