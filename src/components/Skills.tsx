import React, { useContext } from "react";
import { ResumeContext } from "@/context/ResumeContext";
import SkillRow from "./SkillRow";
import Section from "./Section";

export default function Skills(): JSX.Element {
    const resumeContext = useContext(ResumeContext);
    return (
        <Section
            title="Skills"
        >
            <div className="flex flex-wrap p-6">
                {
                    resumeContext.skills.map((skill) => (
                        <SkillRow
                            key={skill.name}
                            skill={skill}
                        />
                    ))
                }

            </div>
        </Section>
    )
}