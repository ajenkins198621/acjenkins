import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import Section from "./Section";

export default function ProfessionalSummary(): JSX.Element {
    const resumeContext = useContext(ResumeContext);

    return (
        <Section
            title="Profile"
        >
            {resumeContext.professionalSummary}
        </Section>
    )

}