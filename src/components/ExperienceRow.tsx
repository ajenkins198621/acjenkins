import React, { useContext } from "react";
import { IEmploymentHistory, ResumeContext } from "@/context/ResumeContext";
import OrganizationDetails from "./OrganizationDetails";

interface IProps {
    employmentHistory: IEmploymentHistory;
    isEven: boolean;
}

export default function ExperienceRow({ employmentHistory, isEven }: IProps): JSX.Element {

    const { startDate, endDate, location, company, title, bullets } = employmentHistory;

    return (
        <div className={`p-6${isEven ? '' : ' bg-gray-50 border-b border-t border-100'}`}>
            <div className="flex">
                <div className="flex flex-col w-1/3">
                    <OrganizationDetails
                        title={title}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                        location={location}
                    />
                </div>
                <ul className="list-disc ml-2 w-2/3">
                    {
                        bullets.map((bullet, idx) => (
                            <li key={idx} className={idx != bullets.length - 1 ? `mb-4` : ''}>
                                {bullet}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
};