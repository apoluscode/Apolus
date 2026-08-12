import { MonitorSmartphone, Globe, Package, ShoppingCart, LayoutDashboard, ShieldCheck, Wrench } from "lucide-react";
import { motion } from "motion/react";

export function Services() {
    const services = [
        {
            icon: <Globe size={28} />,
            title: 'Site Institucional',
            description:
                'Sites profissionais para apresentar sua empresa, serviços e fortalecer sua presença digital.',
        },
        {
            icon: <MonitorSmartphone size={28} />,
            title: 'Aplicativos Mobile',
            description:
                'Aplicativos móveis para iOS e Android, com design moderno e funcionalidades personalizadas.',
        },
        {
            icon: <ShoppingCart size={28} />,
            title: 'Loja Virtual',
            description:
                'E-commerce completo com carrinho, pagamentos, painel administrativo e gestão de pedidos.',
        },
        {
            icon: <Package size={28} />,
            title: 'Sistemas de Gerenciamento e Gestão',
            description:
                'Sistemas de gerenciamento completo para sua empresa, com controle de estoque, vendas, clientes, fornecedores, funcionários, entre outros.',
        },
        {
            icon: <Wrench size={28} />,
            title: 'Modernização de sistemas legados',
            description:
                'Modernização de sistemas legados já existentes para melhorar a performance, segurança e usabilidade.',
        },
        {
            icon: <ShieldCheck size={28} />,
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
                        className="w-64 md:w-50 object-contain"
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
                            <div className="flex items-center gap-2.5">
                                <div className="min-w-12 min-h-12 rounded-2xl bg-apolus-green/10 flex items-center justify-center text-apolus-green">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold">
                                    {service.title}
                                </h3>
                            </div>

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
