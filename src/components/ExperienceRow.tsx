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
        <div className={`p-4 lg:p-6 ${isEven ? '' : ' bg-gray-50 border-b border-t border-100'}`}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-full mb-4 lg:mb-0 lg:w-1/3">
                    <OrganizationDetails
                        title={title}
                        company={company}
                        startDate={startDate}
                        endDate={endDate}
                        location={location}
                    />
                </div>
                <ul className="list-disc pl-5 lg:pl-2 w-full lg:w-2/3">
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