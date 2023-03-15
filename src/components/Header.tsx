import React, { useContext } from 'react';
import { IResume, ResumeContext } from '@/context/ResumeContext';

export default function Header() : JSX.Element {

    const resumeContext = useContext<IResume>(ResumeContext);

    return (
        <div>
            <h1 className='text-2xl'>{resumeContext.name}</h1>
            <h2>{resumeContext.title}</h2>
            <p>
                {resumeContext.address.city}, {resumeContext.address.state}
            </p>
            {
                resumeContext.links.map(({name, url}) => (
                    <div key={name}>
                        <a href={url}>{name}</a>
                    </div>
                ))
            }
        </div>
    )
};