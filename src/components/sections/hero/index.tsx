import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
            {/* GRID */}
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-9 bg-[linear-gradient(to_right,#8B5CF6_1px,transparent_1px),linear-gradient(to_bottom,#8B5CF6_1px,transparent_1px)] bg-[length:64px_64px]"
            />

            {/* BACKGROUND BLURS PROFUNDIDADE */}
            <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-apolus-purple/20 blur-[160px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-apolus-green/10 blur-[160px] rounded-full" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-apolus-purple/10 blur-[180px] rounded-full -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">
                {/* TEXTO */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
                        Transformamos
                        <br />
                        ideias em{" "}
                        <span className="text-apolus-green">
                            experiências
                        </span>
                        <br />
                        digitais.
                    </h1>

                    <p className="text-lg text-white/60 mb-8 max-w-lg">
                        Criamos experiências digitais que unem estratégia, design e tecnologia para transformar visitantes em clientes e fortalecer a presença da sua empresa no ambiente digital.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto md:mx-0">
                        <a
                            href="#contato"
                            className="btn-primary flex items-center justify-center gap-2 w-full whitespace-nowrap"
                        >
                            Solicitar Orçamento <ArrowRight size={20} />
                        </a>
                        <a
                            href="#portfolio"
                            className="btn-secondary flex items-center justify-center w-full"
                        >
                            Ver Projetos
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -12, 0],
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        scale: { duration: 1 },
                        y: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        },
                    }}
                    className="relative flex justify-center"
                >
                    <motion.img
                        src="/img/apolus/internet_trans.png"
                        className="absolute top-3 left-[8px] w-full h-full object-contain z-0 opacity-50  drop-shadow-[0_0_20px_purple]"
                        animate={{
                            rotate: -360,
                        }}
                        style={{ scale: 0.95 }}
                        transition={{
                            duration: 50,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />

                    <motion.img
                        src="/img/apolus/webdesign.png"
                        className="absolute inset-0 w-full h-full object-contain z-10"
                        style={{ scale: 1.5 }}
                        animate={{
                            y: [0, -18, 0],
                            rotate: [0, 3, -3, 0],
                            x: [0, 6, -6, 0],
                            scale: [1.2, 1.1, 1.2],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <div className="relative w-full max-w-3xl aspect-square">
                        {/* ELEMENTOS DO UNIVERSO */}
                        <svg
                            viewBox="0 0 500 500"
                            className="absolute -inset-9 w-[120%] h-[120%] z-5"
                        >
                        </svg>

                        {/* CHÃO DE LUZ */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-24 bg-apolus-green/30 blur-2xl rounded-full opacity-60" />

                        {/* GLOW FRONTAL */}
                        <div className="absolute inset-0 bg-apolus-purple/20 blur-3xl -z-10 rounded-full" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
