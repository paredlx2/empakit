/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Package, 
  Leaf, 
  Globe, 
  ArrowRight, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Zap,
  ShieldCheck,
  Truck
} from "lucide-react";
import { useState, useRef } from "react";

const products = [
  {
    id: "tapes",
    title: "Cintas Industriales",
    description: "Cintas adhesivas industriales de alta adherencia diseñadas para soportar condiciones extremas en Guatemala, garantizando que tu carga llegue intacta.",
    image: "/src/assets/images/regenerated_image_1778445362006.png",
    tags: ["Industrial", "Extra Adhesión"],
    color: "from-empakit-brand/20"
  },
  {
    id: "stretch",
    title: "Stretch Film Pro",
    description: "Stretch film manual y automático de alto rendimiento con memoria elástica superior. Menos micras, más seguridad en tus tarimas.",
    image: "/src/assets/images/regenerated_image_1778445369061.png",
    tags: ["Ahorro", "Resistencia"],
    color: "from-empakit-sky/20"
  },
  {
    id: "bubble",
    title: "Eco-Burbuja",
    description: "Plástico de burbuja para protección de envíos con materiales reciclables. Amortiguación inteligente para logística delicada.",
    image: "/src/assets/images/regenerated_image_1778445371326.png",
    tags: ["Ecofriendly", "Protección"],
    color: "from-empakit-mint/20"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-empakit-dark text-slate-100 selection:bg-empakit-brand selection:text-empakit-dark overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-empakit-brand z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-empakit-forest/20 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-empakit-sky/10 blur-[150px] rounded-full" 
        />
        <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] bg-empakit-mint/5 blur-[100px] rounded-full animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
          <div className="glass-dark rounded-2xl px-6 h-20 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <motion.div 
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 bg-empakit-brand rounded-lg flex items-center justify-center"
              >
                <Package className="text-empakit-dark" size={24} />
              </motion.div>
              <span className="text-2xl font-display font-bold tracking-tighter bg-gradient-to-r from-empakit-brand via-empakit-mint to-empakit-sky bg-clip-text text-transparent">
                EMPAKIT
              </span>
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              {["Productos", "Nosotros", "Catalogo", "Contacto"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-bold hover:text-empakit-brand transition-colors uppercase tracking-[0.2em] relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-empakit-brand transition-all group-hover:w-full" />
                </a>
              ))}
              <a 
                href="https://wa.me/50200000000" 
                target="_blank"
                rel="noreferrer"
                className="bg-empakit-brand text-empakit-dark px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:glow-brand transition-all hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                WHATSAPP
              </a>
            </div>

            <button className="md:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-empakit-dark/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            {["Productos", "Nosotros", "Catalogo", "Contacto"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-display font-bold hover:text-empakit-brand"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://wa.me/50200000000" 
              className="bg-empakit-brand text-empakit-dark p-4 rounded-xl font-bold flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              WhatsApp Business
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span 
                  className="glass px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2 mb-6"
                  style={{ color: "#3d90d6" }}
                >
                  <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: "#3d90d6" }} />
                  Eco-Innovación en Guatemala
                </span>
                <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-8">
                  Empaque Industrial <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-empakit-brand via-empakit-mint to-empakit-sky">Eco-Sustentable</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Líderes en venta de empaque industrial en Guatemala. Ofrecemos stretch film, cintas adhesivas y soluciones de embalaje con tecnología avanzada y compromiso ambiental.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <a 
                  href="#contacto"
                  className="bg-empakit-brand text-empakit-dark px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:glow-brand transition-all hover:scale-105"
                >
                  Cotización Rápida <ArrowRight size={22} />
                </a>
                <a 
                  href="#productos"
                  className="glass hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg"
                >
                  Conocer Catálogo
                </a>
              </motion.div>

              <div className="pt-12 grid grid-cols-3 gap-8 border-t border-white/5 max-w-sm mx-auto lg:mx-0">
                <div>
                  <p className="text-2xl font-display font-bold">+10M</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Metros Vendidos</p>
                </div>
                <div>
                  <p className="text-2xl font-display font-bold">100%</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Sustentable</p>
                </div>
                 <div>
                  <p className="text-2xl font-display font-bold">24h</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Entrega Local</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.5)] border border-white/10 p-4 glass">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                    alt="Industrial packaging"
                    className="w-full h-full object-cover rounded-[36px]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Floating Elements on Top of Image */}
                  <div className="absolute top-10 right-[-20px] p-4 glass rounded-2xl shadow-xl flex items-center gap-3 rotate-6 group cursor-default">
                    <div className="w-8 h-8 bg-empakit-brand rounded-lg flex items-center justify-center">
                      <Zap size={16} className="text-empakit-dark" />
                    </div>
                    <span className="font-bold text-sm">Resistencia Pro</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Background Glow for Image */}
              <div className="absolute inset-0 bg-empakit-brand/20 blur-[100px] -z-10 rounded-full scale-110" />
            </div>
          </div>
        </div>
        
        {/* Subtle Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="w-1 h-12 rounded-full bg-gradient-to-b from-empakit-brand to-transparent opacity-20" />
        </motion.div>
      </section>

      {/* Trust & Quality Section (Bento Style) */}
      <section className="py-24" id="nosotros">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center md:text-left mb-16 space-y-4"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-display font-bold">Por qué somos <span className="italic text-empakit-brand">Diferentes</span></motion.h2>
            <motion.p variants={itemVariants} className="text-slate-400 max-w-2xl text-lg">Más que proveedores, somos tus aliados estratégicos en logística y protección.</motion.p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants} className="md:col-span-2 glass p-10 rounded-[32px] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-empakit-brand/5 blur-[80px] -z-10 group-hover:bg-empakit-brand/10 transition-colors" />
              <ShieldCheck className="text-empakit-brand mb-6" size={48} />
              <h3 className="text-3xl font-display font-bold mb-4">Empaque Industrial Certificado</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Cada material de empaque que sale de nuestras bodegas en Guatemala pasa por un riguroso control 
                de calidad. Garantizamos alta resistencia para proteger tu carga eficientemente.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="bg-empakit-forest p-10 rounded-[32px] flex flex-col justify-end group transition-all hover:bg-empakit-forest/90">
              <Truck className="text-empakit-brand mb-6 group-hover:translate-x-4 transition-transform" size={48} />
              <h3 className="text-2xl font-display font-bold mb-2">Logística Inmediata</h3>
              <p className="text-empakit-mint/80 font-medium">Entregas en tiempo récord en toda el área metropolitana y departamentos.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass p-10 rounded-[32px] flex flex-col justify-center items-center text-center">
              <Globe className="text-empakit-brand mb-4 animate-spin-slow" size={40} />
              <p className="text-4xl font-display font-bold mb-1">Guatemala</p>
              <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">Cobertura Nacional</p>
            </motion.div>

            <motion.div variants={itemVariants} className="md:col-span-2 glass p-10 rounded-[32px] flex flex-col md:flex-row items-center gap-10">
              <div className="w-32 h-32 bg-empakit-dark rounded-full border-4 border-empakit-brand/30 flex items-center justify-center shrink-0">
                <Leaf className="text-empakit-brand animate-bounce" size={40} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-display font-bold mb-2">Compromiso Eco-Moderno</h3>
                <p className="text-slate-400">
                  Nuestra meta es reducir la huella de carbono industrial a través de 
                  biopolímeros y materiales 100% reciclables sin sacrificar rendimiento.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Products Section */}
      <section className="py-32 relative" id="productos">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="text-empakit-brand font-bold uppercase tracking-widest text-sm mb-4 block">Stretch Film y Suministros</span>
              <h2 className="text-5xl md:text-7xl font-display font-bold">Insumos <span className="italic opacity-50">Logísticos</span></h2>
            </div>
            <p className="text-slate-500 text-right max-w-xs pb-2">Materiales técnicos diseñados para la industria guatemalteca.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-10"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -15 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${product.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-[40px] -z-10`} />
                <div className="glass rounded-[40px] overflow-hidden border border-white/5 h-full flex flex-col group/card transition-all hover:border-empakit-brand/30">
                  <div className="h-80 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-empakit-dark via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-6 left-6 flex gap-2">
                      {product.tags.map((tag, idx) => (
                        <span 
                          key={tag} 
                          className="glass px-3 py-1 rounded-full text-[10px] font-bold uppercase border-white/10"
                          style={{ color: idx === 0 ? '#f0f0f0' : '#dcdcdc' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <h3 className="text-3xl font-display font-bold mb-4">{product.title}</h3>
                    <p className="text-slate-400 text-lg mb-8 flex-grow leading-relaxed">{product.description}</p>
                    <button className="text-empakit-brand font-bold flex items-center gap-2 group/btn">
                      Explorar Tecnología <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Catalog Dynamic CTA */}
      <section className="py-24" id="catalogo">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative bg-gradient-to-br from-empakit-dark to-empakit-forest p-12 md:p-24 rounded-[60px] overflow-hidden border border-white/10"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(61,214,176,0.1)_0%,transparent_70%)] animate-pulse" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-none">
                  Catálogo <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-empakit-brand to-empakit-sky">Completo 2026</span>
                </h2>
                <p className="text-xl text-slate-300 leading-relaxed max-w-md">
                  Para que tus clientes conozcan tu catálogo completo te pedimos que nos contactes vía WhatsApp o llena nuestro formulario.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                   <a 
                    href="https://wa.me/50200000000" 
                    className="bg-empakit-brand text-empakit-dark px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:glow-brand transition-all"
                  >
                    <MessageCircle size={24} /> WhatsApp
                  </a>
                  <a 
                    href="#contacto" 
                    className="glass px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-white/10 transition-all"
                  >
                    <Send size={24} /> Formulario
                  </a>
                </div>
              </div>
              <div className="relative group">
                <div className="aspect-square glass rounded-[40px] flex items-center justify-center border-white/5 relative overflow-hidden">
                  <Package size={160} className="text-empakit-brand/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-8">
                    <p className="text-2xl font-display font-bold text-white/40 group-hover:text-empakit-brand transition-colors">+150 Productos Especializados</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Dynamic Form */}
      <section className="py-32" id="contacto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-display font-bold mb-8">Hablemos de <br /><span className="text-empakit-brand">Resultados</span></motion.h2>
                <motion.p variants={itemVariants} className="text-slate-400 text-xl leading-relaxed">
                  ¿Necesitas una cotización personalizada o asesoría técnica? 
                  Nuestro equipo de expertos está listo para optimizar tu logística.
                </motion.p>
              </motion.div>
              
              <div className="grid gap-10">
                {[
                  { icon: Phone, label: "Llámanos", value: "+502 2000-0000" },
                  { icon: Mail, label: "Escríbenos", value: "info@empakit.gt" },
                  { icon: MapPin, label: "Sede Central", value: "Guatemala, Guatemala" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group cursor-pointer"
                  >
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center text-empakit-brand group-hover:bg-empakit-brand group-hover:text-empakit-dark transition-all">
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-1">{item.label}</h4>
                      <p className="text-2xl font-display font-bold group-hover:text-empakit-brand transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="glass p-10 md:p-14 rounded-[48px] relative z-10">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 pl-1">Nombre Completo</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-empakit-brand outline-none transition-all focus:bg-white/10" placeholder="Ej: Juan Perez" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs uppercase tracking-widest font-bold text-slate-500 pl-1">Tu Empresa</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-empakit-brand outline-none transition-all focus:bg-white/10" placeholder="Nombre Comercial" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 pl-1">Email Corporativo</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-empakit-brand outline-none transition-all focus:bg-white/10" placeholder="correo@empresa.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-bold text-slate-500 pl-1">Mensaje o Requerimiento</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-empakit-brand outline-none transition-all focus:bg-white/10 resize-none" placeholder="Cuéntanos qué necesitas..."></textarea>
                  </div>
                  <button className="w-full bg-empakit-brand text-empakit-dark py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:glow-brand hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <Send size={24} /> Enviar Solicitud
                  </button>
                </form>
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-empakit-sky/20 blur-[60px] rounded-full -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-20 border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 space-y-8 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-12 h-12 bg-empakit-brand rounded-xl flex items-center justify-center rotate-6">
                  <Package className="text-empakit-dark" size={28} />
                </div>
                <span className="text-3xl font-display font-bold tracking-tighter">EMPAKIT</span>
              </div>
              <p className="text-slate-500 text-lg max-w-md mx-auto md:mx-0">
                Líderes en soluciones de empaque sustentable para la industria moderna en 
                Guatemala. Protegiendo lo que importa, cuidando el entorno.
              </p>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6">Navegación</h4>
              <ul className="space-y-4 text-slate-500">
                {["Productos", "Nosotros", "Catálogo", "Contacto"].map(item => (
                  <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-empakit-brand transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold mb-6">Social</h4>
              <div className="flex justify-center md:justify-start gap-4">
                {[MessageCircle, Globe, Leaf].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center hover:bg-empakit-brand hover:text-empakit-dark transition-all">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
            <p>© 2026 Empakit Guatemala. Diseño Disruptivo.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

