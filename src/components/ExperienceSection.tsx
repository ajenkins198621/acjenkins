import DividerBottom from "./DividerBottom";
import SectionHeader from "./SectionHeader";

function Arrow(props: { direction: 'left' | 'right' }) {
    return (
        <svg width="20" height="40" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            {
                props.direction === 'left' ?
                    <path d="M0 0L10 10L0 20L0 0Z" />
                    :
                    <path d="M10 0L0 10L10 20V0Z" />

            }
        </svg>
    )
}

export default function ExperienceSection() {

    const sections: {
        date: string,
        title: string,
    }[] = [
            {
                date: 'Oct 2021',
                title: 'Started at Vail Resorts as a Senior Lead Front-end Developer'
            },
            {
                date: 'Apr 2019',
                title: 'Started developing and building Swaptimal MVP'
            },
            {
                date: 'Oct 2015',
                title: 'Started working at TravMedia'
            },
            {
                date: 'Jan 2014',
                title: 'Started working at ThinkWow'
            },
            {
                date: 'Oct 2013',
                title: 'Started working at Mitz Kids'
            },
            {
                date: 'Oct 2011',
                title: 'Started working at CodeSquare'
            },
            {
                date: 'Sept 2010',
                title: 'Started working at WebCollage'
            },
            {
                date: 'May 2008',
                title: 'Graduated from The American University of Rome'
            },

        ]
    return (
        <div className="experience-container">
            <div className="container">
                <SectionHeader title="Experience Timeline" theme="blue" />

                <div className="timeline">
                    <div className="timeline-point start" />
                    {
                        sections.map((section, index) => {
                            const direction: 'left' | 'right' = index % 2 === 0 ? 'left' : 'right'
                            return (
                                <div className="timeline-event" key={index}>
                                    <div className={`content ${direction}`}>
                                        {
                                            direction === 'left' &&
                                            <Arrow direction="left" />
                                        }
                                        <div className="title">{section.date}</div>
                                        <div className="description">{section.title}</div>
                                        {
                                            direction === 'right' &&
                                            <Arrow direction="right" />
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="timeline-point end" />
                </div>
            </div>
            <DividerBottom theme="blue" />
        </div>
    )
}