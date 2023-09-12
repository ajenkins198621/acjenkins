import { StaticImageData } from "next/image";
import CurrentProject from "./CurrentProject";
import SectionHeader from "./SectionHeader";
import VailResortsImage from './images/vail-resorts-image.jpeg';
import SwaptimalImage from './images/swaptimal-image.jpeg';
import QuizNibbleImage from './images/quiznibble-image.jpeg';
import DividerBottom from "./DividerBottom";
import useSectionObserver from '@/hooks/useSectionObserver';

export type CurrentProjectType = {
    image: StaticImageData,
    imageAlt: string,
    company: string,
    label: string,
    labelDefinition: string,
    title: string,
    dates: string,
    description: string,
    techStack: string[]
}

export default function CurrentProjects() {
    const ref = useSectionObserver('currentProjects');

    const currentProjects : CurrentProjectType[] = [
        {
            image: VailResortsImage,
            imageAlt: 'Snowboarder at Breckenridge Ski Resort',
            company: 'Vail Resorts',
            label: 'Day Job',
            labelDefinition: 'This is my day job',
            title: 'Senior Lead Front-end Developer',
            dates: 'Oct 2021 - Current',
            description: 'I currently work on the A/B Testing team releasing features across the 35+ public-facing e commerce resort sites.   My favorite and most challenging project to-date has been building a pass comparison selector.',
            techStack: ['React', 'JavaScript', 'TypeScript', 'Less', 'jQuery', 'Bootstrap']
        },
        {
            image: SwaptimalImage,
            imageAlt: 'Car Dealership',
            company: 'Swaptimal',
            label: 'Maintainer',
            labelDefinition: 'I maintain and contribute to the Swaptimal codebase to ensure customers are happy and to be able to add new tech to the stack.',
            title: 'Lead Full Stack Web Developer',
            dates: 'Apr 2019 - Current',
            description: 'Swaptimal is a B2B SaaS I architected and developed.  While I stopped working full time on this project in Oct 2021, I still maintain the app as we have dealerships using it and I enjoy being able to add new tech to the stack',
            techStack: ['React', 'Redux', 'TypeScript', 'NodeJS', 'Laravel', 'Tailwind', 'Ant Design']
        },
        {
            image: QuizNibbleImage,
            imageAlt: 'Code Editor',
            company: 'QuizNibble',
            label: 'Just for fun',
            labelDefinition: '',
            title: '',
            dates: '',
            description: 'This is a side project I started to help with my studies for my Master’s program and general programming skills.  It enables users to take quizzes on things such as data structures and algorithms, system design, ReactJS, etc.. This is still in progress.',
            techStack: ['React', 'TypeScript', 'Laravel']
        }

    ]

    return (
        <section className="current-projects-container" id="projects" ref={ref}>
            <div className="container">
                <SectionHeader title="Current Projects" theme="brown" />

                <div className="current-projects-container-inner">
                    {
                        currentProjects.map((project, index) => (
                            <CurrentProject
                                key={index}
                                project={project}
                                layout={index % 2 === 0 ? 'left' : 'right'}
                            />
                        ))
                    }
                </div>
            </div>
            <DividerBottom theme="light" />
        </section>
    )
}