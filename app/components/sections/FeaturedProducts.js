// app/components/sections/FeaturedProducts.js
import ProductCard from '../products/ProductCard';

// Mock Data - Esto vendrá de la base de datos
const mockProducts = [
    {
        id: 1,
        name: 'Raspberry Pi 4 Model B 4GB',
        price: '65.00',
        imageUrl: 'https://via.placeholder.com/300x300.png?text=Raspberry+Pi+4',
        stock_quantity: 15,
    },
    {
        id: 2,
        name: 'Arduino UNO R3',
        price: '25.50',
        imageUrl: 'https://via.placeholder.com/300x300.png?text=Arduino+UNO',
        stock_quantity: 30,
    },
    {
        id: 3,
        name: 'ESP32-WROOM-32 Dev Kit',
        price: '12.00',
        imageUrl: 'https://via.placeholder.com/300x300.png?text=ESP32',
        stock_quantity: 5,
    },
    {
        id: 4,
        name: 'Sensor Ultrasónico HC-SR04',
        price: '3.50',
        imageUrl: 'https://via.placeholder.com/300x300.png?text=HC-SR04',
        stock_quantity: 0,
    },
];

const FeaturedProducts = () => {
    return (
        <section id="productos" className="bg-gray-100 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">Componentes Destacados</h2>
                    <p className="mt-4 text-lg text-gray-600">Calidad y disponibilidad para tus proyectos más exigentes.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {mockProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
