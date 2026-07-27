import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export const CaseStudyCard = ({ caseStudy }) => {
    return (
        <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="case-study-card"
            aria-label={`Read the case study: ${caseStudy.title}`}
        >
            <div className="case-study-card-top">
                <p className="case-study-domain">{caseStudy.eyebrow}</p>
                {caseStudy.readTime && (
                    <span className="case-study-readtime">
                        {caseStudy.readTime}
                    </span>
                )}
            </div>

            <h3>{caseStudy.title}</h3>
            <p className="case-study-summary">{caseStudy.summary}</p>

            <div className="case-study-tags">
                {caseStudy.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            <span className="case-study-readmore">
                Read more <FaArrowRight size={12} />
            </span>
        </Link>
    );
};

export default CaseStudyCard;
