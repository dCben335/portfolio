"use client"

import { Project } from "@/types/types";
import { useMemo } from "react";

const useCategories = (projects: Project[], isFilter: boolean) => {
    const categories = useMemo(() => {
        if (!isFilter) return [];

        return projects
            .flatMap((project) => project.categories)
            .filter((item, idx, arr) => arr.indexOf(item) == idx)

    }, [projects, isFilter]);

    return categories;
}

export default useCategories;

