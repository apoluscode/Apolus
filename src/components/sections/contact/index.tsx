import { MessageSquare, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useState, FormEvent } from "react";

const CONTACT_INBOX = 'apoluscode@gmail.com';
const FORMSUBMIT_FORM_ID = '4349be602e8890c4b9787fadace0bc42';

export function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<
        Partial<Record<'name' | 'email' | 'message', string>>
    >({});

    const validateForm = () => {
        const name = formState.name.trim();
        const email = formState.email.trim();
        const message = formState.message.trim();
        const next: Partial<Record<'name' | 'email' | 'message', string>> = {};
        if (!name) next.name = 'Preencha o nome.';
        if (!email) next.email = 'Preencha o email.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
            next.email = 'Digite um email válido.';
        if (message.length < 3)
            next.message = 'A mensagem precisa ter pelo menos 3 letras.';
        return next;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSubmitError(null);
        const errors = validateForm();
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            return;
        }
        setFieldErrors({});
        setIsSubmitting(true);
        try {
            const res = await fetch(
                `https://formsubmit.co/ajax/${FORMSUBMIT_FORM_ID}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                    },
                    body: JSON.stringify({
                        name: formState.name.trim(),
                        email: formState.email.trim(),
                        message: formState.message.trim(),
                        _subject: `Contato site Apolus — ${formState.name.trim()}`,
                        _captcha: false,
                    }),
                }
            );
            const data = (await res.json()) as {
                success?: string | boolean;
                message?: string;
            };
            const accepted =
                res.ok &&
                (data.success === true ||
                    data.success === 'true' ||
                    String(data.success).toLowerCase() === 'true');
            if (!accepted) {
                const raw =
                    typeof data.message === 'string' ? data.message : '';
                if (/activation|activate form/i.test(raw)) {
                    throw new Error(
                        'ACTIVATION_PENDING'
                    );
                }
                if (/web server|html files/i.test(raw)) {
                    throw new Error('OPEN_VIA_SERVER');
                }
                throw new Error(raw || 'submit failed');
            }
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
            setFormState({ name: '', email: '', message: '' });
        } catch (err) {
            if (err instanceof Error && err.message === 'ACTIVATION_PENDING') {
                setSubmitError(
                    'O formulário ainda não foi ativado. Abra o email que o FormSubmit enviou para apoluscode@gmail.com, clique em “Activate Form” e tente de novo. Confira também lixo eletrônico.'
                );
            } else if (err instanceof Error && err.message === 'OPEN_VIA_SERVER') {
                setSubmitError(
                    'Abra o site pelo endereço do servidor (npm run dev ou o link de hospedagem), não abra o arquivo HTML direto no disco.'
                );
            } else {
                const hint =
                    err instanceof Error && err.message
                        ? ` (${err.message})`
                        : '';
                setSubmitError(
                    `Não foi possível enviar agora.${hint} Tente de novo ou fale pelo WhatsApp.`
                );
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <img
                            src="/img/font/vc_font.png"
                            alt="Vamos Conversar?"
                            className="w-64 md:w-72 mb-4 object-contain mx-auto md:mx-0"
                        />

                        <p className="text-white/60 mb-12 text-center md:text-left">
                            Tem um projeto em mente? Preencha o formulário ou entre em contato
                            pelos nossos canais oficiais.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-apolus-green/10 rounded-xl flex items-center justify-center text-apolus-green">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">
                                        WhatsApp
                                    </p>
                                    <a
                                        href="https://wa.me/5511913491733"
                                        className="hover:text-apolus-green transition-colors duration-500"
                                    >
                                        <p className="font-bold">+55 (11) 91349-1733</p>
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-apolus-purple/10 rounded-xl flex items-center justify-center text-apolus-purple">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-white/40 uppercase tracking-widest">
                                        Email
                                    </p>
                                    <a
                                        href={`mailto:${CONTACT_INBOX}`}
                                        className="font-bold hover:text-apolus-green transition-colors duration-500"
                                    >
                                        {CONTACT_INBOX}
                                    </a>
                                </div>
                            </div>
                            {/* UNIVERSO + MASCOTE */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="relative flex justify-center"
                            >
                                <div className="relative w-full max-w-md aspect-square">
                                    {/* PLANETA GIRANDO ATRÁS */}
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

                                    {/* ELEMENTOS DO UNIVERSO */}
                                    <svg
                                        viewBox="0 0 500 500"
                                        className="absolute -inset-9 w-[120%] h-[120%] z-5"
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
                                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-24 bg-apolus-green/30 blur-2xl rounded-full opacity-60" />

                                    {/* MASCOTE */}
                                    <motion.img
                                        src="/img/apolus/apolus_trans.png"
                                        className="absolute inset-0 w-[70%] h-[70%] object-contain z-10 mx-auto my-auto"
                                        animate={{
                                            y: [0, -20, 0],
                                            rotate: [0, 2, -2, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                    />

                                    {/* GLOW FRONTAL */}
                                    <div className="absolute inset-0 bg-apolus-purple/20 blur-3xl -z-10 rounded-full" />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="glass-card p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    className={`block text-xs font-bold uppercase tracking-widest mb-2 ${fieldErrors.name ? 'text-red-400' : 'text-white/40'}`}
                                >
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    value={formState.name}
                                    onChange={(e) => {
                                        setFormState({ ...formState, name: e.target.value });
                                        if (fieldErrors.name) {
                                            setFieldErrors(({ name: _n, ...rest }) => rest);
                                        }
                                    }}
                                    className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:outline-none transition-colors border ${fieldErrors.name ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-apolus-green'}`}
                                    placeholder="Seu nome completo"
                                    aria-invalid={Boolean(fieldErrors.name)}
                                />
                                {fieldErrors.name && (
                                    <p className="mt-1.5 text-sm text-red-400">{fieldErrors.name}</p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={`block text-xs font-bold uppercase tracking-widest mb-2 ${fieldErrors.email ? 'text-red-400' : 'text-white/40'}`}
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={formState.email}
                                    onChange={(e) => {
                                        setFormState({ ...formState, email: e.target.value });
                                        if (fieldErrors.email) {
                                            setFieldErrors(({ email: _e, ...rest }) => rest);
                                        }
                                    }}
                                    className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:outline-none transition-colors border ${fieldErrors.email ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-apolus-green'}`}
                                    placeholder="seu@email.com"
                                    aria-invalid={Boolean(fieldErrors.email)}
                                />
                                {fieldErrors.email && (
                                    <p className="mt-1.5 text-sm text-red-400">{fieldErrors.email}</p>
                                )}
                            </div>
                            <div>
                                <label
                                    className={`block text-xs font-bold uppercase tracking-widest mb-2 ${fieldErrors.message ? 'text-red-400' : 'text-white/40'}`}
                                >
                                    Mensagem
                                </label>
                                <textarea
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => {
                                        setFormState({ ...formState, message: e.target.value });
                                        if (fieldErrors.message) {
                                            setFieldErrors(({ message: _m, ...rest }) => rest);
                                        }
                                    }}
                                    className={`w-full bg-white/5 rounded-xl px-4 py-3 focus:outline-none transition-colors resize-none border ${fieldErrors.message ? 'border-red-500 focus:border-red-400' : 'border-white/10 focus:border-apolus-green'}`}
                                    placeholder="Conte-nos sobre seu projeto"
                                    aria-invalid={Boolean(fieldErrors.message)}
                                />
                                {fieldErrors.message && (
                                    <p className="mt-1.5 text-sm text-red-400">
                                        {fieldErrors.message}
                                    </p>
                                )}
                            </div>
                            {submitError && (
                                <p className="text-sm text-red-400" role="alert">
                                    {submitError}
                                </p>
                            )}
                            <button
                                type="submit"
                                className="btn-primary w-full disabled:opacity-60"
                                disabled={isSubmitting}
                            >
                                {isSubmitted
                                    ? 'Mensagem Enviada!'
                                    : isSubmitting
                                        ? 'Enviando…'
                                        : 'Enviar Mensagem'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
