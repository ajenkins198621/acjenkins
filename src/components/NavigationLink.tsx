import React from 'react';
import { gsap } from 'gsap';

interface Props {
    label: string;
    href: string;
    className: string;
    icon?: JSX.Element;
    target: undefined | '_blank';
    onClick: () => void;
}

const NavigationLink: React.FC<Props> = ({ label, href, className, icon,  onClick }) => {
    const linkRef = React.useRef<HTMLAnchorElement | null>(null);

    return (
        <a
            ref={linkRef}
            href={href}
            className={`${className}${icon ? ' icon' : ''}`}
            onClick={onClick}
            title={label}
        >
            {!!icon ? icon : label}
        </a>
    );
}

export default NavigationLink;
