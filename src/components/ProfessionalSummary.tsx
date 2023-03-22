import React, { useContext } from "react";
import { IResume, ResumeContext } from "@/context/ResumeContext";
import Section from "./Section";

export default function ProfessionalSummary(): JSX.Element {
    const resumeContext = useContext<IResume>(ResumeContext);

    return (
        <Section
            title="Profile"
        >
            <div className="p-4 lg:p-6">
                {resumeContext.professionalSummary}
            </div>
        </Section>
    )

}