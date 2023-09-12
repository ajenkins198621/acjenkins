import DividerBottom from "./DividerBottom";
import SectionHeader from "./SectionHeader"
import SkillCard from "./SkillCard"
import useSectionObserver from '@/hooks/useSectionObserver';

export type Skill = {
    title: string,
    skills: {
        name: string,
        years: number,
        projects: number | 'Many'
    }[]
};

export default function SkillsSection() {
    const ref = useSectionObserver('skills');

    const skills: Skill[] = [
        {
            title: 'Front-end Languages',
            skills: [
                {
                    name: 'JavaScript',
                    years: 8,
                    projects: 'Many',
                },
                {
                    name: 'HTML',
                    years: 8,
                    projects: 'Many',
                },
                {
                    name: 'CSS',
                    years: 8,
                    projects: 'Many',
                },
                {
                    name: 'TypeScript',
                    years: 3,
                    projects: 2,
                },
            ]
        },
        {
            title: 'FE Libs & Frameworks',
            skills: [
                {
                    name: 'jQuery',
                    years: 8,
                    projects: 'Many',
                },
                {
                    name: 'ReactJS',
                    years: 5,
                    projects: 5,
                },
                {
                    name: 'Redux',
                    years: 3,
                    projects: 1,
                },
                {
                    name: 'Next.JS',
                    years: 2,
                    projects: 1,
                },
                {
                    name: 'Jest',
                    years: 1,
                    projects: 1,
                },
                {
                    name: 'React Testing Library',
                    years: 1,
                    projects: 1,
                },
            ]
        },
        {
            title: 'Styling & Component Libs',
            skills: [
                {
                    name: 'Sass',
                    years: 4,
                    projects: 2,
                },
                {
                    name: 'Less',
                    years: 2,
                    projects: 1,
                },
                {
                    name: 'Tailwind',
                    years: 4,
                    projects: 2,
                },
                {
                    name: 'Ant Design',
                    years: 3,
                    projects: 1,
                },
                {
                    name: 'Bootstrap',
                    years: 8,
                    projects: 4,
                },
            ]
        },
        {
            title: 'Back-end & APIs',
            skills: [
                {
                    name: 'PHP',
                    years: 7,
                    projects: 5,
                },
                {
                    name: 'Laravel',
                    years: 5,
                    projects: 3,
                },
                {
                    name: 'NodeJS',
                    years: 2,
                    projects: 2,
                },
                {
                    name: 'GraphQL',
                    years: 1,
                    projects: 1,
                },
                {
                    name: 'PHPUnit/Pest',
                    years: 3,
                    projects: 2,
                },
                {
                    name: 'Python',
                    years: 1,
                    projects: 1,
                },
                {
                    name: 'MySQL / ORM',
                    years: 6,
                    projects: 4,
                },
            ]
        },
        {
            title: 'Cloud, Build & Deploy',
            skills: [
                {
                    name: 'AWS',
                    years: 1,
                    projects: 1
                },
                {
                    name: 'DigitalOcean',
                    years: 5,
                    projects: 4
                },
                {
                    name: 'Bamboo',
                    years: 2,
                    projects: 1
                },
                {
                    name: 'Octopus',
                    years: 2,
                    projects: 1
                },
                {
                    name: 'Laravel Forge',
                    years: 4,
                    projects: 3
                },
            ]
        },
        {
            title: 'Best Practices',
            skills: [
                {
                    name: 'Front-end Unit Testing',
                    years: 1,
                    projects: 1
                },
                {
                    name: 'Back-end Unit Testing',
                    years: 5,
                    projects: 4
                },
                {
                    name: 'Agile Development',
                    years: 2,
                    projects: 1
                },
                {
                    name: 'UI Design',
                    years: 1,
                    projects: 1
                },
                {
                    name: 'Responsive',
                    years: 8,
                    projects: 5
                },
            ]
        },

    ]
    return (
        <section className="skills-container" id="skills" ref={ref}>
            <div className="container">
                <SectionHeader title="Skills" theme="brown" />
                <div className="skill-cards">
                    {
                        skills.map((skill, index) => <SkillCard key={index} skill={skill} />)
                    }
                </div>
            </div>
            <DividerBottom theme="light" />
        </section>
    )
}