import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";

export default function ProfessionalSummary(): JSX.Element {
    const resumeContext = useContext(ResumeContext);

    return (
        <div>
            <h2>Profile</h2>
            <p>
                {resumeContext.professionalSummary}
            </p>
        </div>
    )

}