import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import CaseStudyView from "@/components/CaseStudyView";

export function generateStaticParams() {
    return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export function generateMetadata({ params }) {
    const caseStudy = getCaseStudy(params.slug);
    if (!caseStudy) {
        return { title: "Case study not found — Dayanand Jagtap" };
    }
    return {
        title: `${caseStudy.title} — Dayanand Jagtap`,
        description: caseStudy.summary,
    };
}

export default function CaseStudyPage({ params }) {
    const caseStudy = getCaseStudy(params.slug);
    if (!caseStudy) {
        notFound();
    }
    return <CaseStudyView caseStudy={caseStudy} />;
}
