import './globals.css';

export const metadata = {
    title: 'Pablo Ochoa | Full Stack Web Developer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="min-h-screen bg-white text-black">
                {children}
            </body>
        </html>
    );
}