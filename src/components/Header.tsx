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
        <header className='sticky top-0 z-10 bg-gray-100 drop-shadow-xl w-full'>
            <div className='container py-4 mb-12 text-slate-500 font-bold'>
                <div className='flex justify-between items-center lg:items-end'>
                    <div>
                        <h1
                            className='text-3xl lg:text-5xl text-slate-800 -mb-2 flex items-center'
                            onMouseOver={() => {
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => {
                                setIsHovered(false);
                            }}
                        >
                            <div className='relative'>
                                <span
                                    className={
                                        `text-2xl lg:text-3xl -ml-5 mt-0.5 lg:-ml-6 lg:mt-2 transition-all ease-linear absolute ${isHovered ? '-ml-7 lg:-ml-8' : ''}`
                                    }
                                >
                                    &lt;
                                </span>
                                {resumeContext.name.replace(' ', '')}
                                <span
                                    className={
                                        `text-2xl lg:text-3xl ml-1 mt-0.5 lg:ml-2 lg:mt-2 transition-all ease-linear absolute ${isHovered ? 'ml-3 lg:ml-4' : ''}`
                                    }
                                >
                                    /&gt;
                                </span>
                            </div>
                        </h1>
                        <h2 className='lg:text-xl'>{resumeContext.title}</h2>
                    </div>
                    <div className='lg:hidden'>
                        <div
                            className="space-y-1.5 cursor-pointer"
                            onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })}
                        >
                            <span className="block rounded h-1 w-8 animate-pulse bg-slate-400"></span>
                            <span className="block rounded h-1 w-8 animate-pulse bg-slate-400"></span>
                            <span className="block rounded h-1 w-8 animate-pulse bg-slate-400"></span>
                        </div>
                    </div>
                    <div className="hidden lg:flex space-x-4">
                        {
                            resumeContext.links.map(({ name, url, icon }) => (
                                <a
                                    key={name}
                                    href={url}
                                    target={'_blank'}
                                    className="bg-slate-300 hover:bg-slate-700 text-slate-800 hover:text-slate-200 py-2 px-6 rounded-lg flex items-center"
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