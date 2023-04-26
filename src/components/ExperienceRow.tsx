import React from "react";
import OrganizationDetails from "./OrganizationDetails";
import { ProfessionalExperience } from "@/context/CMSContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

interface IProps {
    professionalExperience: ProfessionalExperience;
    isEven: boolean;
}

export default function ExperienceRow({ professionalExperience, isEven }: IProps): JSX.Element {

    const { cardImage, startDate, endDate, location, company, jobTitle, description } = professionalExperience;

    return (
        <div className={`p-4 lg:p-6 ${isEven ? '' : ' bg-gray-50 border-b border-t border-100'}`}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-1/3">
                    <OrganizationDetails
                        title={jobTitle}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                        location={location}
                    />
                </div>
                <ul className="list-disc pl-5 lg:pl-2 w-full lg:w-2/3 professional_experience">
                    {
                        documentToReactComponents(description.json as any)
                    }
                </ul>
            </div>
        </div>

    )
};