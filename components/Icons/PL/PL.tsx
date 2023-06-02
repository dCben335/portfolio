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
import GitHub from "./GitHub/GitHub"
import JavaScript from "./JavaScript/JavaScript"

const frameworks: Object = {
    "Nuxt" : <Nuxt />,
    "Next" : <Next />,
    "React" : <React />,
}

const nativeLanguages: Object = {
    "Html": <Html />,
    "Css" : <Css />,
    "Php" : <Php />,
    "JQuery" : <JQuery />,
    "JavaScript" : <JavaScript />
}

const CMS: Object = {
    "WordPress" : <WordPress />,
    "StoryBlok" : <StoryBlok />,
}

const PL: Object = {
    ...frameworks,
    ...nativeLanguages,
    ...CMS,
    "Sass" : <Sass />,
    "TypeScript" : <TypeScript />,
    "SQL" : <SQL />,
    "TailWind" : <TailWind />,
    "GitHub" : <GitHub />,
}

export {
    nativeLanguages,
    frameworks,
    CMS,
    PL,
}