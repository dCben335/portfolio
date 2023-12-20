import Work from "@/components/Icons/pages/Work/Work";
import { routeLink } from "@/libs/types";

const routes: routeLink[] = [
    {
        path: "dashboard/",
        children: <Work />,
        name: "exisiting projects"
    }, 
    {
        path: "dashboard/projects",
        children: <Work />,
        name: "Add New"
    }, 
    {
        path: "dashboard/test2",
        children: <Work />,
        name: "Review"

    }, 
];

export default routes