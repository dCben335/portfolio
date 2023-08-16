interface Project {
    name: string,
    categories: string[],
    desciption: string,
    images: Img[]
}
interface Img {
    path: string,
    alt: string
}

interface TransformPorperties {
    perspective: number
    maxAngle: number
    scale: number
}

interface GroupForm {
    label: string
    placeholder: string
    type: string
    name: string
}

export type {
    Project,
    Img,
    TransformPorperties,
    GroupForm,
}


