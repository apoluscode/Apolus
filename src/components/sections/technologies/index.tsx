import { motion } from "motion/react";

export function Technologies() {
    const technologies = [
        {
            title: 'Planejamento, Versionamento & Colaboração',
            stack: 'Git, GitHub, Kanban e Xmind',
            desc: 'Trabalhamos com planejamento estratégico e controle de versões para garantir organização, colaboração entre desenvolvedores e entregas consistentes ao longo do projeto.',
            color: 'border-apolus-purple/20',
        },
        {
            title: 'Design & UX/UI',
            stack: 'Figma, Wireframes, Prototipagem e Axure RP',
            desc: 'Planejamos cada detalhe do visual e da navegação para que seu site seja agradável, profissional e fácil de usar.',
            color: 'border-apolus-green/20',
        },
        {
            title: 'Frontend',
            stack: 'HTML5, CSS3, React, TypeScript, Next.js, Vue.JS e Angular',
            desc: 'Criamos interfaces modernas, organizadas e fáceis de usar, garantindo que seu site seja bonito, intuitivo e funcione perfeitamente em qualquer dispositivo.',
            color: 'border-apolus-green/20',
        },
        {
            title: 'Backend & Runtime',
            stack: 'Node.js, NestJS, PHP, Laravel e Python',
            desc: 'Desenvolvemos toda a parte interna do site para garantir que ele funcione com segurança, rapidez e estabilidade, mesmo com muitos acessos ao mesmo tempo. Utilizamos também automações e recursos modernos para tornar processos mais inteligentes e eficientes.',
            color: 'border-apolus-yellow/20',
        },
        {
            title: 'Banco de Dados',
            stack: 'PostgreSQL, MySQL, MongoDB e Redis',
            desc: 'Estruturamos e protegemos as informações do seu negócio para que tudo fique organizado, seguro e acessível sempre que necessário.',
            color: 'border-apolus-purple/20',
        },
        {
            title: 'Autenticação & Segurança',
            stack: 'Segurança em API, JWT, OAuth2.0, SSO e SAML',
            desc: 'Implementamos camadas de segurança para proteger dados e garantir que apenas pessoas autorizadas tenham acesso a áreas específicas do sistema.',
            color: 'border-apolus-yellow/20',
        },
        {
            title: 'Pagamentos & Integrações',
            stack: 'Stripe, Mercado Pago e Abacate Pay',
            desc: 'Integramos sistemas de pagamento e ferramentas externas para automatizar processos e facilitar a experiência dos seus clientes. Também implementamos integrações para lojas virtuais e plataformas de venda online.',
            color: 'border-apolus-green/20',
        },
        {
            title: 'SEO & Performance',
            stack: null,
            desc: 'Otimizamos seu site para que ele carregue rápido e tenha mais chances de aparecer nos mecanismos de busca como o Google.',
            color: 'border-apolus-yellow/20',
        },
        {
            title: 'Contrato & Transparência',
            stack: null,
            desc: 'Formalizamos todos os projetos com contrato validado por advogado, assegurando seus direitos, prazos e entregas combinadas.',
            color: 'border-apolus-yellow/20',
        },
    ];

    return (
        <section id="tecnologias" className="py-24">
            <div className="max-w-8xl mx-auto px-6">
                {/* Título da seção "Tecnologias & Competências" */}
                <div className="text-center mb-16 flex flex-col items-center">
                    <h2 className="sr-only">Tecnologias e Competências</h2>
                    <img
                        src="/img/font/tc_font.png"
                        alt="Tecnologias & Competências"
                        className="w-104 md:w-112 object-contain"
                    />

                    <p className="text-white/60 max-w-2xl mx-auto mt-4">
                        Utilizamos ferramentas modernas, planejamento estratégico e
                        metodologias ágeis para desenvolver projetos digitais performáticos
                        e escaláveis.
                    </p>
                </div>

                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:px-48">
                    {technologies.map((tech, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`glass-card p-8 border-t-4 ${tech.color} group transition-all duration-300 hover:shadow-[0_0_20px_rgba(97,238,69,1)]`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <img
                                    src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndld21zNjdxaTdyMGFodHpwcWQzbDV0dWFqcWJyaWVzd241M3Q1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RjpwS3HEFqgdALfARj/giphy.gif"
                                    alt=""
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                />

                                <div>
                                    <h3 className="text-xl font-bold text-white">{tech.title}</h3>

                                    {tech.stack && (
                                        <span className="block text-sm text-white/40 font-medium mt-1 transition-all duration-300 group-hover:text-apolus-green group-hover:drop-shadow-[0_0_8px_rgba(97,238,69,1)]">
                                            {tech.stack}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <p className="text-sm text-white/50 leading-relaxed">
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
