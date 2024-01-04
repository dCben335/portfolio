import { ReactNode,  ReactElement,  ReactDOM } from "react"

export type ProgrammingLanguages = {
    [key: string] : ReactNode
}

export type Project = {
    name: string,
    categories: string[],
    desciption: string,
    images: Img[]
}

export type Img = {
    path: string,
    alt: string
}

export type GroupForm = {
    label: string
    placeholder: string
    type: string
    name: string
}

export type routeLink = {
    path: string | null;
    children:  React.ReactElement<React.ReactDOM>;
    name?: string,
}

export type ProgrammingLanguagesProps = {
    title?: string,
    languages: ProgrammingLanguages
}

export type ProjectCardTransformPorperties = {
    perspective: number
    maxAngle: number
    scale: number
}
