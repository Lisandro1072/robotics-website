// app/components/sections/Hero.js
import Button from '../ui/Button';
import { Phone } from 'lucide-react';

const Hero = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto px-6 py-24 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                    Ingeniería de Hardware con Respaldo Técnico:
                    <span className="block text-blue-600">Tu Prototipo no puede esperar.</span>
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                    En el desarrollo de sistemas embebidos y robótica, la precisión es ley. No arriesgues tus proyectos con componentes de origen dudoso. Ofrecemos microelectrónica verificada para Arduino, ESP32 y Raspberry Pi con asesoría de ingeniero a ingeniero.
                </p>
                <div className="mt-8 flex flex-col items-center">
                    <Button
                        onClick={() => window.open('https://wa.me/59171234567', '_blank')}
                        className="w-full md:w-auto"
                        icon={Phone}
                    >
                        Consultar Stock y Especificaciones Técnicas
                    </Button>
                    <p className="mt-3 text-sm text-gray-500">
                        Confirmación de stock en tiempo real por nuestros especialistas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
