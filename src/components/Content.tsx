// * React:
import React from 'react';

const Content = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="w-full p-[var(--spacing)] flex-1">
            {children}
        </div>
    )
}

export default Content;