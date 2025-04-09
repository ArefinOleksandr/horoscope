
import style from '../styles/date_range_selector.module.css'
import { ThemeToggle } from './ToggleTheme';

interface DateRangeProps{
    range : 3|7;
    onChange : (days : 3 | 7 ) => void
}

export const DateRangeSelector = ({range , onChange } : DateRangeProps) => {
    

    return (
        <div className={style['date-renge-selector-container']}> 
            <ThemeToggle />
            <div className={style['date-renge-selector']}>
                <button className={range === 3 ? (style['active']) : ''}
                onClick={() => onChange(3)}>
                    3 дні
                </button>
                <button className={range === 7 ? (style['active']) : ''}
                onClick={() => onChange(7)}>
                    7 днів
                </button>

            </div>
        </div>
    )
}