import { useEffect, useState } from "react"
import { zodiacs } from "@/data/zodiacs"

 interface selectedZodiacProps {
    selectedZodiac : string,
    isActive : boolean,
    onClick : (isActive : boolean) => void,

 }

 interface Zodiac{
    name : string;
    id : string;
    icon : string
 }

export function ZodiacLogo({selectedZodiac, onClick, isActive} : selectedZodiacProps){
    const [currentZodiac, setCurrentZodiac] = useState<Zodiac>(zodiacs[0]);

    useEffect(() => {
        const findedZodiac = zodiacs.find(zodiac => zodiac.id === selectedZodiac);
        if(findedZodiac) setCurrentZodiac(findedZodiac);
    }, [selectedZodiac])


    return (
        <div>
            <button onClick={() => onClick(!isActive)}>
                <img src={currentZodiac.icon} alt="" />
            
            </button>
            <h2>{currentZodiac.name}</h2>
        </div>
        
    )
}