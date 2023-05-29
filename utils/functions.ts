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

function accentsTidy(expression:string){
    var lower = expression.toLowerCase();
    for (let i in non_asciis) {
        lower = lower.replace(new RegExp(non_asciis[i], 'g'), i)
    }
    return lower;
};

export {
    accentsTidy,
}
