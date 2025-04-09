


export async function fetchCatFact () : Promise<string> {
    const res = await fetch('https://catfact.ninja/fact');
    if(!res.ok) throw new Error ('Dont fetch cats');
    const data = await res.json();

    return data.fact

}