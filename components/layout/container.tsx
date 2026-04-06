import React from 'react';

export default function Container({
    className = '',
    children,
}: Readonly<{
    className?: string;
    children: React.ReactNode;
}>) {
    return (
        <div className={`container ${className}`}>
            {children}
        </div>
    );
}
