
export type HoroscopeCategory = 'health' | 'love' | 'career'

export interface HoroscopeDay {
    date : string;
    values : {
        health: number,
        love : number,
        career : number
    };
    best : HoroscopeCategory
}

