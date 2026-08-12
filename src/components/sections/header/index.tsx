import { Zap, X, Menu } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Sobre', href: '#sobre' },
        { name: 'Tecnologias', href: '#tecnologias' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Portfólio', href: '#portfolio' },
        { name: 'Processo', href: '#processo' },
        { name: 'Contato', href: '#contato' },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-apolus-black/80 backdrop-blur-lg py-4 border-bottom border-white/5' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="w-40 h-20 rounded-lg flex items-center justify-center">
                        {/* Logo e Mascote */}
                        <img
                            src="/img/apolus/apolus_name.png"
                            alt="Girl in a jacket"
                            width="700"
                            height="900"
                        />
                        <Zap className="text-apolus-black fill-apolus-black" size={24} />
                    </div>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-white/70 hover:text-apolus-green transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contato" className="btn-primary py-2 px-6 text-sm">
                        Orçamento
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 w-full bg-apolus-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-medium text-white/70 hover:text-apolus-green"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contato"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn-primary text-center"
                    >
                        Orçamento
                    </a>
                </motion.nav>
            )}
        </header>
    )
}
