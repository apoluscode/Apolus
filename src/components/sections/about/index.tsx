import { Github, Linkedin } from "lucide-react";

export function About() {
    const items = [
        {
            title: 'Sobre',
            text: 'A Apolus é uma dupla de desenvolvedores web focada em criar experiências digitais modernas, rápidas e visualmente marcantes.',
        },
        {
            title: 'Objetivo',
            text: 'Nosso objetivo é desenvolver sites, landing pages, interfaces e sistemas personalizados que ajudem empresas e projetos a se destacarem na internet.',
        },
        {
            title: 'Valores',
            text: 'Trabalhamos com atenção aos detalhes, tecnologia moderna e evolução constante para entregar soluções digitais eficientes e de alta qualidade.',
        },
    ];

    return (
        <section
            id="sobre"
            className="relative py-24 bg-apolus-dark/60 low-poly-bg overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col gap-16 items-center">
                    <div className="space-y-6">
                        <img
                            src="/img/font/qs_font.png"
                            alt="Quem Somos"
                            className="w-64 md:w-72 object-contain mx-auto"
                        />

                        <div className="space-y-6 pt-4">
                            {items.map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="mt-1 p-2 rounded-xl">
                                        <img
                                            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndld21zNjdxaTdyMGFodHpwcWQzbDV0dWFqcWJyaWVzd241M3Q1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RjpwS3HEFqgdALfARj/giphy.gif"
                                            alt="Cristal"
                                            className="min-w-7 h-7"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-lg">{item.title}</h4>
                                        <p className="text-sm text-white/60 mt-1">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Kaique */}
                        <div className="group relative glass-card p-6 text-center backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-apolus-green/40">
                            <div className="relative mb-6">
                                {/* Glow */}
                                <div className="absolute inset-0 bg-apolus-green/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <img
                                    src="/img/devs/kaique_card.png"
                                    alt="Kaique - Desenvolvedor Front-end"
                                    className="relative rounded-2xl w-64 h-64 aspect-square object-cover  group-hover:grayscale-0 transition duration-500"
                                />
                            </div>

                            {/*Redes Sociais - Kaique*/}
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="https://github.com/KaicolaDS"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Github size={20} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/kaique-araujo-fernandes/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                            <h3 className="font-bold text-lg">Kaique Fernandes</h3>

                        </div>

                        {/* Fabiano */}
                        <div className="group relative glass-card p-6 text-center backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-apolus-purple/40">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-apolus-purple/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <img
                                    src="/img/devs/fabiano_card.png"
                                    alt="Nome - Desenvolvedor"
                                    className="relative rounded-2xl w-64 h-64 aspect-square object-cover  group-hover:grayscale-0 transition duration-500"
                                />
                            </div>
                            {/*Redes Sociais - Fabiano*/}
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="http://github.com/santosfabin/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/santosfabin/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                            <h3 className="font-bold text-lg">Fabiano Santos</h3>
                        </div>

                        {/* Gustavo */}
                        <div className="group relative glass-card p-6 text-center backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-apolus-green/40">
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-apolus-blue/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <img
                                    src="/img/devs/gustavo_card.png"
                                    alt="Nome - Desenvolvedor"
                                    className="relative rounded-2xl w-64 h-64 aspect-square object-cover  group-hover:grayscale-0 transition duration-500"
                                />
                            </div>
                            {/*Redes Sociais - Gustavo*/}
                            <div className="flex gap-4 justify-center">
                                <a
                                    href="http://github.com/soaresgus/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-blue hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/soaresgus/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-blue hover:text-apolus-black transition-all"
                                    target="_blank"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                            <h3 className="font-bold text-lg">Gustavo Soares</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
