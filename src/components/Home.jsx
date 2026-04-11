import "@/styles/home.css";
import Link from "next/link";
import {
    heroHeadline,
    heroMetrics,
    ctoTrajectory,
} from "@/data/portfolioContent";

export const Home = () => {
    return (
        <section className="home section-shell" id="home">
            <div className="home-copy reveal-up">
                <p className="eyebrow">Backend engineer · systems thinker</p>
                <h1>{heroHeadline}</h1>
                <p className="home-description">
                    I build through the full chain: customer, interface,
                    backend, infrastructure, data, and tradeoffs. My goal is
                    not feature output. My goal is reliable system behavior.
                </p>
                <div className="home-actions flex">
                    <Link href={"#contact"} className="home-btn primary-btn">
                        Start a conversation
                    </Link>
                </div>
                <div className="hero-metrics">
                    {heroMetrics.map((metric) => (
                        <article className="metric-card" key={metric.value}>
                            <strong>{metric.value}</strong>
                            <p>{metric.label}</p>
                        </article>
                    ))}
                </div>
            </div>

            <aside className="home-systemPanel">
                <div className="cto-trajectory">
                    <div className="trajectory-header">
                        <span>Journey</span>
                        <p>The path to CTO thinking.</p>
                    </div>
                    <div className="trajectory-timeline">
                        {ctoTrajectory.map((item, index) => (
                            <div
                                key={item.stage}
                                className={`trajectory-step ${ctoTrajectory.length - index > 3 ? "upcoming" : ctoTrajectory.length - index === 3 ? "current" : "completed"}`}
                            >
                                <div className="step-indicator">
                                    <span className="step-number">
                                        {ctoTrajectory.length - index}
                                    </span>
                                </div>
                                <div className="step-content">
                                    <h4>{item.stage}</h4>
                                    <p className="step-description">{item.description}</p>
                                    {item.highlights?.length > 0 && (
                                        <ul className="step-points">
                                            {item.highlights.map((point) => (
                                                <li key={`${item.stage}-${point}`}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    <p className="step-years">{item.years}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default Home;
