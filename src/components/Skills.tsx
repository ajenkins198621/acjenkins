import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import SkillRow from "./SkillRow";

export default function Skills(): JSX.Element {
    const resumeContext = useContext(ResumeContext);
    return (
        <div>
            <h2>Skills</h2>
            {
                resumeContext.skills.map((skill) => (
                    <SkillRow
                        key={skill.name}
                        skill={skill}
                    />
                ))
            }
        </div>
    )
}