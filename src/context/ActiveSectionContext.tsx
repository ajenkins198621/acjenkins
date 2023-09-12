import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ActiveSectionContextProps {
    activeSection: string | null;
    setActiveSection: React.Dispatch<React.SetStateAction<string | null>>;
}

const ActiveSectionContext = createContext<ActiveSectionContextProps | undefined>(undefined);

interface ActiveSectionProviderProps {
    children: ReactNode;
}

export const ActiveSectionProvider: React.FC<ActiveSectionProviderProps> = ({ children }) => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    return (
        <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </ActiveSectionContext.Provider>
    );
};

export const useActiveSection = (): ActiveSectionContextProps => {
    const context = useContext(ActiveSectionContext);
    if (!context) {
        throw new Error("useActiveSection must be used within an ActiveSectionProvider");
    }
    return context;
};
