
import Image from 'next/image'
import { CurrentProjectType } from './CurrentProjects';
import CurrentProjectIcons from './CurrentProjectIcons';
import AnimateDual from './AnimateDual';

interface IProps {
    project: CurrentProjectType;
    layout: 'left' | 'right';
}

export default function CurrentProject({
    project,
    layout
}: IProps) {

    const {
        image,
        imageAlt,
        company,
        label,
        labelDefinition,
        title,
        dates,
        description,
        techStack
    } = project;

    return (
        <div className={`current-project-row ${layout}`}>
            <AnimateDual>
                <div className="current-project-image-section">
                    <Image
                        className='current-project-image'
                        src={image}
                        alt={imageAlt}
                    />
                    <span className='current-project-image-text'>
                        {company}
                    </span>
                </div>
                <div className="current-project-description-section">
                    {
                        label && (
                            <div className='label'>
                                {label}
                                {/* <span className='label-definition'>
                                    {labelDefinition}
                                </span> */}
                            </div>
                        )
                    }

                    {
                        title || dates ? (
                            <div className='title-container'>
                                <div className='title'>
                                    {title}
                                </div>
                                <div className='dates'>
                                    {dates}
                                </div>
                            </div>
                        ) : null
                    }
                    <div className='description'>
                        {description}
                    </div>
                    <div className='tech-stack'>
                        <CurrentProjectIcons icons={techStack} />
                    </div>
                </div>
            </AnimateDual>
        </div>
    )
}