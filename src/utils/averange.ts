

export function getAverange (values : {health : number, career: number, love: number}) : number{
    return Math.round((values.health + values.career + values.love) / 3)
}