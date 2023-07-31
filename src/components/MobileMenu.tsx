import React, { useContext } from 'react';
import { SiteContext } from '@/context/siteContext';
import { IResume, ResumeContext } from '@/context/ResumeContext';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function useMobileMenu() {
    const { state, dispatch } = useContext<any>(SiteContext);
    const { links } = useContext<IResume>(ResumeContext);
    const { isMobileMenuOpen } = state;

    return {
        isMobileMenuOpen,
        links,
        dispatch
    }
}

export default function MobileMenu(): JSX.Element {

    const { isMobileMenuOpen, dispatch, links } = useMobileMenu();

    const toggleMobileMenu = () => dispatch({ type: 'TOGGLE_MOBILE_MENU' });

    return (

        <div
            className={`fixed lg:hidden top-0 right-0 shadow-xl w-full h-full bg-gray-900/75 z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            onClick={toggleMobileMenu}
        >
            <div
                className={`fixed lg:hidden top-0 right-0 shadow-xl w-3/4 h-full bg-white z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                onClick={(e) => e.stopPropagation()}
            >
                <a
                    onClick={toggleMobileMenu}
                    className="absolute top-6 right-12 cursor:pointer"
                >
                    <FontAwesomeIcon className='w-10 h-10 text-rose-600 focus:text-gray-700' icon={faX} />
                </a>
                <ul className='flex flex-col h-full w-full mt-16'>

                    {links.map((link, index) => (
                        <li key={index} className='my-3'>
                            <a
                                href={link.url}
                                className='pl-4 py-3 text-2xl font-bold text-rose-600 focus:text-green flex items-center w-full focus:bg-sky-200'
                                onClick={toggleMobileMenu}
                            >
                                <FontAwesomeIcon className='w-8 h-8 mr-2' icon={link.icon} />
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )

};