import React, { useContext } from 'react';
import { IResume, ResumeContext } from '@/context/ResumeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header(): JSX.Element {

    const resumeContext = useContext<IResume>(ResumeContext);

    return (
        <header className='sticky top-0 z-50 bg-sky-700 border-sky-900 drop-shadow-xl w-full'>
            <div className='container py-4 mb-12 text-sky-400 font-bold'>
                <div className='flex justify-between items-end'>
                    <div>
                        <h1 className='text-5xl text-sky-100 font-black -mb-2'>
                            {resumeContext.name}
                        </h1>
                        <h2 className='text-xl'>{resumeContext.title}</h2>
                    </div>
                    <div className="flex space-x-4">
                        {
                            resumeContext.links.map(({ name, url, icon }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target={'_blank'}
                                    className="bg-sky-200 hover:bg-sky-300 text-sky-700 hover:text-sky-900 py-2 px-6 rounded-lg flex items-center"
                                >
                                    <FontAwesomeIcon className='w-5 h-5 mr-2' icon={icon} />
                                    {name}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </header>
    )
};