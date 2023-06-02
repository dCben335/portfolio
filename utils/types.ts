interface Project {
    name: string,
    categories: Array<string>,
    desciption: string,
    images: Array<Img>
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


