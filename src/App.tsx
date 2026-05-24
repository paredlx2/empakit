/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
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
  Truck,
  Calculator,
  Sparkles,
  TrendingDown,
  Layers,
  ChevronRight,
  ShieldCheck,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

// Product Data customized for Guatemala Industrial market
const products = [
  {
    id: "stretch",
    title: "Stretch Film Pro",
    description: "Stretch film manual y automático de alto rendimiento con memoria elástica superior. Menos micras, más seguridad en tus tarimas.",
    tags: ["Ahorro", "Resistencia", "LLDPE"],
    badge: "Eco-reciclable",
    badgeBg: "bg-primary-light",
    badgeText: "text-[#173404]",
    specs: {
      thickness: "15 micras (Equivalente tecnológico a calibre 80)",
      elongation: "Hasta 320% de pre-estirado certificado",
      adhesion: "Gran retención de carga (Locking force) estable",
      efficiency: "Ahorro de hasta un 40% en kilogramos consumidos",
      carbon: "100% Reciclable de baja densidad lineal (LLDPE)"
    },
    longDesc: "Diseñado para resistir esquinas punzantes y el bacheo del transporte terrestre nacional. Ofrece un estiramiento superlativo combinando máxima retención con menor peso neto de plástico, reduciendo el residuo un 40%."
  },
  {
    id: "tapes",
    title: "Cintas Industriales",
    description: "Cintas adhesivas industriales de alta adherencia diseñadas para soportar condiciones extremas en Guatemala, garantizando que tu carga llegue intacta.",
    tags: ["Industrial", "Extra Adhesión", "Base Agua"],
    badge: "Alta adherencia",
    badgeBg: "bg-cta-light",
    badgeText: "text-[#854F0B]",
    specs: {
      thickness: "45 micras (Servicio Pesado)",
      elongation: "145% de elasticidad",
      adhesion: "Super Adherencia en cartón corrugado",
      efficiency: "99.8% reducción de reaperturas accidentales",
      carbon: "Fórmula adhesiva base agua libre de solventes tóxicos"
    },
    longDesc: "Nuestras cintas industriales logran la máxima adherencia instantánea bajo el clima tropical de Guatemala. Diseñadas para empaques de alta exigencia, reducen drásticamente la necesidad de doble o triple sellado."
  },
  {
    id: "bubble",
    title: "Eco-Burbuja",
    description: "Plástico de burbuja para protección de envíos con materiales reciclables. Amortiguación inteligente para logística delicada.",
    tags: ["Protección", "Cojín de aire", "Ecofriendly"],
    badge: "Protección superior",
    badgeBg: "bg-primary-light",
    badgeText: "text-[#173404]",
    specs: {
      thickness: "Diámetro de burbuja de 3/16 pulgadas",
      elongation: "Cámaras de aire de retención reforzada",
      adhesion: "Barrera protectora hermética y antiestática disponible",
      efficiency: "50% mayor retención de aire bajo presión continua",
      carbon: "Fabricado con un 50% de resina reciclada post-industrial"
    },
    longDesc: "La solución de amortiguación inteligente que absorbe impactos continuos durante los trayectos logísticos guatemaltecos. Fabricado con procesos sustentables de circuito cerrado de bajo consumo térmico."
  }
];

// Fallback illustration component using exact vector paths and branding colors
const ProductFallbackImage = ({ id }: { id: string }) => {
  if (id === "stretch") {
    return (
      <div className="w-full h-full bg-primary-light flex flex-col justify-between p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1D6B3E_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/50 flex items-center justify-center">
          <svg className="w-20 h-20 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <span className="text-[10px] tracking-widest font-semibold uppercase text-primary-brand/70 z-10 font-mono">EMPAKIT PRO</span>
        <div className="z-10 mt-auto">
          <span className="text-[10px] uppercase font-semibold text-primary-brand tracking-widest bg-white/80 px-2 py-0.5 rounded">Fórmula Avanzada</span>
        </div>
      </div>
    );
  } else if (id === "tapes") {
    return (
      <div className="w-full h-full bg-cta-light flex flex-col justify-between p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#EF9F27_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/60 flex items-center justify-center">
          <svg className="w-20 h-20 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 0v2m0-2h2m-2 0H10" />
          </svg>
        </div>
        <span className="text-[10px] tracking-widest font-semibold uppercase text-cta/80 z-10 font-mono">EMPAKIT ADHESIVE</span>
        <div className="z-10 mt-auto">
          <span className="text-[10px] uppercase font-semibold text-[#854F0B] tracking-widest bg-white/80 px-2 py-0.5 rounded">Adherencia Extrema</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full h-full bg-primary-light flex flex-col justify-between p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1D6B3E_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full bg-white/50 flex items-center justify-center">
          <svg className="w-20 h-20 text-primary-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01" />
          </svg>
        </div>
        <span className="text-[10px] tracking-widest font-semibold uppercase text-primary-brand/70 z-10 font-mono">EMPAKIT BUBBLE</span>
        <div className="z-10 mt-auto">
          <span className="text-[10px] uppercase font-semibold text-primary-brand tracking-widest bg-white/80 px-2 py-0.5 rounded">Protección Inteligente</span>
        </div>
      </div>
    );
  }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | typeof products[0]>(null);
  
  // Contact state
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Real-time Calculadora interactive states
  const [selectedCalcProduct, setSelectedCalcProduct] = useState("stretch");
  const [palletsPerDay, setPalletsPerDay] = useState(50);
  const [daysPerYear, setDaysPerYear] = useState(260);
  const [currentWeight, setCurrentWeight] = useState(0.45); // kg of standard material per unit

  // Sticky header transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Multipliers for sustainability mathematics calculations
  const savingsFactor = selectedCalcProduct === "stretch" ? 0.40 : selectedCalcProduct === "tapes" ? 0.25 : 0.35;
  const totalPalletsYearly = palletsPerDay * daysPerYear;
  const currentTotalWeightYearly = totalPalletsYearly * currentWeight;
  const empakitWeightYearly = currentTotalWeightYearly * (1 - savingsFactor);
  const weightSavedKgYearly = currentTotalWeightYearly - empakitWeightYearly;
  
  const co2SavedKg = weightSavedKgYearly * 1.5; 
  const costSavingsQ = weightSavedKgYearly * 16.5; // GTQ saved per kg of material conserved

  const handleApplyCalc = () => {
    const productName = selectedCalcProduct === "stretch" 
      ? "Stretch Film Pro" 
      : selectedCalcProduct === "tapes" 
        ? "Cintas Industriales" 
        : "Eco-Burbuja";
        
    const text = `Hola Empakit, calculé mediante su simulador un consumo de ${palletsPerDay} unidades diarias a lo largo de ${daysPerYear} días anuales. Deseo implementar "${productName}" para lograr un ahorro estimado de Q${costSavingsQ.toLocaleString('es-GT', { maximumFractionDigits: 0 })} al año y evitar el desecho de ${weightSavedKgYearly.toLocaleString('es-GT', { maximumFractionDigits: 0 })} kg de material. Quisiera agendar una asesoría técnica.`;
    setMensaje(text);
    
    const contactEl = document.getElementById("contacto");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-dark-neutral bg-surface-cream overflow-x-hidden selection:bg-cta selection:text-dark-neutral">
      
      {/* 1. NAVBAR */}
      <nav id="header-nav" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? "bg-primary-brand shadow-lg py-3" 
          : "bg-primary-brand py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded bg-cta flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                <Package className="text-dark-neutral" size={18} />
              </div>
              <span className="text-[18px] font-medium text-white tracking-widest uppercase">
                empakit
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Productos", href: "#productos" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Calculadora", href: "#calculadora" },
                { label: "Contacto", href: "#contacto" }
              ].map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-[14px] text-white hover:text-primary-muted transition-colors tracking-wide font-normal"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center">
              <a 
                href="https://wa.me/50230467777" 
                target="_blank"
                rel="noreferrer"
                className="bg-cta text-dark-neutral px-5 py-2.5 rounded text-[14px] font-medium uppercase tracking-wider transition-all duration-200 hover:shadow-glow-cta active:scale-[0.97]"
              >
                Cotizar ahora
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white hover:text-primary-muted focus:outline-none p-1.5 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-primary-brand border-t border-white/10 px-6 py-6 flex flex-col gap-5 shadow-inner"
            >
              {[
                { label: "Nuestros Productos", href: "#productos" },
                { label: "Por qué Nosotros", href: "#nosotros" },
                { label: "Eco-Calculadora", href: "#calculadora" },
                { label: "Contacto y Asesoría", href: "#contacto" }
              ].map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-lg text-white font-normal hover:text-primary-muted py-1 border-b border-white/5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="https://wa.me/50230467777"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-cta text-dark-neutral p-3 rounded text-center text-sm font-medium uppercase tracking-wider active:scale-[0.97] transition-all flex items-center justify-center gap-2 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <MessageCircle size={18} />
                Cotizar por WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO SECTION */}
      <header className="relative bg-dark-neutral text-white pt-32 pb-24 md:py-40 flex items-center overflow-hidden" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Content */}
            <div className="md:col-span-7 space-y-6 text-left">
              
              <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-primary-muted block">
                EMPAQUE INDUSTRIAL · GUATEMALA
              </span>
              
              <h1 className="text-[40px] md:text-[54px] font-medium leading-[1.2] text-white max-w-[560px]">
                Protege lo que importa. Cuida el planeta.
              </h1>
              
              <p className="text-[16px] text-gray-light max-w-[480px] leading-[1.7]">
                Stretch film, cintas y burbuja eco-moderna para proteger tus productos y el planeta. 
                Garantiza la máxima estabilidad de carga reduciendo drásticamente tus desperdicios plásticos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a 
                  href="#contacto"
                  className="bg-cta text-dark-neutral px-8 py-3.5 rounded text-[14px] font-medium uppercase tracking-wider transition-all duration-200 hover:shadow-glow-cta active:scale-[0.97] text-center"
                >
                  Cotizar ahora
                </a>
                <a 
                  href="#productos"
                  className="transparent border border-gray-mid text-gray-light px-8 py-3.5 rounded text-[14px] font-medium uppercase tracking-wider transition-colors duration-200 hover:bg-white/5 text-center"
                >
                  Ver productos
                </a>
              </div>

              {/* Trust Bar below buttons */}
              <div className="pt-8 grid gap-4 sm:grid-cols-3 border-t border-white/10 max-w-xl">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cta shrink-0" />
                  <span className="text-[12px] text-primary-muted font-medium">Entrega en 24h en Guatemala</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cta shrink-0" />
                  <span className="text-[12px] text-primary-muted font-medium">Materiales eco-certificados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-cta shrink-0" />
                  <span className="text-[12px] text-primary-muted font-medium">+500 empresas confían</span>
                </div>
              </div>

            </div>

            {/* Right Column Custom Visual */}
            <div className="md:col-span-5 relative mt-6 md:mt-0">
              <div className="aspect-[5/4] sm:aspect-square md:aspect-[4/5] rounded bg-white/5 border border-white/10 p-3 shadow-2xl relative overflow-hidden group">
                <div className="w-full h-full rounded overflow-hidden">
                  <ProductFallbackImage id="stretch" />
                </div>
                
                {/* Floating highlight badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-dark-neutral/90 backdrop-blur-md border border-white/10 p-4 rounded flex items-center justify-between shadow-xl">
                  <div>
                    <p className="text-[10px] text-primary-muted uppercase tracking-wider font-semibold">Tecnología de Memoria</p>
                    <p className="text-sm font-medium text-white">Stretch de Alta Tenacidad</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary-brand text-white flex items-center justify-center animate-pulse">
                    <Layers size={16} />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Abstract design vector accent background */}
        <div className="absolute right-0 bottom-0 top-0 w-1/3 bg-[#1D3E24]/10 -skew-x-12 origin-top-right select-none pointer-events-none" />
      </header>

      {/* 3. PRODUCTS SECTION */}
      <section className="py-24 bg-white" id="productos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-primary-brand block">
              NUESTROS PRODUCTOS
            </span>
            <h2 className="text-[28px] md:text-[34px] font-medium leading-[1.3] text-dark-neutral">
              Todo lo que necesitas para empacar mejor
            </h2>
            <div className="w-16 h-1 bg-cta mx-auto rounded" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Stretch Film */}
            <div className="group relative border border-transparent hover:border-primary-brand rounded-2xl p-6 bg-[#F5F3EE]/30 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded overflow-hidden relative">
                  <ProductFallbackImage id="stretch" />
                  <span className="absolute top-3 left-3 bg-primary-light text-[#173404] px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
                    Eco-reciclable
                  </span>
                </div>
                
                <div className="flex gap-3 items-center pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                    <Layers size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-dark-neutral">Stretch Film Pro</h3>
                </div>

                <p className="text-[15px] text-gray-mid leading-[1.7]">
                  Stretch film manual y automático de alto rendimiento con memoria elástica superior. Menos micras, más seguridad en tus tarimas.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedProduct(products[0])}
                  className="text-primary-brand text-[14px] font-medium uppercase tracking-wide flex items-center gap-1.5 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Ver especificaciones <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Card 2: Cintas Adhesivas */}
            <div className="group relative border border-transparent hover:border-primary-brand rounded-2xl p-6 bg-[#F5F3EE]/30 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded overflow-hidden relative">
                  <ProductFallbackImage id="tapes" />
                  <span className="absolute top-3 left-3 bg-[#FAEEDA] text-[#854F0B] px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
                    Alta adherencia
                  </span>
                </div>
                
                <div className="flex gap-3 items-center pt-2">
                  <div className="w-10 h-10 rounded-full bg-cta-light flex items-center justify-center text-emerald-850">
                    <CheckCircle2 size={20} className="text-[#854F0B]" />
                  </div>
                  <h3 className="text-[16px] font-medium text-dark-neutral">Cintas Industriales</h3>
                </div>

                <p className="text-[15px] text-gray-mid leading-[1.7]">
                  Cintas adhesivas industriales de alta adherencia diseñadas para soportar condiciones extremas en Guatemala, garantizando que tu carga llegue intacta.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedProduct(products[1])}
                  className="text-primary-brand text-[14px] font-medium uppercase tracking-wide flex items-center gap-1.5 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Ver especificaciones <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Card 3: Plástico de Burbuja */}
            <div className="group relative border border-transparent hover:border-primary-brand rounded-2xl p-6 bg-[#F5F3EE]/30 transition-all duration-200 flex flex-col justify-between shadow-sm hover:shadow-md">
              <div className="space-y-4">
                <div className="aspect-video w-full rounded overflow-hidden relative">
                  <ProductFallbackImage id="bubble" />
                  <span className="absolute top-3 left-3 bg-primary-light text-[#173404] px-3 py-1 rounded text-[10px] font-semibold uppercase tracking-wider">
                    Protección superior
                  </span>
                </div>
                
                <div className="flex gap-3 items-center pt-2">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="text-[16px] font-medium text-dark-neutral">Plástico de Burbuja</h3>
                </div>

                <p className="text-[15px] text-gray-mid leading-[1.7]">
                  Plástico de burbuja para protección de envíos con materiales reciclables. Amortiguación inteligente para logística delicada.
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 mt-6 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedProduct(products[2])}
                  className="text-primary-brand text-[14px] font-medium uppercase tracking-wide flex items-center gap-1.5 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Ver especificaciones <ArrowRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-neutral/95 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="bg-white max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              
              <button 
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface-cream hover:bg-gray-200 transition-colors flex items-center justify-center text-gray-mid cursor-pointer"
                onClick={() => setSelectedProduct(null)}
                aria-label="Cerrar modal"
              >
                <X size={18} />
              </button>

              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 min-h-[220px] relative">
                  <ProductFallbackImage id={selectedProduct.id} />
                </div>
                
                <div className="md:col-span-3 p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[12px] font-medium uppercase text-primary-brand tracking-widest block">Ficha Técnica</span>
                    <h3 className="text-2xl font-medium text-dark-neutral">{selectedProduct.title}</h3>
                    <p className="text-[14px] text-gray-mid">{selectedProduct.longDesc}</p>
                    
                    <div className="space-y-2.5 pt-4 border-t border-gray-100">
                      <div className="flex gap-2.5 items-start text-[13px]">
                        <CheckCircle2 size={16} className="text-primary-brand shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-dark-neutral">Estructura: </span>
                          <span className="text-gray-mid">{selectedProduct.specs.thickness}</span>
                        </div>
                      </div>
                      <div className="flex gap-2.5 items-start text-[13px]">
                        <CheckCircle2 size={16} className="text-primary-brand shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-dark-neutral">Elasticidad: </span>
                          <span className="text-gray-mid">{selectedProduct.specs.elongation}</span>
                        </div>
                      </div>
                      <div className="flex gap-2.5 items-start text-[13px]">
                        <Leaf size={16} className="text-primary-brand shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-dark-neutral">Ecología: </span>
                          <span className="text-emerald-800">{selectedProduct.specs.carbon}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex gap-4">
                    <button 
                      onClick={() => {
                        setSelectedCalcProduct(selectedProduct.id);
                        const calculatorEl = document.getElementById("calculadora");
                        if (calculatorEl) {
                          calculatorEl.scrollIntoView({ behavior: "smooth" });
                        }
                        setSelectedProduct(null);
                      }}
                      className="flex-1 bg-cta text-dark-neutral py-3 rounded text-[13px] uppercase tracking-wider font-semibold hover:shadow-glow-cta active:scale-[0.97] transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Calculator size={16} />
                      Simular mi Ahorro
                    </button>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Eco-Calculadora Section */}
      <section className="py-20 relative bg-white border-t border-gray-100" id="calculadora">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F5F3EE] border border-gray-200/60 rounded-3xl p-8 md:p-14 shadow-lg relative overflow-hidden">
            
            {/* Ambient Leaf Watermark background (SVG) */}
            <div className="absolute right-[-5%] top-[-5%] text-primary-brand/5 select-none pointer-events-none">
              <Leaf size={280} />
            </div>

            <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Controls Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="bg-primary-light text-[#173404] px-3.5 py-1 rounded text-[11px] font-semibold uppercase tracking-wider inline-flex items-center gap-1.5 mb-3">
                    <Calculator size={13} />
                    Simulación de Consumo Técnico
                  </span>
                  <h2 className="text-3xl font-medium tracking-tight text-dark-neutral">
                    Eco-Calculadora de Ahorro
                  </h2>
                  <p className="text-gray-mid text-[15px] mt-2">
                    Visualiza en tiempo real de cuánto plástico, presupuesto y carbono reduces al migrar de materiales de empaquetado convencionales a las resinas de alta velocidad de Empakit.
                  </p>
                </div>

                {/* Sub-selector 1. Insumo */}
                <div className="space-y-3">
                  <span className="text-[12px] uppercase font-bold text-gray-mid tracking-wider block pl-0.5">
                    1. Elige el Suministro
                  </span>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "stretch", label: "Stretch Film", defaultWt: 0.45 },
                      { id: "tapes", label: "Cintas", defaultWt: 0.12 },
                      { id: "bubble", label: "Eco-Burbuja", defaultWt: 0.35 }
                    ].map(item => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => {
                          setSelectedCalcProduct(item.id);
                          setCurrentWeight(item.defaultWt);
                        }}
                        className={`py-2.5 px-2.5 rounded text-[12px] font-semibold uppercase tracking-wider cursor-pointer border transition-all text-center ${
                          selectedCalcProduct === item.id 
                            ? "bg-primary-brand text-white border-primary-brand shadow-sm" 
                            : "bg-white border-gray-200 text-gray-mid hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Sliders */}
                <div className="space-y-5 pt-4 border-t border-gray-200/50">
                  <span className="text-[12px] uppercase font-bold text-gray-mid tracking-wider block pl-0.5">
                    2. Modela tu Volumen Logístico
                  </span>

                  {/* Volume Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-dark-neutral font-medium">Movimiento Diario</span>
                      <span className="text-primary-brand font-medium">{palletsPerDay} <span className="text-xs text-gray-mid">unidades</span></span>
                    </div>
                    <input 
                      type="range" 
                      min="5" 
                      max="300" 
                      value={palletsPerDay}
                      onChange={(e) => setPalletsPerDay(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-brand"
                    />
                  </div>

                  {/* Runtime Days Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-dark-neutral font-medium">Días Operativos Anuales</span>
                      <span className="text-primary-brand font-medium">{daysPerYear} <span className="text-xs text-gray-mid">días</span></span>
                    </div>
                    <input 
                      type="range" 
                      min="50" 
                      max="365" 
                      value={daysPerYear}
                      onChange={(e) => setDaysPerYear(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-brand"
                    />
                  </div>

                  {/* Weight Slider */}
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-dark-neutral font-medium">Material por unidad</span>
                      <span className="text-primary-brand font-medium">{currentWeight.toFixed(2)} <span className="text-xs text-gray-mid">kg</span></span>
                    </div>
                    <input 
                      type="range" 
                      min="0.05" 
                      max="1.50" 
                      step="0.01"
                      value={currentWeight}
                      onChange={(e) => setCurrentWeight(Number(e.target.value))}
                      className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-brand"
                    />
                  </div>
                </div>

              </div>

              {/* Calculations Output Column */}
              <div className="lg:col-span-6">
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-md space-y-6">
                  
                  <div>
                    <h3 className="text-[12px] font-medium uppercase text-gray-mid tracking-wider">Ahorros Anuales Estimados</h3>
                    <p className="text-xl font-medium text-dark-neutral">Mitigación de Merma y Costos</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    
                    {/* Weight Conserved */}
                    <div className="bg-surface-cream rounded-xl p-4 border border-gray-200/40">
                      <div className="flex gap-1.5 items-center text-primary-brand mb-1">
                        <TrendingDown size={16} />
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-mid">Plástico Evitado</span>
                      </div>
                      <p className="text-2xl font-medium text-primary-brand leading-none">
                        -{weightSavedKgYearly.toLocaleString('es-GT', { maximumFractionDigits: 0 })} <span className="text-xs font-normal">kg</span>
                      </p>
                      <p className="text-[10px] text-gray-mid mt-1">Material no generado</p>
                    </div>

                    {/* Cost Benefit */}
                    <div className="bg-surface-cream rounded-xl p-4 border border-gray-200/40">
                      <div className="flex gap-1.5 items-center text-[#854F0B] mb-1">
                        <Sparkles size={16} />
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-mid">Ahorro Presupuesto</span>
                      </div>
                      <p className="text-2xl font-medium text-emerald-800 leading-none">
                        Q{costSavingsQ.toLocaleString('es-GT', { maximumFractionDigits: 0 })}
                      </p>
                      <p className="text-[10px] text-gray-mid mt-1">Gasto de empaque disminuido</p>
                    </div>

                    {/* CO2 Equivalent */}
                    <div className="col-span-2 bg-[#EAF3DE] rounded-xl p-4 border border-primary-brand/10 flex items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#173404] block">Equivalencia Ecológica</span>
                        <p className="text-xl font-medium text-[#173404] leading-tight">
                          -{co2SavedKg.toLocaleString('es-GT', { maximumFractionDigits: 0 })} kg de CO₂ eq
                        </p>
                        <p className="text-[11px] text-[#173404]/70">
                          Equivale a conservar unos <span className="font-bold">{(co2SavedKg / 22).toFixed(0)} árboles maduros</span> capturando carbono de manera continua.
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary-brand text-white flex items-center justify-center shrink-0">
                        <Leaf size={24} className="animate-bounce" />
                      </div>
                    </div>

                  </div>

                  <button
                    type="button"
                    onClick={handleApplyCalc}
                    className="w-full py-3.5 rounded bg-cta text-dark-neutral font-medium text-[13px] uppercase tracking-wider hover:shadow-glow-cta transition-all active:scale-[0.97] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Establecer meta y Cotizar presupuesto <ArrowRight size={16} />
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY EMPAKIT SECTION */}
      <section className="py-24 bg-surface-cream" id="nosotros">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-primary-brand block">
              NUESTROS VALORES
            </span>
            <h2 className="text-[28px] md:text-[34px] font-medium leading-[1.3] text-dark-neutral">
              ¿Por qué elegir Empakit?
            </h2>
            <div className="w-16 h-1 bg-cta mx-auto rounded" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Item 1: Entrega Rápida */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                <Truck size={24} />
              </div>
              <h3 className="text-[16px] font-medium text-dark-neutral">Entrega rápida</h3>
              <p className="text-[14px] text-gray-mid leading-[1.7]">
                Despachamos tus pedidos de stretch, cintas y burbuja en menos de 24 horas hábiles en el perímetro de Guatemala Ciudad.
              </p>
            </div>

            {/* Item 2: Eco-Moderno */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                <Leaf size={24} />
              </div>
              <h3 className="text-[16px] font-medium text-dark-neutral">Eco-moderno</h3>
              <p className="text-[14px] text-gray-mid leading-[1.7]">
                Suministros certificados internacionalmente con menor impacto de huella ambiental sin sacrificar resistencia estructural.
              </p>
            </div>

            {/* Item 3: Precio Justo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                <TrendingDown size={24} />
              </div>
              <h3 className="text-[16px] font-medium text-dark-neutral">Precio justo</h3>
              <p className="text-[14px] text-gray-mid leading-[1.7]">
                Trabajamos directamente de fábrica, eliminando intermediarios para garantizarte la mejor relación costo-rendimiento del país.
              </p>
            </div>

            {/* Item 4: Soporte Directo */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col items-center text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary-light flex items-center justify-center text-primary-brand">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-[16px] font-medium text-dark-neutral">Soporte directo</h3>
              <p className="text-[14px] text-gray-mid leading-[1.7]">
                Soporte personalizado vía WhatsApp y visitas técnicas en bodega para validar en calle tus calibraciones logísticas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. SOCIAL PROOF SECTION */}
      <section className="bg-primary-brand py-16 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 text-center relative z-10">
            
            {/* Stat 1 */}
            <div className="space-y-2 md:border-r border-white/20 last:border-0 md:px-6">
              <p className="text-[36px] font-medium tracking-tight text-white leading-none">
                +500 empresas
              </p>
              <p className="text-[13px] text-primary-muted tracking-wide">
                Guatemaltecas confían en nuestro empaque
              </p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2 md:border-r border-white/20 last:border-0 md:px-6">
              <p className="text-[36px] font-medium tracking-tight text-white leading-none">
                +10 años
              </p>
              <p className="text-[13px] text-primary-muted tracking-wide">
                Liderando la innovación industrial sustentable
              </p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2 md:px-6">
              <p className="text-[36px] font-medium tracking-tight text-white leading-none">
                Entrega 24h
              </p>
              <p className="text-[13px] text-primary-muted tracking-wide">
                Garantizada en toda el área metropolitana
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section WITH Dynamic Form Integrations */}
      <section className="py-24 bg-white" id="contacto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            
            {/* Left Description Column */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[12px] font-medium uppercase tracking-[0.06em] text-primary-brand block">
                  ASISTENCIA DIRECTA
                </span>
                <h2 className="text-[28px] font-medium leading-[1.3] text-dark-neutral">
                  Optimiza tu Embalaje Empresarial
                </h2>
                <p className="text-[15px] text-gray-mid leading-[1.7]">
                  Obtén muestras gratis para certificar calibres en tu propia línea logística, u obtén cotizaciones volumétricas bajo requerimiento exacto.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-brand shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase font-bold text-gray-mid tracking-wider">Línea Directa</p>
                    <p className="text-[15px] font-medium text-dark-neutral">+502 3046-7777</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-brand shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase font-bold text-gray-mid tracking-wider">Correo Corporativo</p>
                    <p className="text-[15px] font-medium text-dark-neutral">correo@empakit.gt</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary-brand shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[12px] uppercase font-bold text-gray-mid tracking-wider">Oficinas y Bodegas</p>
                    <p className="text-[15px] font-medium text-dark-neutral">Pamplona, Zona 12 · Ciudad de Guatemala</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Form Column */}
            <div className="md:col-span-7 bg-[#F5F3EE]/40 border border-gray-200/50 rounded-2xl p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#EAF3DE] text-[#173404] flex items-center justify-center mx-auto border-2 border-primary-brand shadow-inner">
                      <CheckCircle2 size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-dark-neutral">¡Solicitud Procesada, {nombre || "Estimado Cliente"}!</h3>
                      <p className="text-gray-mid text-sm max-w-sm mx-auto leading-relaxed">
                        Un consultor corporativo te enviará las cotizaciones volumétricas a <span className="font-semibold text-dark-neutral">{email}</span> en menos de 2 horas hábiles.
                      </p>
                    </div>

                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setNombre("");
                        setEmpresa("");
                        setEmail("");
                        setMensaje("");
                      }}
                      className="text-xs uppercase font-bold tracking-wider text-primary-brand hover:underline cursor-pointer"
                    >
                      Realizar otra consulta
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    if (!nombre || !email) {
                      alert("Por favor completa al menos tu nombre y correo corporativo para que podamos contactarte.");
                      return;
                    }
                    setFormSubmitted(true);
                  }} className="space-y-5">
                    
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium uppercase text-gray-mid pl-0.5">Nombre Completo</label>
                        <input 
                          type="text" 
                          required
                          value={nombre}
                          onChange={(e) => setNombre(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:border-primary-brand outline-none transition-all placeholder:text-gray-light"
                          placeholder="Ej: Ing. Jorge Sandoval"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[12px] font-medium uppercase text-gray-mid pl-0.5">Empresa</label>
                        <input 
                          type="text" 
                          value={empresa}
                          onChange={(e) => setEmpresa(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:border-primary-brand outline-none transition-all placeholder:text-gray-light"
                          placeholder="Ej: Logística Centroamericana"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-medium uppercase text-gray-mid pl-0.5">Correo Corporativo</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:border-primary-brand outline-none transition-all placeholder:text-gray-light"
                        placeholder="ejemplo@organizacion.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[12px] font-medium uppercase text-gray-mid pl-0.5">Mensaje o Requerimientos</label>
                      <textarea 
                        rows={4}
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm focus:border-primary-brand outline-none transition-all resize-none placeholder:text-gray-light"
                        placeholder="Escribe aquí los materiales de empaque y volumen mensual aproximado..."
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-cta text-dark-neutral py-3.5 rounded text-[14px] font-medium uppercase tracking-wider hover:shadow-glow-cta active:scale-[0.97] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send size={16} />
                      Enviar Solicitud
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-dark-neutral py-20 text-white relative overflow-hidden" id="cotizacion-fast">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
            
            <h2 className="text-[28px] font-medium text-white tracking-tight">
              ¿Listo para empacar mejor?
            </h2>
            
            <p className="text-[16px] text-gray-light leading-[1.7]">
              Solicita tu cotización hoy. Sin compromiso. Atendemos solicitudes corporativas, 
              proveemos pruebas físicas sin costo y visitas del departamento técnico.
            </p>
            
            <a 
              href="https://wa.me/50230467777?text=Deseo%20cotizar%20insumos%20de%20empaque%20industrial%20para%20mi%20empresa"
              target="_blank"
              rel="noreferrer"
              className="bg-cta text-dark-neutral px-8 py-3.5 rounded text-[16px] font-medium uppercase tracking-wider transition-all duration-200 hover:shadow-glow-cta active:scale-[0.97] inline-flex items-center gap-2.5 shadow-md"
            >
              <MessageCircle size={20} className="fill-current" />
              Cotizar por WhatsApp
            </a>

          </div>
        </div>

        {/* Dynamic abstract accent vectors */}
        <div className="absolute top-[-40%] left-[-20%] w-96 h-96 rounded-full bg-primary-brand/5 blur-[80px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-cta/5 blur-[100px]" />
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-dark-neutral text-white pt-16 pb-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
            
            {/* Col 1: Logo & Tagline */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-cta flex items-center justify-center">
                  <Package className="text-dark-neutral" size={14} />
                </div>
                <span className="text-[18px] font-medium text-white tracking-widest uppercase">
                  empakit
                </span>
              </div>
              <p className="text-[14px] text-gray-light max-w-sm leading-[1.7]">
                Empaque industrial eco-moderno. Innovamos de la mano de un portafolio de alta resistencia para reducir costos y mermas plásticas en los embalajes de Guatemala.
              </p>
            </div>

            {/* Col 2: Navigation Links */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white">Navegación</h4>
              <ul className="space-y-2.5 text-[14px]">
                <li>
                  <a href="#productos" className="text-gray-light hover:text-white transition-colors">Nuestros Productos</a>
                </li>
                <li>
                  <a href="#nosotros" className="text-gray-light hover:text-white transition-colors">Por Qué Suministramos</a>
                </li>
                <li>
                  <a href="#calculadora" className="text-gray-light hover:text-white transition-colors">Simulador de Ahorro</a>
                </li>
                <li>
                  <a href="#contacto" className="text-gray-light hover:text-white transition-colors">Contacto Corporativo</a>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Info */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-white">Canales Directos</h4>
              <ul className="space-y-3 text-[14px]">
                <li className="flex items-center gap-2 text-gray-light">
                  <MessageCircle size={16} className="text-primary-muted" />
                  <span>WhatsApp: +502 3046-7777</span>
                </li>
                <li className="flex items-center gap-2 text-gray-light">
                  <Mail size={16} className="text-primary-muted" />
                  <span>Correo: correo@empakit.gt</span>
                </li>
                <li className="flex items-center gap-2 text-gray-light flex-wrap">
                  <Star size={16} className="text-cta fill-cta" />
                  <span>Lunes a Viernes: 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar copyright & origin indicators */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[13px] text-gray-light">
            <p>© 2026 Empakit S.A. Todos los derechos reservados.</p>
            <p className="flex items-center gap-1.5">
              Hecho en Guatemala <span className="text-[16px] select-none">🇬🇹</span>
            </p>
          </div>

        </div>
      </footer>

      {/* Sticky Floating WhatsApp CTA Button on Scroll */}
      <a 
        href="https://wa.me/50230467777?text=Hola%20Empakit,%20deseo%20realizar%20un%20pedido%20o%20cotizar%20insumos%20de%20empaque."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-11 h-11 sm:w-12 sm:h-12 bg-cta text-dark-neutral rounded-full flex items-center justify-center shadow-lg hover:shadow-glow-cta interactive transition-all hover:scale-110 active:scale-[0.95] z-40 cursor-pointer"
        aria-label="Contáctanos vía WhatsApp"
      >
        <MessageCircle size={22} className="fill-current" />
      </a>

    </div>
  );
}
