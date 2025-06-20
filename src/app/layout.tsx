import { Metadata } from 'next';

export const Metadata = {
    title: 'pyother-news-searcher'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
        
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}
