import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import ExperienceRow from "./ExperienceRow";
import Section from "./Section";

export default function Experience(): JSX.Element {
    const resumeContext = useContext(ResumeContext);
    return (
        <Section
            title="Experience"
        >
            <div>
                {
                    resumeContext.employmentHistory.map((employmentHistory) => (
                        <ExperienceRow
                            key={employmentHistory.company}
                            employmentHistory={employmentHistory}
                        />
                    ))
                }
            </div>
        </Section>
    )

}