import Html from "./Html/Html"
import Css from "./Css/Css"
import Php from "./Php/Php"
import JQuery from "./JQuery/JQuery"
import Sass from "./Sass/Sass"
import Nuxt from "./Nuxt/Nuxt"
import Next from "./Next/Next"
import React from "./React/React"
import WordPress from "./WordPress/WordPress"
import TypeScript from "./TypeScript/TypeScript"
import SQL from "./SQL/SQL"
import StoryBlok from "./StoryBlok/StoryBlok"
import TailWind from "./Tailwind/Tailwind"
import JavaScript from "./JavaScript/JavaScript"
import { ReactNode } from "react"

const frameworks: {[key: string] : ReactNode}  = {
    "React" : <React />,
    "Nuxt" : <Nuxt />,
    "Next" : <Next />,
}

const nativeLanguages: {[key: string] : ReactNode}  = {
    "Html": <Html />,
    "Css" : <Css />,
    "JavaScript" : <JavaScript />,
    "Php" : <Php />,
    "JQuery" : <JQuery />,
}

const CMS: {[key: string] : ReactNode}  = {
    "WordPress" : <WordPress />,
    "StoryBlok" : <StoryBlok />,
}

const others: {[key: string] : ReactNode} = {
    "SQL" : <SQL />,
    "Sass" : <Sass />,
    "TailWind" : <TailWind />,
    "TypeScript" : <TypeScript />,

}
const PL: {[key: string] : ReactNode} = {
    ...nativeLanguages,
    ...others,
    ...frameworks,
    ...CMS,
}


export {
    PL,
    nativeLanguages,
    frameworks,
    CMS,
    others
}