import { ProjectCard } from "./ProjectCard";

export const ProjectGrid = ({ projectList }) => {
    return (
        <div className="project-content">
            {projectList.map((e) => {
                return <ProjectCard e={e} key={e.imageUrl} />;
            })}
        </div>
    );
};

export default ProjectGrid;
