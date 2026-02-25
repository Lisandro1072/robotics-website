// app/components/sections/Location.js
const Location = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Visítanos</h2>
                    <p className="mt-4 text-lg text-gray-600">Estamos ubicados en un punto estratégico de La Paz.</p>
                    <p className="font-semibold">Frente al Teleférico Morado, Calle Colombia.</p>
                </div>
                <div className="h-96 bg-gray-300 rounded-lg shadow-lg">
                    {/* Este es un placeholder para el mapa. Se puede reemplazar con Google Maps */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.492355823296!2d-68.1430226856591!3d-16.50022698861608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20a4a724a369%3A0x9f39138669949319!2sEstaci%C3%B3n%20Obelisco%20%2F%20Pura%20Pura%20-%20L%C3%ADnea%20Morada!5e0!3m2!1ses!2sbo!4v1678156112345"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Location;
