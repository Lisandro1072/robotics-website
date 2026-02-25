// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './(components)/layout/Navbar';
import Footer from './(components)/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Robotics - Componentes y Prototipado en La Paz',
    description: 'Microelectrónica verificada para Arduino, ESP32 y Raspberry Pi con asesoría de ingeniero a ingeniero.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
