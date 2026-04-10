import "@/styles/about.css";
import {
    operatingPrinciples,
    thinkingSignals,
} from "@/data/portfolioContent";

const About = ({ theme }) => {
    return (
        <section className={`about section-shell ${theme}`} id="thinking">
            <header className="section-heading">
                <p className="eyebrow">Thinking</p>
                <h2>How I approach work.</h2>
                <p>
                    The site is intentionally structured like a thought process:
                    the way I interpret problems, the systems I build, and the
                    direction I am moving toward.
                </p>
            </header>

            <div className="principles-grid">
                {operatingPrinciples.map((principle) => (
                    <article className="principle-card" key={principle.title}>
                        <h3>{principle.title}</h3>
                        <p>{principle.description}</p>
                    </article>
                ))}
            </div>

            <div className="thinking-panel">
                <div>
                    <h3>Signals I keep close</h3>
                    <p>
                        Distributed systems, cloud design, backend depth,
                        database shape, security, and operational clarity.
                    </p>
                </div>
                <div className="signals-list">
                    {thinkingSignals.map((signal) => (
                        <span key={signal} className="signal-pill">
                            {signal}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
