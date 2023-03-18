import React, { useContext } from 'react';
import { IResume, ResumeContext } from '@/context/ResumeContext';

export default function Header(): JSX.Element {

    const resumeContext = useContext<IResume>(ResumeContext);

    return (
        <header className='bg-sky-700 border-sky-900 drop-shadow-xl fixed w-full'>
            <div className='container py-4 mb-12 text-sky-400 font-bold'>
                <h1 className='text-5xl text-sky-100 font-black -mb-2'>
                    {resumeContext.name}
                </h1>
                <h2 className='text-xl'>{resumeContext.title}</h2>
                {/* <p className=''>
                    {resumeContext.address.city}, {resumeContext.address.state}
                </p> */}
                {
                    resumeContext.links.map(({ name, url }) => (
                        <div key={name}>
                            <a href={url}>{name}</a>
                        </div>
                    ))
                }
            </div>
        </header>
    )
};