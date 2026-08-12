export function Process() {
    const steps = [
        {
            title: 'Imersão',
            desc: 'Entendemos profundamente seu negócio, objetivos e público para identificar oportunidades e definir o direcionamento do projeto.',
        },
        {
            title: 'Proposta',
            desc: 'Apresentamos uma proposta clara com escopo, prazos e investimento definidos, garantindo alinhamento total antes do início.',
        },
        {
            title: 'Design',
            desc: 'Criamos protótipos e interfaces com foco em usabilidade, performance e uma identidade visual forte e memorável.',
        },
        {
            title: 'Construção',
            desc: 'Transformamos o design em um projeto real, com código limpo, escalável e comunicação constante durante todo o processo.',
        },
        {
            title: 'Entrega',
            desc: 'Realizamos testes rigorosos, publicação do projeto e oferecemos suporte contínuo para garantir estabilidade e evolução.',
        },
    ];

    return (
        <section id="processo" className="py-24 bg-apolus-dark/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="sr-only">Nosso Processo</h2>
                    <img
                        src="/img/font/np_font.png"
                        alt="Nosso Processo"
                        className="w-64 md:w-72 object-contain mb-4"
                    />
                    <p className="text-white/60 max-w-xl">
                        Transparência e método em cada etapa do desenvolvimento.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-8 relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-8 left-0 w-full h-0.5 bg-white/5 -z-10" />

                    {steps.map((step, i) => (
                        <div key={i} className="lg:text-center group flex flex-row lg:flex-col">
                            <div className="min-w-16 min-h-16 bg-apolus-dark border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-apolus-green transition-colors duration-300">
                                <span className="text-2xl font-display font-bold text-apolus-green">
                                    {i + 1}
                                </span>
                            </div>
                            <div className="not-lg:ml-6">
                                <h3 className="text-lg font-bold mb-3 not-lg:text-2xl not-lg:font-display not-lg:text-apolus-green">{step.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
