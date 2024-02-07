import React, { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export const useLayout = () => useContext(LayoutContext);

export const LayoutProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <LayoutContext.Provider value={{ navOpen, toggleNav }}>
            {children}
        </LayoutContext.Provider>
    );
};
