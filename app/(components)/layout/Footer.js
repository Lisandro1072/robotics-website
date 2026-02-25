// app/components/layout/Footer.js
import Logo from '../ui/Logo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white" id="contacto">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Logo isWhite={true} />
                        <p className="mt-4 text-gray-400">
                            Tu laboratorio aliado en La Paz para prototipado y desarrollo de hardware.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Contacto Directo</h3>
                        <ul className="mt-4 space-y-2">
                            <li className="flex items-center">
                                <Phone size={18} className="mr-3 text-blue-400" />
                                <span>+591 71234567 (WhatsApp)</span>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-3 text-blue-400" />
                                <span>contacto@robotics.bo</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin size={18} className="mr-3 text-blue-400" />
                                <span>Frente al Teleférico Morado, Calle Colombia, La Paz, Bolivia.</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Enlaces Rápidos</h3>
                        <ul className="mt-4 space-y-2">
                            <li><a href="#productos" className="hover:text-blue-400">Productos</a></li>
                            <li><a href="#servicios" className="hover:text-blue-400">Servicios</a></li>
                            <li><a href="#confianza" className="hover:text-blue-400">Por qué elegirnos</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Robotics. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
