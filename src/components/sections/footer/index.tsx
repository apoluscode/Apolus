import { Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-12 border-t border-white/5 bg-apolus-dark">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <img
                            src="/img/apolus/apolus_name.png"
                            alt="Apolus Code"
                            width="120"
                            height="200"
                        />

                        <p className="text-white/40 text-sm max-w-sm">
                            Transformando o complexo em simples. A Apolus Code é
                            especializada em entregar excelência digital.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Links Rápidos</h4>
                        <ul className="space-y-3 text-sm text-white/40">
                            <li>
                                <a
                                    href="#sobre"
                                    className="hover:text-apolus-green transition-colors"
                                >
                                    Sobre nós
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#servicos"
                                    className="hover:text-apolus-green transition-colors"
                                >
                                    Serviços
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#tecnologias"
                                    className="hover:text-apolus-green transition-colors"
                                >
                                    Tecnologias
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="hover:text-apolus-green transition-colors"
                                >
                                    Portfólio
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contato"
                                    className="hover:text-apolus-green transition-colors"
                                >
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-5">Redes Sociais</h4>

                        <ul className="space-y-3 text-sm text-white/40">
                            <li className="mb-1">
                                <span>Fabiano Santos</span>
                            </li>
                            <div className="flex gap-4 mb-4">
                                <a
                                    href="https://github.com/santosfabin/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub de Fabiano Santos"
                                >
                                    <Github size={20} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/santosfabin/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn de Fabiano Santos"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>

                            <li className="mb-1">
                                <span>Kaique Araujo Fernandes</span>
                            </li>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/KaicolaDS"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub de Kaique Fernandes"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kaique-araujo-fernandes/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn de Kaique Fernandes"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>

                            <li className="mb-1">
                                <span>Gustavo Soares</span>
                            </li>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/soaresgus"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-blue hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub de Gustavo Soares"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/soaresgus/"
                                    className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-blue hover:text-apolus-black transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn de Gustavo Soares"
                                >
                                    <Linkedin size={20} />
                                </a>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
                    <p>© 2026 Apolus Code. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
