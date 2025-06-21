// * React:
import React from 'react';

const Content = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="container flex-1">
            {children}
        </div>
    )
}

export default Content;