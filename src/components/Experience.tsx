import React, { useContext } from "react";
import { IResume, ResumeContext } from "@/context/ResumeContext";
import ExperienceRow from "./ExperienceRow";
import Section from "./Section";

export default function Experience(): JSX.Element {
    const resumeContext = useContext<IResume>(ResumeContext);
    return (
        <Section
            title="Experience"
        >
            <div>
                {
                    resumeContext.employmentHistory.map((employmentHistory, idx) => (
                        <ExperienceRow
                            key={employmentHistory.company}
                            employmentHistory={employmentHistory}
                            isEven={idx % 2 === 0}
                        />
                    ))
                }
            </div>
        </Section>
    )

}