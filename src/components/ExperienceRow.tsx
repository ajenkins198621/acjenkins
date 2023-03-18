import React, { useContext } from "react";
import { IEmploymentHistory, ResumeContext } from "@/context/ResumeContext";

interface IProps {
    employmentHistory: IEmploymentHistory;
}

export default function ExperienceRow({ employmentHistory }: IProps): JSX.Element {

    const { startDate, endDate, location, company, title, bullets } = employmentHistory;

    return (
        <div className="mb-12">
            <div className="flex">
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold">
                        {title}<br />{company}
                    </h3>
                    <p>{startDate} - {endDate}</p>
                    <p>{location}</p>

                </div>
                <ul className="list-disc ml-8">
                    {
                        bullets.map((bullet, idx) => (
                            <li key={idx} className="mb-4">
                                {bullet}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

    )
};