// app/components/layout/Navbar.js
import Logo from '../ui/Logo';
import CartIcon from '../cart/CartIcon';

const Navbar = () => {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Logo />
                <div className="flex items-center space-x-4">
                    <a href="#productos" className="text-gray-600 hover:text-blue-600">Productos</a>
                    <a href="#servicios" className="text-gray-600 hover:text-blue-600">Servicios</a>
                    <a href="#contacto" className="text-gray-600 hover:text-blue-600">Contacto</a>
                    <CartIcon />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
