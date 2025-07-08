import './globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata = {
    title: 'Pablo Ochoa | Full Stack Dev',
    description: "Portafolio de Pablo Ochoa, donde expongo mis proyectos y habilidades.",
    icons: {
    icon: '/logo.svg',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`bg-bg-primary leading-relaxed text-primary-text antialiased selection:bg-bg-button selection:text-txt-button ${josefin.className}`}>
                {children}
            </body>
        </html>
    );
}