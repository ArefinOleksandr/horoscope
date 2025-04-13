import { useEffect, useState } from "react";
import { ZodiacLogo } from "./ZodiacLogo";
import { ZodiacSelector } from "./ZodiacSelector";

import style from '../styles/zodiac_container.module.css'
import { useRouter, useSearchParams } from "next/navigation";

interface ZodiacSelectorProps {
    selectedZodiac : string;
    onSelect : (zodiac : string) => void;
}

export function ZodiacContainer ({selectedZodiac, onSelect} : ZodiacSelectorProps){
    const [isActiveSelector, setIsActiveSelector] = useState<boolean>(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    const params = new URLSearchParams(searchParams?.toString());

    useEffect(() => {
        params.get('zodiac') && onSelect(params.get('zodiac')!) 
}, [])

    useEffect(() => {
        params.set('zodiac', selectedZodiac);
        router.push('?' +params.toString(), {scroll: false})
    }, [selectedZodiac])


    return (
        <div className={style['zodiac-container']}>
            <div className={style['zodiac-logo']}>
                <ZodiacLogo selectedZodiac={selectedZodiac} onClick={setIsActiveSelector} isActive={isActiveSelector} />
            </div>
            <div className={style['zodiac-selector'] + ' ' + (isActiveSelector ? style['active'] : '')}>
                <ZodiacSelector onSelect={onSelect} />
            </div>
        </div>
    )


}