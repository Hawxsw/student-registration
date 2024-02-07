import React from 'react';
import Navigation from '../home/Navigation';
import { useLayout } from '../context/LayoutContext';

export default function DashboardLayout({ children }) {
    const { navOpen } = useLayout();
    return (
        <div style={{ marginLeft: navOpen ? '250px' : '100px' }}>
            <Navigation />
            <div>{children}</div>
        </div>
    )
}