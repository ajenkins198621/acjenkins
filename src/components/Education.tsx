import React, { useContext } from "react";
import { IResume, ResumeContext } from "@/context/ResumeContext";
import EducationRow from "./EducationRow";
import Section from "./Section";

export default function Education(): JSX.Element {
    const resumeContext = useContext<IResume>(ResumeContext);
    return (
        <Section
            title="Education"
        >
            <>
                {resumeContext.education.map((education) => (
                    <EducationRow
                        key={education.degree}
                        education={education}
                    />
                ))}

            </>
        </Section>
    )
}