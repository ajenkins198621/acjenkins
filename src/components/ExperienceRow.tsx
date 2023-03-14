import React, { useContext } from "react";
import { IEmploymentHistory, ResumeContext } from "@/context/ResumeContext";

interface IProps {
    employmentHistory: IEmploymentHistory;
}

export default function ExperienceRow({ employmentHistory }: IProps): JSX.Element {

    const  { startDate, endDate, location, company, title, bullets } = employmentHistory;

    return (
        <div>
            <p>
                {title}, {company}
            </p>
            <p>
                {startDate} - {endDate}<br />
                {location}
            </p>
            <ul>
                {
                    bullets.map((bullet, idx) => (<li key={idx}>{bullet}</li>))
                }
            </ul>
        </div>

    )
};