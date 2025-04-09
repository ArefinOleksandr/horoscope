

import {zodiacs} from '../data/zodiacs';


interface ZodiacSelectorProps {
    onSelect : (zodiac : string) => void;
}


export const ZodiacSelector = ({
    onSelect
} : ZodiacSelectorProps) => {

return <div>
        {zodiacs.map((zodiac) => (
            <button key= {zodiac.id} 
            onClick = {() => onSelect(zodiac.id)} >
                <img src={zodiac.icon} alt={zodiac.name} />
                <span>{zodiac.name}</span>
            </button>
        ))}
    </div>
}