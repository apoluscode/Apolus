import { motion } from "motion/react";

export function Portfolio() {
    const projects = [
        {
            title: 'Advogado Eduardo Henrique Montenegro',
            category: 'Landing Page',
            image:
                '/img/portf/portf_1.png',
            link: 'https://advogado-flame.vercel.app/',
        },
        {
            title: 'ClimaPrime Soluções em Climatização',
            category: 'Site Institucional',
            image:
                '/img/portf/portf_2.png',
            link: 'https://nucleoar-01.vercel.app/',
        },
    ];

    return (
        <section id="portfolio" className="py-24 bg-apolus-dark/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center mb-16 gap-6">
                    <div>
                        <h2 className="sr-only">Portfólio</h2>
                        <img
                            src="/img/font/p_font.png"
                            alt="Portfólio"
                            className="w-64 md:w-54 mb-4 object-contain mx-auto"
                        />

                        <p className="text-white/60 mb-0 text-center">
                            Conheça alguns dos nosso projetos recentes que mostram como
                            transformamos ideias em soluções digitais modernas e eficientes.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.a
                            key={i}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer block"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-apolus-black via-apolus-black/20 to-transparent opacity-0 not-lg:opacity-100 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 not-lg:p-4">
                                <span className="bg-[#4CA525] w-fit rounded-full px-4 py-0.5 text-white text-xs font-medium uppercase tracking-widest mb-2">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold">{project.title}</h3>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}
