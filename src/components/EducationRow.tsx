import React from "react";
import { IEducation } from "@/context/ResumeContext";

interface IProps {
    education: IEducation
}

export default function EducationRow({ education }: IProps) : JSX.Element {
    const { startDate, endDate, location, school, degree } = education;
    return (
        <div>
            <p>{school}</p>
            <p>{startDate} - {endDate}<br />{location}</p>
            <p>{degree}</p>
        </div>
    )

}