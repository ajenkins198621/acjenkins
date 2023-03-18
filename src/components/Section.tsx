import React from "react";

export default function Section({ children, title }: { children: React.ReactNode, title: string }): JSX.Element {
    return (
        <div className="container my-12">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <h2 className="text-3xl font-thin">
                        {title}
                    </h2>

                </div>
                <div className="border-t border-gray-200">
                    <div className="px-5 py-5">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};