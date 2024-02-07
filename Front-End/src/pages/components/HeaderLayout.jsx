import React from 'react';
import Header from '../home/Header';
export default function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
        </div>
    )
}