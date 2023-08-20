import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Navigation() {
    const [selectedIdx, setSelectedIdx] = useState<number>(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const navContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.classList.add('mobile-menu-open');
        } else {
            document.body.classList.remove('mobile-menu-open');

        }
    }, [isMobileMenuOpen]);

    useLayoutEffect(() => {
        // Fades navigation in
        let ctx = gsap.context(() => {
            gsap.to(navContainerRef.current, { opacity: 1, duration: 4, ease: 'power2.out' });
          }, navContainerRef);
          return () => ctx.revert();
    }, []);

    const handleHover = (type: 'enter' | 'leave') => {
        const directions : {
            left: number;
            right: number;
        } = {
            left: type === 'enter' ? -10 : 0,
            right: type === 'enter' ? 10 : 0,
        }
        gsap.to('.navigation-logo-left-caret', { x: directions.left });
        gsap.to('.navigation-logo-right-caret', { x: directions.right });
    }

    const links = [
        {
            name: 'About',
            href: '#about'
        },
        {
            name: 'Projects',
            href: '#projects'
        },
        {
            name: 'Experience',
            href: '#experience'
        },
        {
            name: 'Contact',
            href: '#contact'
        },
    ];

    return (
        <div className="container">
            <div
                className="navigation-container"
                onMouseEnter={() => handleHover('enter')}
                onMouseLeave={() => handleHover('leave')}
                ref={navContainerRef}

            >
                <div className="navigation-shadow" />
                <nav className='navigation'>
                    <div className="navigation-logo">
                        <a href="#top">
                            <span className="navigation-logo-left-caret">&#60;</span>
                            <span className="navigation-logo-name">Austin Jenkins</span>
                            <span className="navigation-logo-right-caret">&#47;&#62;</span>
                        </a>
                    </div>
                    <ul className="desktop-navigation">
                        {
                            links.map(({ name, href }, idx) => (
                                <li key={href}>
                                    <a
                                        className={selectedIdx === idx ? 'active' : ''}
                                        href={href}
                                        onClick={() => {
                                            setSelectedIdx(idx)
                                        }}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <button
                        className="mobile-navigation-hamburger-menu"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 15H42.4688M9 25.3594H42.4688M9 35.7188H42.4688" stroke="#ECE7DF" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                    </button>
                </nav>
                <div
                    className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <nav className={`mobile-navigation${isMobileMenuOpen ? ' menu-active' : ''}`}>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mobile-navigation-close"
                    >
                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 2.5625C10.5062 2.5625 2.5625 10.5062 2.5625 20.5C2.5625 30.4938 10.5062 38.4375 20.5 38.4375C30.4938 38.4375 38.4375 30.4938 38.4375 20.5C38.4375 10.5062 30.4938 2.5625 20.5 2.5625ZM27.4187 29.4688L20.5 22.55L13.5813 29.4688L11.5312 27.4187L18.45 20.5L11.5312 13.5813L13.5813 11.5312L20.5 18.45L27.4187 11.5312L29.4688 13.5813L22.55 20.5L29.4688 27.4187L27.4187 29.4688Z" fill="#ECE7DF" />
                        </svg>
                    </button>

                    <ul>
                        {
                            links.map(({ name, href }, idx) => (
                                <li key={href}>
                                    <a
                                        href={href}
                                        onClick={() => {
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        {name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}