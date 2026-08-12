import { MonitorSmartphone, Globe, Package, ShoppingCart, LayoutDashboard, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
    const services = [
        {
            icon: <MonitorSmartphone size={32} />,
            title: 'Landing Pages',
            description:
                'Páginas modernas e focadas em conversão para campanhas, produtos e captação de clientes.',
        },
        {
            icon: <Globe size={32} />,
            title: 'Site Institucional',
            description:
                'Sites profissionais para apresentar sua empresa, serviços e fortalecer sua presença digital.',
        },
        {
            icon: <Package size={32} />,
            title: 'Catálogo de Produtos',
            description:
                'Exiba seus produtos com sistema de busca, painel administrativo e gerenciamento completo.',
        },
        {
            icon: <ShoppingCart size={32} />,
            title: 'Loja Virtual',
            description:
                'E-commerce completo com carrinho, pagamentos, painel administrativo e gestão de pedidos.',
        },
        {
            icon: <LayoutDashboard size={32} />,
            title: 'Sistema Web',
            description:
                'Sistemas personalizados com login, banco de dados, automações e áreas administrativas.',
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Suporte & Manutenção',
            description:
                'Atualizações, monitoramento, correções e suporte contínuo após a entrega do projeto.',
        },
    ];

    return (
        <section id="servicos" className="py-24 bg-apolus-dark/30">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16 flex flex-col items-center">

                    <img
                        src="/img/font/s_font.png"
                        alt="Serviços"
                        className="w-94 md:w-50 object-contain"
                    />

                    <p className="text-white/60 mt-6 max-w-2xl mx-auto">
                        Desenvolvemos soluções digitais sob medida para empresas,
                        profissionais e marcas que desejam crescer na internet.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8 }}
                            className="glass-card border border-white/10 rounded-3xl p-8 transition-all duration-300 hover:border-apolus-green hover:shadow-[0_0_30px_rgba(97,238,69,.18)]"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-apolus-green/10 flex items-center justify-center text-apolus-green mb-6">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-2">
                                {service.title}
                            </h3>

                            <p className="text-white/60 mt-5 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    )
}
