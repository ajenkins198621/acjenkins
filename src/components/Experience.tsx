import React, { useContext} from "react";
import { ResumeContext } from "@/context/ResumeContext";
import ExperienceRow from "./ExperienceRow";

export default function Experience() : JSX.Element {
    const resumeContext = useContext(ResumeContext);
    return (
        <div>
            <h2>Experience</h2>
            {
                resumeContext.employmentHistory.map((employmentHistory) => (
                    <ExperienceRow
                        key={employmentHistory.company}
                        employmentHistory={employmentHistory}
                    />
                ))
            }
        </div>
    )

}