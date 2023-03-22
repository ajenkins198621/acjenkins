import React from "react";
import { IEducation } from "@/context/ResumeContext";
import OrganizationDetails from "./OrganizationDetails";

interface IProps {
    education: IEducation
}

export default function EducationRow({ education }: IProps): JSX.Element {
    const { startDate, endDate, location, school, degree } = education;
    return (
        <div className="p-4 lg:p-6">
            <OrganizationDetails
                title={degree}
                company={school}
                startDate={startDate}
                endDate={endDate}
                location={location}
            />
        </div>
    )
}