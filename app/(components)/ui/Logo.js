// app/components/ui/Logo.js
import { Cpu } from 'lucide-react';

const Logo = ({ isWhite = false }) => {
    const textColor = isWhite ? 'text-white' : 'text-gray-900';
    const iconColor = isWhite ? 'text-blue-400' : 'text-blue-600';

    return (
        <a href="/" className="flex items-center space-x-2">
            <div className={`p-2 rounded-md ${isWhite ? 'bg-gray-700' : 'bg-blue-100'}`}>
                <Cpu size={24} className={iconColor} />
            </div>
            <span className={`text-2xl font-bold ${textColor}`}>
                Robotics
            </span>
        </a>
    );
};

export default Logo;
