// app/components/sections/Solution.js
import Card from '../ui/Card';
import { Wrench, Printer, Cpu, Store } from 'lucide-react';

const services = [
    {
        icon: Wrench,
        title: "Diseño y Fabricación de PCB",
        description: "Transformamos tu esquema electrónico en placas profesionales con servicios de quemado y perforado de alta precisión."
    },
    {
        icon: Printer,
        title: "Impresión 3D y Corte Láser",
        description: "Fabricación a medida de carcasas, engranajes y piezas mecánicas para robótica en diversos materiales."
    },
    {
        icon: Cpu,
        title: "Asesoría Técnica Especializada",
        description: "Si no tenemos el componente exacto, nuestro equipo te ayuda a encontrar el equivalente perfecto basado en parámetros eléctricos."
    },
    {
        icon: Store,
        title: "Recojo en Tienda",
        description: "Olvida la incertidumbre del envío. Visítanos, verifica el material personalmente y llévatelo al instante."
    }
];

const Solution = () => {
    return (
        <section id="servicios" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">No somos solo una tienda, somos tu Laboratorio Aliado</h2>
                    <p className="mt-4 text-lg text-gray-600">Ofrecemos soluciones integrales para llevar tu proyecto del concepto a la realidad.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="text-center">
                            <service.icon size={48} className="mx-auto text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;
