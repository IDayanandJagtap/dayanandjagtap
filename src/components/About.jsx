import "@/styles/about.css";
import {
    howIThinkStatements,
    operatingPrinciples,
    thinkingSignals,
} from "@/data/portfolioContent";

const About = ({ theme }) => {
    return (
        <section className={`about section-shell ${theme}`} id="thinking">
            <header className="section-heading">
                <p className="eyebrow">Thinking</p>
                <h2>How I actually work.</h2>
                <p>
                    I&apos;m happiest when a messy problem finally clicks into
                    something clear. Before I write a line of code, I want to
                    understand what a system really needs to do, where it&apos;ll
                    hurt, and what I&apos;m trading away. Here&apos;s the way I
                    tend to think.
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
                    <h3>A few things I believe</h3>
                    <div className="how-i-think">
                        {howIThinkStatements.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h3>Where I love to go deep</h3>
                    <p>
                        The stuff I genuinely enjoy getting my hands dirty with —
                        and reach for first when a problem gets hard.
                    </p>
                </div>
                <div className="signals-list">
                    {thinkingSignals.map((signal) => (
                        <span key={signal} className="signal-pill">
                            {signal}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
