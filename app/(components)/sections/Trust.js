// app/components/sections/Trust.js
import { ShieldCheck, LockKeyhole, Building } from 'lucide-react';

const trustPoints = [
    {
        icon: ShieldCheck,
        title: "Componentes Certificados",
        description: "Trabajamos con marcas líderes en instrumentación y desarrollo como UNI-T, Raspberry Pi y Arduino."
    },
    {
        icon: LockKeyhole,
        title: "Sin Registro Obligatorio",
        description: "Creemos en la transparencia; consulta precios y especificaciones sin barreras innecesarias."
    },
    {
        icon: Building,
        title: "Ubicación Real y Respaldo",
        description: "Contamos con tienda física establecida para tu seguridad y respaldo técnico post-venta."
    }
];

const Trust = () => {
    return (
        <section id="confianza" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Autoridad y Confianza</h2>
                    <p className="mt-4 text-lg text-gray-600">Tu tranquilidad es nuestra prioridad.</p>
                </div>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {trustPoints.map((point, index) => (
                        <div key={index} className="text-center">
                            <point.icon size={48} className="mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                            <p className="text-gray-600">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
