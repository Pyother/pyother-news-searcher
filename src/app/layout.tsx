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

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
        
    return (
        <html lang="en" className={poppins.className}>
            <body>
                {children}
            </body>
        </html>
    )
}
