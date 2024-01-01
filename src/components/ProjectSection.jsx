import "@/styles/project.css";
import { useState } from "react";
import ProjectGrid from "./ProjectHelpers/ProjectGrid";

const miscProjects = [
    {
        title: "Pdf-Manager",
        description:
            "A project to handle pdf's build using technologies like Node.js, express.js, ejs",
        imageUrl: "/project/pdf-manager-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/Pdf---Manager",
        websiteLink: null,
    },
    {
        title: "Todo",
        description: "A simple Todo app built in Typescript!.",
        imageUrl: "/project/todo-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/Todo-In-Typescript",
        websiteLink: `https://todo-in-typescript.vercel.app`,
    },
];

const nextjsProjects = [
    {
        title: "Portfolio",
        description: "This site is built using Next.js",
        imageUrl: "/project/portfolio-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/dayanandjagtap",
        websiteLink: null,
    },
];

const mernProjects = [
    {
        title: "Blogin",
        description:
            "Blogin is a blog sharing platform which allows users to share their blogs with others.",
        imageUrl: "/project/blogin-preview.png",
        projectLink: "https://github.com/IDayanandJagtap/blogin-frontend",
        websiteLink: "https://blogin-alpha.vercel.app/",
    },
];

const ProjectSection = () => {
    // Set the current selected section
    const [selectedSection, setSelectedSection] = useState("all");
    const [projectList, setProjectList] = useState(
        nextjsProjects.concat(mernProjects).concat(miscProjects)
    );

    const updateProjectSection = (section) => {
        setSelectedSection(section);

        if (section == "next") {
            setProjectList(nextjsProjects);
        } else if (section == "mern") {
            setProjectList(mernProjects);
        } else if (section == "misc") {
            setProjectList(miscProjects);
        } else if (section == "all") {
            setProjectList(
                nextjsProjects.concat(mernProjects).concat(miscProjects)
            );
        }
    };

    return (
        <section className="project" id="project">
            <h1>Projects : </h1>

            <div className="project-selectGroup flex justify-center align-center">
                <button
                    className={selectedSection == "all" ? "activeSection" : ""}
                    onClick={() => updateProjectSection("all")}
                >
                    All
                </button>
                <button
                    className={selectedSection == "next" ? "activeSection" : ""}
                    onClick={() => updateProjectSection("next")}
                >
                    NextJs
                </button>
                <button
                    className={selectedSection == "mern" ? "activeSection" : ""}
                    onClick={() => updateProjectSection("mern")}
                >
                    MERN
                </button>
                <button
                    className={selectedSection == "misc" ? "activeSection" : ""}
                    onClick={() => updateProjectSection("misc")}
                >
                    Misc
                </button>
            </div>

            <ProjectGrid projectList={projectList} />
        </section>
    );
};

export default ProjectSection;
