// app/components/cart/CartIcon.js
import { ShoppingCart } from 'lucide-react';

const CartIcon = () => {
    // El número '3' es un mock. Lo haremos dinámico.
    const itemCount = 3;

    return (
        <button className="relative">
            <ShoppingCart size={24} className="text-gray-600 hover:text-blue-600" />
            {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {itemCount}
                </span>
            )}
        </button>
    );
};

export default CartIcon;
