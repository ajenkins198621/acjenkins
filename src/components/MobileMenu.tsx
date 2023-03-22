import React, { useContext } from 'react';
import { SiteContext } from '@/context/siteContext';

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

    return (

        <div className={`fixed lg:hidden top-0 right-0 shadow-xl w-full h-full bg-gray-900/75 z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
            <div className={`fixed lg:hidden top-0 right-0 shadow-xl w-3/4 h-full bg-white z-20 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                <a onClick={() => dispatch({ type: 'TOGGLE_MOBILE_MENU' })} className="absolute top-0 right-0 p-4">
                    X
                </a>  
            </div>
        </div>

    )

};