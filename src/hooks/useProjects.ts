import { useQuery } from '@tanstack/react-query';;
const useProjects = () => {
    const projects = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetch('/assets/contents/project.json').then(res => res.json()),
    });

    return projects;
};

export default useProjects;