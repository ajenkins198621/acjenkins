import React from "react";
import BorderIcon from "./BorderIcon";
import { FaMountain } from 'react-icons/fa';
export default function Section({ children, title }: { children: React.ReactNode, title: string }): JSX.Element {
    return (
        <div className="container my-8 lg:my-12">
            <div className="overflow-hidden bg-white shadow-xl sm:rounded-lg relative">
                <div className="px-4 py-5 bg-black">
                    <h2 className="text-3xl font-black text-green">
                        {title}
                    </h2>

                </div>
                <div className="border-t border-gray-200">
                    {children}
                </div>
            </div>
        </div>
    )
};