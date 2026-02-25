// app/components/products/ProductCard.js
import Card from '../ui/Card';
import Button from '../ui/Button';
import StockLabel from './StockLabel';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        // Lógica para añadir al carrito (la implementaremos después)
        alert(`"${product.name}" añadido al carrito de cotización.`);
    };

    return (
        <Card className="flex flex-col">
            <img src={product.imageUrl} alt={product.name} className="rounded-md mb-4 h-48 w-full object-cover" />
            <h3 className="text-lg font-bold flex-grow">{product.name}</h3>
            <div className="my-4">
                <StockLabel stock={product.stock_quantity} />
            </div>
            <div className="flex justify-between items-center mt-auto">
                <p className="text-2xl font-extrabold text-gray-800">{product.price} Bs.</p>
                <Button
                    onClick={handleAddToCart}
                    disabled={product.stock_quantity === 0}
                    className="!p-3 disabled:bg-gray-400"
                >
                    <ShoppingCart size={20} />
                </Button>
            </div>
        </Card>
    );
};

export default ProductCard;
