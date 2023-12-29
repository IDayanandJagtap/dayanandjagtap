import Image from "next/image";
import { FaCode, FaLink } from "react-icons/fa";

export const ProjectCard = ({ e }) => {
    return (
        <div
            key={e.imageUrl}
            className="content-card flex flex-col justify-center align-start"
        >
            <div className="content-cardLink flex justify-center align-center">
                <a href={e.projectLink} target="_blank" className="flex center">
                    <FaCode size={24} />
                </a>
                {e.websiteLink && (
                    <a
                        href={e.websiteLink}
                        target="_blank"
                        className="flex center"
                    >
                        <FaLink size={20} />
                    </a>
                )}
            </div>
            <Image
                src={e.imageUrl}
                width={400}
                height={400}
                alt={e.title}
                className="content-cardImage"
            />
            <article className="content-cardText">
                <h3>{e.title}</h3>
                <p>{e.description}</p>
            </article>
        </div>
    );
};

export default ProjectCard;
