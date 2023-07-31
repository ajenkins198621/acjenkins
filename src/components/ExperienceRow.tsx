import React from "react";
import OrganizationDetails from "./OrganizationDetails";
import { ProfessionalExperience } from "@/context/CMSContext";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaSnowboarding, FaSuitcaseRolling, FaTshirt } from "react-icons/fa";
import { BsFillCarFrontFill, BsExclamationLg } from "react-icons/bs";
import { IconType } from "react-icons";
import { GiSpiderWeb } from "react-icons/gi";

interface IProps {
    professionalExperience: ProfessionalExperience;
    isEven: boolean;
}

export default function ExperienceRow({ professionalExperience, isEven }: IProps): JSX.Element {

    const { 
        cardImage,
        startDate,
        endDate,
        location,
        company,
        jobTitle,
        description,
    } = professionalExperience;

    const getIcon = () => {
        let iconContainer = <React.Fragment />;
        let Icon: IconType = FaSnowboarding;
        switch(company) {
            case 'Vail Resorts':
                Icon = FaSnowboarding;
                break;
            case 'Swaptimal':
                Icon = BsFillCarFrontFill;
                break;
            case 'TravMedia':
                Icon = FaSuitcaseRolling;
                break;
            case 'ThinkWow':
                Icon = BsExclamationLg;
                break;
            case 'Mitz Kids':
                Icon = FaTshirt;
                break;
            case 'Webcollage (acquired by Syndigo)':
                Icon = GiSpiderWeb;
                break;
            default:
                break;
        }
        if(Icon) {
            iconContainer = (
                <div className="bg-rose-600 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex justify-center items-center text-center icon-bg">
                    <Icon className="text-3xl lg:text-4xl text-white" />
                </div>
            )
        }
        return iconContainer

    }

    return (
        <div className={`p-4 lg:p-6 ${isEven ? '' : ' bg-gray-50 border-b border-t border-100'}`}>
            <div className="flex flex-col lg:flex-row">
                <div className="flex justify-between w-full pl-5 lg:pl-0 mb-4 lg:mb-0 lg:w-1/3">
                    <div className="w-1/4">
                        {getIcon()}
                    </div>
                    <div className="w-3/4">
                        <div className="flex flex-col">
                            <OrganizationDetails
                                title={jobTitle}
                                company={company}
                                startDate={startDate}
                                endDate={endDate}
                                location={location}
                            />
                        </div>
                    </div>
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