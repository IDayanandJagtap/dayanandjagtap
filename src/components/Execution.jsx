import "@/styles/execution.css";
import {
    executionPrinciples,
    executionAreas,
    executionRoadmap,
} from "@/data/portfolioContent";

const Execution = () => {
    return (
        <section className="execution section-shell" id="execution">
            <header className="section-heading">
                <p className="eyebrow">Execution</p>
                <h2>I design for scale, failure, and clarity.</h2>
                <p>
                    Delivery is not just speed. It is sequencing, risk handling,
                    and making sure systems stay stable as complexity grows.
                </p>
            </header>

            <div className="execution-grid">
                <article className="execution-card">
                    <h3>How I execute</h3>
                    <ul>
                        {executionPrinciples.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>

                <article className="execution-card">
                    <h3>Current focus</h3>
                    <div className="execution-tags">
                        {executionAreas.map((item) => (
                            <span key={item}>{item}</span>
                        ))}
                    </div>
                </article>

                <article className="execution-card roadmap">
                    <h3>Direction</h3>
                    <ol>
                        {executionRoadmap.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </article>
            </div>
        </section>
    );
};

export default Execution;
