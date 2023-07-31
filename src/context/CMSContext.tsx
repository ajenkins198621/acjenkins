import { createContext } from 'react';
import { IconType } from 'react-icons';

export type CMSContextType = {
    professionalExperiencesCollection: {
        items: ProfessionalExperience[]
    },
    generalInformation: {
        name: string,
        tagline: string,
        linkedInUrl: string,
        gitHubUrl: string,
        resumeUrl: string,
        aboutMeTitle: string,
        aboutMe: {
            json: any,
        }
    },
}

export type ProfessionalExperience = {
    cardImage: {
        url: string,
    },
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    location: string,
    description: {
        json: any,
    },
    Icon?: IconType,
}

const defaultState : CMSContextType = {
    professionalExperiencesCollection: {
        items: []
    },
    generalInformation: {
        name: '',
        tagline: '',
        linkedInUrl: '',
        gitHubUrl: '',
        resumeUrl: '',
        aboutMeTitle: '',
        aboutMe: {
            json: {},
        }
    },
}

export const CMSContext = createContext(defaultState);