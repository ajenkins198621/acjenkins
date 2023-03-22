import React, { useContext } from 'react';
import { SiteContext } from '@/context/siteContext';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function useMobileMenu() {
    const { state, dispatch } = useContext<any>(SiteContext);
    const { isMobileMenuOpen } = state;

    return {
        isMobileMenuOpen,
        dispatch
    }
}

export default function MobileMenu(): JSX.Element {

    const { isMobileMenuOpen, dispatch } = useMobileMenu();

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
                    className="absolute top-0 right-0 p-4 cursor:pointer"
                >
                    <FontAwesomeIcon className='w-8 h-8 text-gray-700 hover:text-gray-900' icon={faX} />
                </a>
            </div>
        </div>

    )

};