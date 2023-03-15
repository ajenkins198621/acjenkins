import React from "react";

export default function Section({ children, title }: { children: React.ReactNode, title: string }): JSX.Element {
    return (
        <div className="mb-12">
            <div className="bg-gray-200 h-16 flex items-center mb-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-thin">
                        {title}
                    </h2>
                </div>
            </div>
            <div className="container mx-auto mb-8">
                {children}
            </div>
        </div>
    )
};