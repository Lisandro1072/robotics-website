// app/components/sections/Problem.js
import { AlertTriangle } from 'lucide-react';

const Problem = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-xl shadow-xl">
                    <AlertTriangle size={48} className="mx-auto text-orange-500" />
                    <h2 className="mt-4 text-3xl font-bold text-gray-800">
                        ¿Cansado de que tus componentes fallen en la fase crítica?
                    </h2>
                    <p className="mt-4 text-md text-gray-600 leading-relaxed">
                        Sabemos que en La Paz, conseguir el integrado exacto o el sensor calibrado puede ser un dolor de cabeza. Muchos proveedores locales descuidan el soporte técnico o entregan piezas que no cumplen con el datasheet. Un componente de mala calidad no solo detiene tu proyecto, <strong>destruye tu inversión y tu tiempo de desarrollo.</strong>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Problem;
