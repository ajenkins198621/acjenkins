import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import EducationRow from "./EducationRow";

export default function Education(): JSX.Element {
    const resumeContext = useContext(ResumeContext);
    return (
        <div>
            <h2>Education</h2>
            {resumeContext.education.map((education) => (
                <EducationRow
                    key={education.degree}
                    education={education}
                />
            ))}
        </div>
    )
}