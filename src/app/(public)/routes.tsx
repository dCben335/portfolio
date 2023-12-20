import Home from "@/components/Icons/pages/Home/Home";
import About from "@/components/Icons/pages/About/About";
import Work from "@/components/Icons/pages/Work/Work";
import { routeLink } from "@/libs/types";

const routes: routeLink[] = [
    {
        path: null,
        children: <Home />,
    }, 
    {
        path: "about",
        children: <About />,
    }, 
    {
        path: "my-work",
        children: <Work />,
    }, 
];

export default routes