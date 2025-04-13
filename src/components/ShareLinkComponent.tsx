import { useState } from 'react'
import style from '../styles/share_button.module.scss'


export function ShareButton(){

    const [copied, setCopied] = useState(false);

    const handleCopy = async function () {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }


    const className = `${style.button} ${copied ? style.copied : style.normal}`;

    return <button 
    className={className} 
    onMouseEnter={e => e.currentTarget.classList.add(style['hover'])}
    onMouseLeave={e => e.currentTarget.classList.remove(style['hover'])}
    onClick={handleCopy}>
       <div className={style['container']}>
            <span className={style['normal-text']}>Копіювати посилання</span>
            <span className={style['hover-text']}>Натисни</span>
            <span className={style['copied-text']}>Скопійовано</span>
        </div>
    </button>
}