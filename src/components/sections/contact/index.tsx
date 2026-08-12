import { MessageSquare, ArrowRight, Mail } from "lucide-react";
import { motion } from "motion/react";

const CONTACT_INBOX = 'apoluscode@gmail.com';

export function Contact() {
    return (
        <section id="contato" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center">
                    <h2 className="sr-only">Contato</h2>
                    <img
                        src="/img/font/vc_font.png"
                        alt="Vamos Conversar?"
                        className="w-64 md:w-72 mb-4 object-contain mx-auto md:mx-0"
                    />

                    <p className="text-white/60 mb-12 text-center">
                        Tem um projeto em mente? Fale com a Apolus Code pelos nossos canais oficiais.
                    </p>

                    <div className="space-y-24">
                        <div className="flex flex-wrap gap-8 justify-center items-center">
                            <div className="border border-apolus-green bg-apolus-green/10 rounded-xl p-1 flex flex-col items-center">
                                <div className="flex items-center gap-4 mt-2.5">
                                    <MessageSquare size={24} className="text-apolus-green" />
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest">
                                            WhatsApp
                                        </p>
                                        <a
                                            href="https://wa.me/5511913491733?text=Olá, gostaria de agendar uma conversa com vocês, vim pelo site da Apolus Code."
                                            className="hover:text-apolus-green transition-colors duration-500"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <p className="font-bold">+55 (11) 91349-1733</p>
                                        </a>
                                    </div>
                                </div>
                                <a
                                    href="https://wa.me/5511913491733?text=Olá, gostaria de agendar uma conversa com vocês, vim pelo site da Apolus Code."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full px-6 py-2 rounded-xl flex items-center justify-center text-apolus-green gap-2"
                                >
                                    <p>Chamar no WhatsApp</p>
                                    <ArrowRight size={18} className="mt-0.5" />
                                </a>
                            </div>

                            <div className="border border-apolus-purple bg-apolus-purple/10 rounded-xl px-4 py-1 flex flex-col items-center">
                                <div className="flex items-center gap-4 mt-2.5">
                                    <Mail size={24} className="text-apolus-purple" />
                                    <div>
                                        <p className="text-xs text-white/40 uppercase tracking-widest">
                                            Email
                                        </p>
                                        <a
                                            href={`mailto:${CONTACT_INBOX}`}
                                            className="hover:text-apolus-purple transition-colors duration-500"
                                            target="_blank"
                                        >
                                            <p className="font-bold">{CONTACT_INBOX}</p>
                                        </a>
                                    </div>
                                </div>
                                <a href={`mailto:${CONTACT_INBOX}`} target="_blank" className="w-full px-6 py-2 rounded-xl flex items-center justify-center text-apolus-purple gap-2">
                                    <p>Enviar email</p>
                                    <ArrowRight size={18} className="mt-0.5 text-apolus-purple" />
                                </a>
                            </div>
                        </div>
                        {/* UNIVERSO + MASCOTE */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="relative flex justify-center w-full"
                        >
                            <div className="relative w-[clamp(10rem,70vw,28rem)] aspect-square mx-auto">
                                {/* PLANETA GIRANDO ATRÁS */}
                                <motion.img
                                    src="/img/apolus/internet_trans.png"
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute top-[3%] left-[2%] w-full h-full object-contain z-0 opacity-50 drop-shadow-[0_0_1.25rem_purple]"
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

                                {/* ELEMENTOS DO UNIVERSO */}
                                <svg
                                    viewBox="0 0 500 500"
                                    className="absolute -inset-[8%] w-[116%] h-[116%] z-[5]"
                                    preserveAspectRatio="xMidYMid meet"
                                >
                                    {/* Anel orbital */}
                                    <motion.circle
                                        cx="250"
                                        cy="250"
                                        r="240"
                                        fill="none"
                                        stroke="#236506"
                                        strokeOpacity="0.3"
                                        strokeWidth="2"
                                        strokeDasharray="8 10"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                        style={{ originX: '50%', originY: '50%' }}
                                    />

                                    {/* estrelas */}
                                    <motion.circle
                                        cx="250"
                                        cy="30"
                                        r="6"
                                        fill="#FFC300"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                                        style={{ originX: '250px', originY: '250px' }}
                                    />
                                    {/* estrelas */}
                                    <motion.circle
                                        cx="250"
                                        cy="30"
                                        r="6"
                                        fill="#FFC300"
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                        style={{ originX: '-250px', originY: '-250px' }}
                                    />
                                </svg>

                                {/* CHÃO DE LUZ */}
                                <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 w-[70%] h-[20%] bg-apolus-green/30 blur-[clamp(0.75rem,3vw,1.5rem)] rounded-full opacity-60" />

                                {/* MASCOTE */}
                                <motion.img
                                    src="/img/apolus/apolus_trans.png"
                                    alt="Mascote da Apolus Code"
                                    className="absolute inset-0 w-[70%] h-[70%] object-contain z-10 mx-auto my-auto"
                                    animate={{
                                        y: ['0%', '-5%', '0%'],
                                        rotate: [0, 2, -2, 0],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                />

                                {/* GLOW FRONTAL */}
                                <div className="absolute inset-0 bg-apolus-purple/20 blur-[clamp(1rem,4vw,2rem)] -z-10 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}
