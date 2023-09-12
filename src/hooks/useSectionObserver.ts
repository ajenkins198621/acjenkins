import { useEffect, useRef } from 'react';
import { useActiveSection } from '@/context/ActiveSectionContext';


export default function useSectionObserver (sectionId: string): React.RefObject<HTMLDivElement> {
    const { setActiveSection } = useActiveSection();
    const ref = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<number | null>(null); // To hold the timeout ID
    const TIMEOUT_MILLISECONDS = 100;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (timeoutRef.current !== null) {
                    clearTimeout(timeoutRef.current);
                }

                if (entry.isIntersecting) {
                    timeoutRef.current = window.setTimeout(() => {
                        setActiveSection(sectionId);
                    }, TIMEOUT_MILLISECONDS);
                }
            },
            {
                threshold: 0.6
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);  // Ensure timeout is cleared when component unmounts
            }
        };
    }, [setActiveSection, sectionId]);

    return ref;
};
