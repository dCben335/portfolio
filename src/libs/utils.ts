const non_asciis:any = {
    'a': '[àáâãäå]',
    'ae': 'æ',
    'c': 'ç',
    'e': '[èéêë]',
    'i': '[ìíîï]',
    'n': 'ñ',
    'o': '[òóôõö]',
    'oe': 'œ',
    'u': '[ùúûűü]',
    'y': '[ýÿ]'
};

const accentsTidy = (expression: string) => {
    let lower = expression.toLowerCase();
    for (let i in non_asciis) {
        lower = lower.replace(new RegExp(non_asciis[i], 'g'), i)
    }
    return lower;
};

const fetching = async (link: string) => {
    try {
        const response:any = await fetch(link);
        if (!response.ok) throw Error;

        return response.json() 

    } catch(err) {
        console.log(err)
        return undefined;
    }
}


export {
    accentsTidy,
    fetching,
}
