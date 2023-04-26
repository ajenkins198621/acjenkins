import { createContext } from 'react';

const defaultState = {
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