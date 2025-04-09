import { HoroscopeDay } from "@/types/horoscope";



function seedRandomGenerator(seed: string): () => number {
    let hash = 0;

    for (let i = 0; i < seed.length; i++) {
        hash = (hash << 5) - hash + seed.charCodeAt(i);
        hash |= 0;
    }

    return () => {
        hash ^= hash << 13;
        hash ^= hash >> 17;
        hash ^= hash << 5;
        return ((hash >>> 0) % 10) + 1;
    };
}


export function generateHoroscope (zodiac : string, days : number) : HoroscopeDay[] {
    const today = new Date();
    const result : HoroscopeDay[] = [];

    for(let i = 0; i < days; i++){
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];

        const seed = `${zodiac}_${dateStr}`;
        const healthRand = seedRandomGenerator(seed + '_health');
        const loveRand = seedRandomGenerator(seed + '_loove');
        const careerRand = seedRandomGenerator(seed + '_career');

        const health = healthRand();
        const love = loveRand();
        const career = careerRand();

        const entries = [
            {key : 'health', value: health},
            {key : 'love', value: love},
            {key : 'career', value: career}
        ] as const;

        const best = entries.reduce((prev, curr) =>
            curr.value > prev.value ? curr : prev
        ).key;
        result.push({
            date : dateStr,
            values : {
                health :health,
                love: love,
                career : career
            },
            best : best
        })
    }

    return result
}