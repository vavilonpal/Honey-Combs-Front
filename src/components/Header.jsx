import React from "react";
import Button from './Button.jsx';

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
        alert("EbaL");
    };

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Лого */}
                <div className="text-xl font-bold">MySite</div>

                {/* Десктоп-меню */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-blue-500 transition">Home</a>
                    <a href="#" className="hover:text-blue-500 transition">About</a>
                    <a href="#" className="hover:text-blue-500 transition">Services</a>
                    <a href="#" className="hover:text-blue-500 transition">Contact</a>
                </nav>

                {/* Кнопка действия */}
                <div className="hidden md:block">
                    <Button onClick={handleClick}>Click Me</Button>
                </div>

                {/* Гамбургер (только на мобилке) */}
                <button onClick={toggleMenu} className="md:hidden focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Мобильное меню */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <nav className="flex flex-col space-y-2 p-4">
                        <a href="#" className="hover:text-blue-500 transition">Home</a>
                        <a href="#" className="hover:text-blue-500 transition">About</a>
                        <a href="#" className="hover:text-blue-500 transition">Services</a>
                        <a href="#" className="hover:text-blue-500 transition">Contact</a>
                        <Button onClick={handleClick}>Click Me</Button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
