import "@/styles/project.css";
import { useState } from "react";
import ProjectGrid from "./ProjectHelpers/projectGrid";

const miscProjects = [
    {
        title: "Pdf-Manager",
        description:
            "A simple project to handle pdf's build using technologies like Node.js, express.js, ejs",
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
        description: "This site is build using Next.js",
        imageUrl: "/project/ms-clone-preview.png",
        projectLink: "#",
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
    const [selectedSection, setSelectedSection] = useState("next");
    const [projectList, setProjectList] = useState(nextjsProjects);

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

// const ProjectGrid = ({ projectList }) => {
//     return (
//         <div className="project-content">
//             {projectList.map((e) => {
//                 return (
//                     <div
//                         key={e.imageUrl}
//                         className="content-card flex flex-col justify-center align-start"
//                     >
//                         <div className="content-cardLink flex justify-center align-center">
//                             <a
//                                 href={e.projectLink}
//                                 target="_blank"
//                                 className="flex center"
//                             >
//                                 <FaCode size={24} />
//                             </a>
//                             {e.websiteLink && (
//                                 <a
//                                     href={e.websiteLink}
//                                     target="_blank"
//                                     className="flex center"
//                                 >
//                                     <FaLink size={20} />
//                                 </a>
//                             )}
//                         </div>
//                         <Image
//                             src={e.imageUrl}
//                             width={400}
//                             height={400}
//                             alt={e.title}
//                             className="content-cardImage"
//                         />
//                         <article className="content-cardText">
//                             <h3>{e.title}</h3>
//                             <p>{e.description}</p>
//                         </article>
//                     </div>
//                 );
//             })}
//         </div>
//     );
// };

export default ProjectSection;
