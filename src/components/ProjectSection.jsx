import "@/styles/project.css";
import { featuredSystems, selectedBuilds } from "@/data/portfolioContent";
import CaseStudyCard from "./ProjectHelpers/CaseStudyCard";
import ProjectGrid from "./ProjectHelpers/ProjectGrid";

const ProjectSection = () => {
    return (
        <section className="project section-shell" id="systems">
            <header className="section-heading">
                <p className="eyebrow">Systems Built</p>
                <h2>Case studies first, screenshots second.</h2>
                <p>
                    These are the systems and builds that best show how I think:
                    problem framing, architecture, tradeoffs, and the outcome.
                </p>
            </header>

            <div className="case-study-grid">
                {featuredSystems.map((caseStudy) => (
                    <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} />
                ))}
            </div>

            <div className="project-lowerBlock">
                <div className="section-heading section-heading-tight">
                    <p className="eyebrow">Selected builds</p>
                    <h3>Shipping work that still matters.</h3>
                </div>
                <ProjectGrid projectList={selectedBuilds} />
            </div>
        </section>
    );
};

export default ProjectSection;
