import { useQuery } from '@tanstack/react-query';;
const useProjects = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: () => fetch('/assets/contents/project.json').then(res => res.json()),
    });

    return { data , isLoading, error };
};

export default useProjects;