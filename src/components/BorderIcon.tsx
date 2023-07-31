import { useState, useEffect } from "react";
import { FaTree, FaMountain } from 'react-icons/fa';

interface IProps {
    type: 'tree' | 'mountain';
    className?: string;
}

export default function BorderIcon({
    type,
    className
} : IProps): JSX.Element {

    const [repetitions, setRepetitions] = useState<number>(0);

    useEffect(() => {
        // Get width of the screen
        const width = window.innerWidth;
        // Calculate how many times we need to repeat the icon.  The icon's width is 30px.
        const repeat = Math.floor(width / 20);
        // Get the container element
        setRepetitions(repeat);

    }, []);

    return (
        <div className="flex overflow-x-hidden mt-16">
        {
            [...Array(repetitions)].map((_, index) => {
                return (
                    <FaMountain
                        key={index}
                        className={className || ""}
                        style={{
                            marginRight: '2px',
                            marginTop: index % 2 === 0 ? 10 : 0,
                            fontSize: index % 2 === 0 ? '30px' : '40px',
                        }} 
                    />
                )
            })
        }
        </div>
    )
}