import { createContext } from 'react';

export type CMSContextType = {
    professionalExperiences: any[],
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

const defaultState : CMSContextType = {
    professionalExperiences: [],
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