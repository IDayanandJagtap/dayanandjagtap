import "@/styles/home.css";
import Link from "next/link";
import { heroMetrics, luminaSteps } from "@/data/portfolioContent";
export const Home = () => {
    const handleOnDownloadCv = () => {
        let pdf = "/Dayanand_Jagtap.pdf";
        window.open(pdf);
    };

    return (
        <section className="home section-shell" id="home">
            <div className="home-copy">
                <p className="eyebrow">Backend engineer · systems thinker</p>
                <h1>Builder of systems, not just code.</h1>
                <p className="home-description">
                    I work end-to-end: customer, interface, backend,
                    infrastructure, data, and the tradeoffs that hold them
                    together.
                </p>
                <div className="home-actions flex">
                    <button
                        className="home-btn primary-btn"
                        onClick={handleOnDownloadCv}
                    >
                        Download CV
                    </button>
                    <Link href={"#contact"} className="home-btn secondary-btn">
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
                <div className="system-panelHeader">
                    <span>Lumina</span>
                    <p>A quiet operating model for the way I build.</p>
                </div>
                <ol className="lumina-list">
                    {luminaSteps.map((step, index) => (
                        <li key={step}>
                            <span>{index + 1}</span>
                            <p>{step}</p>
                        </li>
                    ))}
                </ol>
                <div className="system-panelFooter">
                    Calm power. Clear outcomes. No noise.
                </div>
            </aside>
        </section>
    );
};

export default Home;
