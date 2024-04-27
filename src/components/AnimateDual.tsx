import { useEffect, useRef, cloneElement, Children } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";

// Check out https://www.algolia.com/... I love their search bar

gsap.registerPlugin(ScrollTrigger);

export default function AnimateDual({
    children,
}: {
    children: [JSX.Element, JSX.Element];
}) {



    if (Children.toArray(children).length !== 2) throw new Error('AnimateDual must have exactly 2 children');

    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (leftRef.current) {
            gsap.set(leftRef.current, { autoAlpha: 0, x: '-100%' });
            gsap.to(leftRef.current, {
                autoAlpha: 1,
                x: '0%',
                scrollTrigger: {
                    trigger: leftRef.current,
                    start: 'top 80%',  // Start the animation when the top of the item hits 80% from the top of the viewport
                    end: 'top 60%',
                    scrub: true,
                    // once: true,
                }
            });
        }
        if (rightRef.current) {
            gsap.set(rightRef.current, { autoAlpha: 0, x: '100%' });
            gsap.to(rightRef.current, {
                autoAlpha: 1,
                x: '0%',
                scrollTrigger: {
                    trigger: rightRef.current,
                    start: 'top 80%',
                    end: 'top 60%',
                    scrub: true,
                    // once: true,
                }
            });
        }
    }, []);

    const childrenWithRefs = Children.map(children, (child: JSX.Element, index) => {
        return cloneElement(child, { ref: index === 0 ? leftRef : rightRef });
    });

    return <>{childrenWithRefs}</>;
}