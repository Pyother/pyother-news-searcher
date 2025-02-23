"use client";

// * React and Redux:
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import StoreProvider from '../lib/StoreProvider';
import { setData } from '../lib/features/dataFeatures/NewsDataSlice';

const RootLayout = ({ children }) => {

    useEffect(() => {
        
    }, []);

    return (
        <StoreProvider>
            <html>
                <body>
                    {children}
                </body>
            </html>
        </StoreProvider>
    )
}

export default RootLayout;