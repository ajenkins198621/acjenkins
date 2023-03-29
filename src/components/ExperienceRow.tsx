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
                            <li
                                key={idx}
                                className={`flex ${idx != bullets.length - 1 ? `mb-4` : ''}`} 
                            >
                                <svg
                                    className="mt-1 w-6 h-6 mr-2 text-green-500 dark:text-green-400 flex-shrink-0"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                {bullet}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
};