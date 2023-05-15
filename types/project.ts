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

const accentsTidy = function(expression:string){
    var lower = expression.toLowerCase();
    for (let i in non_asciis) {
        lower = lower.replace(new RegExp(non_asciis[i], 'g'), i)
    }
    return lower;
};

interface Project {
    project_name: string,
    category_name: string,
    desciption: string,
    images: Array<Img>
}
interface Img {
    path: string,
    alt: string
}

export type {
    Project,
    Img,
}

export {
    accentsTidy,
}


