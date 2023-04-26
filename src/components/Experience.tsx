import React, { useContext } from "react";
import ExperienceRow from "./ExperienceRow";
import Section from "./Section";
import { CMSContext } from "@/context/CMSContext";

export default function Experience(): JSX.Element {
    const { professionalExperiencesCollection } = useContext(CMSContext);
    return (
        <Section
            title="Experience"
        >
            <div>
                {
                    professionalExperiencesCollection.items.map((professionalExperience, idx) => (
                        <ExperienceRow
                            key={professionalExperience.jobTitle}
                            professionalExperience={professionalExperience}
                            isEven={idx % 2 === 0}
                        />
                    ))
                }
            </div>
        </Section>
    )

}