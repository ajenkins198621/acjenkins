import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { createContext } from 'react';

export interface IResume {
    name: string;
    title: string;
    address: {
        city: string;
        state: string;
    };
    links: {
        name: string;
        url: string;
        icon: IconProp
    }[];
    employmentHistory: IEmploymentHistory[];
    education: IEducation[];
    skills: ISkill[];
}

export interface IEmploymentHistory {
    startDate: string;
    endDate: string;
    location: string;
    company: string;
    title: string;
    bullets: string[];
}

export interface IEducation {
    startDate: string;
    endDate: string;
    location: string;
    school: string;
    degree: string;
}

export interface ISkill {
    name: string;
    level: number|string;
}

export const initialResume: IResume = {
    name: "Austin Jenkins",
    title: "Senior Front-end Software Engineer",
    address: {
        city: "Denver",
        state: "CO"
    },
    links: [
        // TODO ADD MEDIUM & TWITTER
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/austincjenkins/",
            icon: faLinkedin
        },
        {
            name: "GitHub",
            url: "https://github.com/ajenkins198621",
            icon: faGithub
        },
        {
            name: "Resume",
            url: "https://resume.io/r/uCJjsnoDX",
            icon: faFile
        }

    ],
    employmentHistory: [
        {
            startDate: "Oct 2021",
            endDate: "Present",
            location: "Broomfield, CO",
            company: "Vail Resorts",
            title: "Senior Lead Front-end Engineer",
            bullets: [
                "Spearheaded the front-end development project for three new resort sites joining the Vail Resorts portfolio. Utilized ReactJS and custom CSS/LESS to create an unforgettable user experience that'll have you screaming \"woohoo!\" from the mountaintop.",
                "Collaborated with cross-functional teams, including product owners, management, infrastructure, and QA, to create a new JavaScript Digital Data Object. This bad boy can be read by multiple third-party services, so we can all get on the same page and make it rain.",
                "Implemented some seriously slick A/B tests across our lessons, checkout, and more. These tests resulted in incremental revenues totaling millions of dollars! Cue the confetti.",
                "Refactored some old, crusty code (a.k.a. legacy jQuery, RequireJS, and HTML templates) to modern, sleek ReactJS components. We even used React's Context API for super-efficient state management, making our codebase much more maintainable and scalable.",
                "We kicked our analytics platform up a notch by switching over to Webpack and TypeScript. These upgrades enhanced our performance and maintainability, and boy, do we love a good upgrade!"
            ]
        },
        {
            startDate: "Apr 2019",
            endDate: "Present",
            location: "Denver, CO",
            company: "Swaptimal",
            title: "Lead Full Stack Web Developer",
            bullets: [
                "Played a key-role in roadmap development, software architecture design and execution of the application which is currently used by 100’s of auto dealerships.",
                "Built RESTful API to communicate between JavaScript front-end and PHP back-end.",
                "Successfully integrated Stripe payment gateway and during the beta launch which increased sales to over $125k in annual revenues with continued month-to-month user adoption and a mere 3% annual churn rate.",    
                "Worked alongside sales and onboarding teams to build an internal admin dashboard and CRM resulting in an average time savings of 5/hrs per week per internal user and a cost savings of over $2k per month."
            ]
        },
        {
            startDate: "Oct 2015",
            endDate: "Jun 2017",
            location: "New York City, NY",
            company: "TravMedia",
            title: "Full Stack Web Developer",
            bullets: [
                "Led the complete refactor and redesign project of customer-facing application from complex multi-page PHP front-end, to an RESTful API-driven SPA using Vanilla JavaScript, jQuery and Bootstrap.",
                "Implemented best practices in responsive design, performance optimization, and accessibility to deliver a user-friendly and engaging experience.",
                "Developed appointment scheduling platform for users attending TravMedia events, which resulted in participants increasing the number of their meetings by 50% and provided them with the data to have more meaningful meetings.",
                "Cultivated a more engaging engineering process by encouraging communication, implemented bug tracking software and hiring a Junior Web Developer under my management in the NYC office."
            ]
        },
        {
            startDate: "Jan 2014",
            endDate: "Apr 2016",
            location: "New York, NY",
            company: "ThinkWow",
            title: "Lead Developer",
            bullets: [
                "Developed a robust B2B survey and polling web application using Laravel on the back-end and Vanilla JavaScript for the front-end.",
                "Managed end-to-end project lifecycle, from requirements gathering and solution design to coding, testing, and deployment, ensuring timely delivery of high-quality code and optimal user experiences.",
                "Developed and implemented a custom analytics platform using Piwik, an open-source web analytics software that provided granular insights into user behavior, traffic sources, and conversion rates, enabling data-driven decision-making and optimization."
            ]
        },
        {
            startDate: "Sep 2013",
            endDate: "Dec 2018",
            location: "Jersey City, NJ",
            company: "Mitz Kids",
            title: "Co-founder & CTO",
            bullets: [
                "Designed and developed a highly customized Shopify e-commerce theme using HTML and JavaScript, leveraging best practices in responsive design, accessibility, and SEO to enhance the user experience and drive sales.",
                "Optimized website performance and page load speeds by implementing efficient code practices, including minification and lazy loading, resulting in a 25% increase in site speed and a 45% increase in conversion rates.",
                "Conducted extensive A/B testing and user research to identify opportunities for further optimization, including implementing personalized product recommendations, improving checkout flow, and enhancing mobile responsiveness."
            ]
        },
        {
            startDate: "Aug 2011",
            endDate: "Jan 2015",
            location: "Jersey City, NJ",
            company: "CodeSquare",
            title: "Co-Founder and COO",
            bullets: [
                "Successfully completed the competitive New Jersey TechLaunch accelerator program, a seed-stage technology incubator that provided startups with mentorship, business training, key services, and exposure to qualified investors, positioning the company for growth and expansion.",
                "Developed and communicated the company's vision and strategies to stakeholders and customers.",
                "Directed the alignment of short-term goals and objectives while ensuring smooth daily operations, utilizing strategic planning and project management methodologies to deliver high-quality products and services on-time and within budget."
            ]
        },
        {
            startDate: "Sep 2010",
            endDate: "Jul 2012",
            location: "New York City, NY",
            company: "Webcollage (acquired by Syndigo)",
            title: "Project & Client Manager",
            bullets: [
                "Successfully introduced and trained customers on the Webcollage SaaS software, providing expert-level guidance on product features, best practices, and customization options, resulting in increased customer satisfaction and retention.",
                "Leveraged VBA and JavaScript to create customized tools and automated workflows that streamlined company tasks and increased efficiencies, resulting in significant time and cost savings."
            ]
        },

    ],
    education: [
        {
            'startDate': '2004',
            'endDate': '2008',
            'location': 'Rome, Italy',
            'school': 'The American University of Rome',
            'degree': 'Bachelor of Science in Business Administration'
        }
    ],
    skills: [
        {
            name: "JavaScript",
            level: "Experienced"
        },
        {
            name: "ReactJS",
            level: "Experienced"
        },
        {
            name: "Redux",  
            level: "Experienced"
        },
        {
            name: "TypeScript",
            level: "Skillful"
        },
        {
            name: "Next.js",
            level: "Skillful"
        },
        {
            name: "jQuery",
            level: "Experienced"
        },
        {
            name: "RequireJS",
            level: "Skillful"
        },
        {
            name: "Front-end Unit Testing",
            level: "Beginner"
        },
        {
            name: "HTML",
            level: "Experienced"
        },
        {
            name: "CSS / Less / Sass",
            level: "Experienced"
        },
        {
            name: "Tailwind CSS",
            level: "Skillful"
        },
        {
            name: "Storybook",
            level: "Novice"
        },
        {
            name: "Node.js",
            level: "Beginner"
        },
        {
            name: "PHP",
            level: "Experienced"
        },
        {
            name: "Laravel Framework",
            level: "Experienced"
        },
        {
            name: "MySQL",
            level: "Experienced"
        },
        {
            name: "Backend Unit Testing",
            level: "Experienced"
        },
        {
            name: "REST APIs",
            level: "Experienced"
        },
        {
            name: "Git",
            level: "Experienced"
        },
        {
            name: "Ant Design",
            level: "Skillful"
        },
        {
            name: "Bootstrap",
            level: "Experienced"
        },
        {
            name: "Responsive Design",
            level: "Experienced"
        }
    ]
}


export const ResumeContext = createContext<IResume>({} as IResume);