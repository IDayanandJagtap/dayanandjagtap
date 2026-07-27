import "@/styles/project.css";
import { selectedBuilds } from "@/data/portfolioContent";
import { caseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./ProjectHelpers/CaseStudyCard";
import ProjectGrid from "./ProjectHelpers/ProjectGrid";

const ProjectSection = () => {
    return (
        <section className="project section-shell" id="systems">
            <header className="section-heading">
                <p className="eyebrow">Systems Built</p>
                <h2>Case studies first, screenshots second.</h2>
                <p>
                    A few systems I&apos;ve designed and shipped, written up at the
                    level that actually matters: the problem, the decisions, and
                    the tradeoffs. Open one to read the full story.
                </p>
            </header>

            <div className="case-study-grid">
                {caseStudies.map((caseStudy) => (
                    <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
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
