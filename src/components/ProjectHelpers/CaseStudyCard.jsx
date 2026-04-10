export const CaseStudyCard = ({ caseStudy }) => {
    return (
        <article className="case-study-card">
            <p className="case-study-domain">{caseStudy.domain}</p>
            <h3>{caseStudy.title}</h3>
            <div className="case-study-section">
                <strong>Problem</strong>
                <p>{caseStudy.problem}</p>
            </div>
            <div className="case-study-section">
                <strong>Approach</strong>
                <p>{caseStudy.approach}</p>
            </div>
            <div className="case-study-section">
                <strong>Tradeoff</strong>
                <p>{caseStudy.tradeoff}</p>
            </div>
            <div className="case-study-section">
                <strong>Outcome</strong>
                <p>{caseStudy.outcome}</p>
            </div>
            <div className="case-study-tags">
                {caseStudy.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </article>
    );
};

export default CaseStudyCard;