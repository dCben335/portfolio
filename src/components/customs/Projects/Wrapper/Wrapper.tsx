import ProjectCard from "@/components/customs/Projects/Card/Card";
import { Project } from "@/types/types"
import { forwardRef } from "react";
import styles from './Wrapper.module.scss'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  currentProjects: Project[];
}


const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(({ currentProjects }, ref) => {
  return (
    <div className={styles.wrapper} ref={ref}>
      {(currentProjects ?? []).map((project) => 
        <ProjectCard      
          key={project.name.split(' ').join('_')}
          path={`my-work/${project.name.split(' ').join('_')}`}
          image={{
            path: project.images[0].path,
            alt: project.images[0].alt,
          }}
          title={project.name}
        />
      )}  
    </div>
  );
});

Wrapper.displayName = 'Project_Wrapper';

export default Wrapper;