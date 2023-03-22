import React from 'react';

interface IProps {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    location: string;
}

export default function OrganizationDetails({
    title,
    company,
    startDate,
    endDate,
    location
}: IProps): JSX.Element {
    return (
        <>
            <h3 className="text-lg font-bold text-amber-800 leading-tight">
                {title}
            </h3>
            <h3 className="text-lg text-gray-600">{company}</h3>
            <p className="text-sm text-gray-600">{startDate} - {endDate}</p>
            <p className="text-sm text-gray-600">{location}</p>
        </>
    )
}