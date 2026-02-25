// app/components/ui/Button.js
const Button = ({ children, onClick, className = '', icon: Icon }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center justify-center px-6 py-3 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300 ${className}`}
        >
            {Icon && <Icon size={20} className="mr-2" />}
            {children}
        </button>
    );
};

export default Button;
