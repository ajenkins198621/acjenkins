import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import Section from "./Section";

export default function ProfessionalSummary(): JSX.Element {
    const resumeContext = useContext(ResumeContext);

    return (
        <Section
            title="Profile"
        >
            <div className="p-6">
                {resumeContext.professionalSummary}
            </div>
        </Section>
    )

}