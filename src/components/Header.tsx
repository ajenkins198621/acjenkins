import React, { useContext, useState } from 'react';
import { IResume, ResumeContext } from '@/context/ResumeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SiteContext } from '@/context/siteContext';


function useHeader() {
    const { dispatch } = useContext<any>(SiteContext);

    const resumeContext = useContext<IResume>(ResumeContext);

    return {
        resumeContext,
        dispatch
    }
}


export default function Header(): JSX.Element {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const {
        resumeContext,
        dispatch
    } = useHeader();

    return (
        <header className='sticky top-0 z-10 bg-gradient-to-bl from-sky-500 to-sky-700 border-sky-900 drop-shadow-xl w-full'>
            <div className='container py-4 mb-12 text-sky-400 font-bold'>
                <div className='flex justify-between items-center lg:items-end'>
                    <div>
                        <h1
                            className='text-3xl lg:text-5xl text-sky-100 font-black -mb-2 flex items-center'
                            onMouseOver={() => {
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false);
                            }}
                        >
                            <div className='relative'>
                                <span className={`text-3xl -ml-6 mt-2 transition-all ease-linear absolute ${isHovered ? '-ml-8' : ''}`}>&lt;</span>
                                {resumeContext.name.replace(' ', '')}
                                <span className={`text-3xl ml-2 mt-2 transition-all ease-linear absolute ${isHovered ? 'ml-4' : ''}`}>/&gt;</span>
                            </div>
                        </h1>
                        <h2 className='lg:text-xl'>{resumeContext.title}</h2>
                    </div>
                    <div className='lg:hidden'>
                        <div
                            className="space-y-1.5 cursor-pointer"
                            onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
                        >
                            <span className="block rounded h-1 w-8 animate-pulse bg-sky-400"></span>
                            <span className="block rounded h-1 w-8 animate-pulse bg-sky-400"></span>
                            <span className="block rounded h-1 w-8 animate-pulse bg-sky-400"></span>
                        </div>
                    </div>
                    <div className="hidden lg:flex space-x-4">
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