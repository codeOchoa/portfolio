import './globals.css';
import { Josefin_Sans } from 'next/font/google';

const josefin = Josefin_Sans({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });

export const metadata = {
    title: 'Pablo Ochoa',
    description: "Portafolio de Pablo Ochoa, donde expongo mis proyectos y habilidades.",
    icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/portfolio-codeochoa.firebasestorage.app/o/logo.svg?alt=media&token=04f52c4b-2822-4d19-af92-1436a99a31e2',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={`bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900 ${josefin.className}`}>
                {children}
            </body>
        </html>
    );
}