"use client";

// * React:
import React, { useState, createContext } from 'react';

// * Next:
import { Metadata } from 'next';
import { Poppins } from 'next/font/google'
import './globals.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '300']
})

export const Metadata = {
    title: 'pyother-news-searcher'
}

// * Components:
import { Header, Footer, Content } from '@/components';

export const ThemeContext = createContext('light');

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');
        
    return (
        <html lang="en" className={poppins.className}>
            <body className={theme}>
                <ThemeContext.Provider value={theme}>
                    <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)] dark:bg-[var(--color-bg-primary-dark)] text-[var(--color-text-primary)] dark:text-[var(--color-text-primary-dark)]">
                        <Header 
                            toggleTheme={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
                        />
                        <Content >
                            {children}  
                        </Content>
                        <Footer />
                    </div>
                </ThemeContext.Provider>
            </body>
        </html>
    )
}
