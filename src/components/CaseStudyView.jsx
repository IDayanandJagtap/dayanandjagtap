"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { Navbar } from "@/components/header/Navbar";
import { useTheme } from "@/lib/useTheme";
import { caseStudies } from "@/data/caseStudies";
import "@/styles/caseStudy.css";

const CaseStudyView = ({ caseStudy }) => {
    const [theme, setTheme] = useTheme();

    const others = caseStudies.filter((item) => item.slug !== caseStudy.slug);

    return (
        <main className={`portfolio-page theme-${theme}`}>
            <Navbar updateTheme={setTheme} theme={theme} linkBase="/" />

            <article className="case-study-page section-shell">
                <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="case-study-breadcrumb-sep">/</span>
                    <Link href="/#systems">Case studies</Link>
                    <span className="case-study-breadcrumb-sep">/</span>
                    <span
                        className="case-study-breadcrumb-current"
                        aria-current="page"
                    >
                        {caseStudy.title}
                    </span>
                </nav>

                <header className="case-study-hero">
                    <p className="eyebrow">{caseStudy.eyebrow}</p>
                    <h1>{caseStudy.title}</h1>
                    <p className="case-study-lead">{caseStudy.lead}</p>

                    <div className="case-study-meta">
                        {caseStudy.role && (
                            <span>
                                <strong>Role</strong>
                                {caseStudy.role}
                            </span>
                        )}
                        {caseStudy.readTime && (
                            <span>
                                <strong>Read</strong>
                                {caseStudy.readTime}
                            </span>
                        )}
                    </div>
                </header>

                <div className="case-study-body">
                    {caseStudy.sections.map((section) => (
                        <section
                            className="case-study-block"
                            key={section.heading}
                        >
                            <h2>{section.heading}</h2>
                            {section.body?.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                            {section.list && (
                                <ul>
                                    {section.list.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            )}
                            {section.bodyAfter?.map((paragraph, index) => (
                                <p key={`after-${index}`}>{paragraph}</p>
                            ))}
                        </section>
                    ))}
                </div>

                {caseStudy.stack?.length > 0 && (
                    <div className="case-study-stack">
                        <h3>Stack &amp; concepts</h3>
                        <div className="case-study-tags">
                            {caseStudy.stack.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                )}

                <div className="case-study-note">
                    Written at the systems level — the framing and details here
                    are intentionally generalized and contain no organization-specific
                    information.
                </div>

                {others.length > 0 && (
                    <nav className="case-study-more">
                        <div className="case-study-more-head">
                            <h3>More case studies</h3>
                            <Link href="/#systems" className="case-study-back">
                                <FaArrowLeft size={11} /> Back to all
                            </Link>
                        </div>
                        <div className="case-study-more-grid">
                            {others.map((item) => (
                                <Link
                                    key={item.slug}
                                    href={`/case-studies/${item.slug}`}
                                    className="case-study-more-card"
                                >
                                    <p className="case-study-domain">
                                        {item.eyebrow}
                                    </p>
                                    <h4>{item.title}</h4>
                                    <span className="case-study-more-cta">
                                        Read more
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </nav>
                )}
            </article>
        </main>
    );
};

export default CaseStudyView;
