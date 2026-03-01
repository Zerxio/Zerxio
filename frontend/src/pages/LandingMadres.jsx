/**
 * ============================================
 * LANDING PAGE - DÍA DE LAS MADRES
 * StudioMix - www.studiomix.com.mx/dinamicadiezdemayo
 * ============================================
 * 
 * Componente principal que contiene toda la landing page
 * para la dinámica del Día de las Madres.
 * 
 * Características:
 * - Hero Section con título animado
 * - Bloque de indicaciones (2 columnas)
 * - Carrusel de plantillas CSS/JS puro
 * - Editor de tarjeta interactivo
 * - Generación de imagen con html2canvas
 * - Compartir por WhatsApp
 */

import { useState, useRef, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';
import './LandingMadres.css';

// ============================================
// COMPONENTE: Navbar
// ============================================
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`lm-navbar ${isScrolled ? 'scrolled' : ''}`} data-testid="navbar">
            <div className="lm-navbar-container">
                <a href="#home" className="lm-navbar-logo" data-testid="navbar-logo">
                    <div className="lm-logo-placeholder">STUDIO MIX</div>
                </a>

                <ul className="lm-navbar-links" data-testid="navbar-links">
                    <li><a href="#home" data-testid="nav-home">Home</a></li>
                    <li><a href="#indicaciones" data-testid="nav-indicaciones">Indicaciones</a></li>
                    <li><a href="#plantillas" data-testid="nav-plantilla">Plantilla</a></li>
                    <li><a href="#registro" data-testid="nav-registro">Registro</a></li>
                </ul>

                <div 
                    className={`lm-hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    data-testid="hamburger-menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div className={`lm-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`} data-testid="mobile-menu">
                <ul>
                    <li><a href="#home" onClick={handleNavClick}>Home</a></li>
                    <li><a href="#indicaciones" onClick={handleNavClick}>Indicaciones</a></li>
                    <li><a href="#plantillas" onClick={handleNavClick}>Plantilla</a></li>
                    <li><a href="#registro" onClick={handleNavClick}>Registro</a></li>
                </ul>
            </div>
        </nav>
    );
};

// ============================================
// COMPONENTE: Hero Section
// ============================================
const HeroSection = () => {
    return (
        <section id="home" className="lm-hero" data-testid="hero-section">
            <div className="lm-hero-background"></div>
            <div className="lm-hero-overlay"></div>
            <div className="lm-hero-content">
                <h1 className="lm-hero-title" data-testid="hero-title">Dícelo con Amor a Mamá</h1>
                <p className="lm-hero-subtitle">Crea una tarjeta digital personalizada y sorprende a mamá este día especial</p>
                <div className="lm-hero-cta">
                    <a href="#plantillas" className="lm-btn-primary" data-testid="hero-cta">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        Crear Tarjeta
                    </a>
                </div>
            </div>
        </section>
    );
};

// ============================================
// COMPONENTE: Indicaciones
// ============================================
const IndicacionesSection = () => {
    return (
        <section id="indicaciones" className="lm-indicaciones" data-testid="indicaciones-section">
            <div className="lm-indicaciones-container">
                <div className="lm-indicaciones-content">
                    <h2>¿Cómo <span>funciona</span>?</h2>
                    <p>Crear una tarjeta especial para mamá es muy fácil. Sigue estos simples pasos y tendrás lista tu sorpresa en minutos.</p>
                    
                    <div className="lm-indicaciones-steps">
                        <div className="lm-step">
                            <div className="lm-step-number">1</div>
                            <div className="lm-step-content">
                                <h3>Elige tu plantilla</h3>
                                <p>Explora nuestra galería de diseños exclusivos y selecciona el que más te guste.</p>
                            </div>
                        </div>
                        
                        <div className="lm-step">
                            <div className="lm-step-number">2</div>
                            <div className="lm-step-content">
                                <h3>Personaliza tu mensaje</h3>
                                <p>Escribe una dedicatoria especial con todo tu cariño para mamá.</p>
                            </div>
                        </div>
                        
                        <div className="lm-step">
                            <div className="lm-step-number">3</div>
                            <div className="lm-step-content">
                                <h3>Descarga y comparte</h3>
                                <p>Guarda tu tarjeta como imagen y envíala por WhatsApp directamente.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="lm-indicaciones-image">
                    <img 
                        src="https://images.unsplash.com/photo-1771134572111-967700a8bb31?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxwaW5rJTIwcm9zZXMlMjBib3VxdWV0JTIwZWxlZ2FudHxlbnwwfHx8fDE3NzI0MDE3Njd8MA&ixlib=rb-4.1.0&q=85" 
                        alt="Ramo de rosas para mamá"
                    />
                </div>
            </div>
        </section>
    );
};

// ============================================
// COMPONENTE: Plantillas de Tarjeta
// ============================================

// Plantilla 1: Floral Elegante
const TemplateFloral = ({ message, showButton, onSelect }) => (
    <div className="lm-template lm-template-floral" data-testid="template-1">
        <span className="lm-template-header">Feliz Día de las Madres</span>
        <h2 className="lm-template-title">Para la Mejor Mamá</h2>
        <p className={`lm-template-message ${!message ? 'placeholder' : ''}`}>
            {message || 'Tu mensaje aparecerá aquí...'}
        </p>
        <span className="lm-template-footer">Con amor, de tu familia</span>
        {showButton && (
            <button className="lm-btn-use-template" onClick={onSelect} data-testid="btn-use-template-1">
                Usar esta plantilla
            </button>
        )}
    </div>
);

// Plantilla 2: Rosa Suave
const TemplateRosa = ({ message, showButton, onSelect }) => (
    <div className="lm-template lm-template-rosa" data-testid="template-2">
        <div className="lm-decorative-line"></div>
        <span className="lm-template-header">10 de Mayo</span>
        <h2 className="lm-template-title">Mamá, Eres Increíble</h2>
        <p className={`lm-template-message ${!message ? 'placeholder' : ''}`}>
            {message || 'Tu mensaje aparecerá aquí...'}
        </p>
        <span className="lm-template-footer">Te quiero mucho</span>
        {showButton && (
            <button className="lm-btn-use-template" onClick={onSelect} data-testid="btn-use-template-2">
                Usar esta plantilla
            </button>
        )}
    </div>
);

// Plantilla 3: Mármol
const TemplateMarmol = ({ message, showButton, onSelect }) => (
    <div className="lm-template lm-template-marmol" data-testid="template-3">
        <span className="lm-template-header">Día Especial</span>
        <h2 className="lm-template-title">Gracias por Todo, Mamá</h2>
        <p className={`lm-template-message ${!message ? 'placeholder' : ''}`}>
            {message || 'Tu mensaje aparecerá aquí...'}
        </p>
        <span className="lm-template-footer">Siempre en mi corazón</span>
        {showButton && (
            <button className="lm-btn-use-template" onClick={onSelect} data-testid="btn-use-template-3">
                Usar esta plantilla
            </button>
        )}
    </div>
);

// Plantilla 4: Minimal Blanco
const TemplateMinimal = ({ message, showButton, onSelect }) => (
    <div className="lm-template lm-template-minimal" data-testid="template-4">
        <div className="lm-corner-accent top-left"></div>
        <div className="lm-corner-accent bottom-right"></div>
        <span className="lm-template-header">Felicidades</span>
        <h2 className="lm-template-title">Te Amo, Mamá</h2>
        <p className={`lm-template-message ${!message ? 'placeholder' : ''}`}>
            {message || 'Tu mensaje aparecerá aquí...'}
        </p>
        <span className="lm-template-footer">Tu hij@ que te adora</span>
        {showButton && (
            <button className="lm-btn-use-template" onClick={onSelect} data-testid="btn-use-template-4">
                Usar esta plantilla
            </button>
        )}
    </div>
);

// Plantilla 5: Abstracto Moderno
const TemplateAbstract = ({ message, showButton, onSelect }) => (
    <div className="lm-template lm-template-abstract" data-testid="template-5">
        <span className="lm-template-header">Día de las Madres</span>
        <h2 className="lm-template-title">Mamá, Eres Mi Todo</h2>
        <p className={`lm-template-message ${!message ? 'placeholder' : ''}`}>
            {message || 'Tu mensaje aparecerá aquí...'}
        </p>
        <span className="lm-template-footer">Con todo mi amor</span>
        {showButton && (
            <button className="lm-btn-use-template" onClick={onSelect} data-testid="btn-use-template-5">
                Usar esta plantilla
            </button>
        )}
    </div>
);

// Array de plantillas
const TEMPLATES = [
    { id: 'floral', Component: TemplateFloral },
    { id: 'rosa', Component: TemplateRosa },
    { id: 'marmol', Component: TemplateMarmol },
    { id: 'minimal', Component: TemplateMinimal },
    { id: 'abstract', Component: TemplateAbstract },
];

// ============================================
// COMPONENTE: Carrusel de Plantillas
// ============================================
const CarouselSection = ({ onSelectTemplate }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = TEMPLATES.length;

    const goToSlide = useCallback((index) => {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        setCurrentSlide(index);
    }, [totalSlides]);

    const prevSlide = () => goToSlide(currentSlide - 1);
    const nextSlide = () => goToSlide(currentSlide + 1);

    // Soporte para teclas de navegación
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [currentSlide]);

    return (
        <section id="plantillas" className="lm-plantillas" data-testid="plantillas-section">
            <div className="lm-plantillas-header">
                <h2>Elige tu <span>plantilla</span></h2>
                <p>Tenemos 5 diseños exclusivos para que encuentres el perfecto para mamá</p>
            </div>

            <div className="lm-carousel-wrapper">
                <div className="lm-carousel" data-testid="carousel">
                    <div 
                        className="lm-carousel-track" 
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        data-testid="carousel-track"
                    >
                        {TEMPLATES.map((template, index) => {
                            const { id, Component } = template;
                            return (
                                <div 
                                    key={id} 
                                    className="lm-carousel-slide" 
                                    data-template={id}
                                >
                                    <Component 
                                        message=""
                                        showButton={true}
                                        onSelect={() => onSelectTemplate(id)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <button className="lm-carousel-btn prev" onClick={prevSlide} data-testid="carousel-prev">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button className="lm-carousel-btn next" onClick={nextSlide} data-testid="carousel-next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            <div className="lm-carousel-dots" data-testid="carousel-dots">
                {TEMPLATES.map((_, index) => (
                    <button 
                        key={index}
                        className={`lm-carousel-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        data-testid={`dot-${index}`}
                    />
                ))}
            </div>
        </section>
    );
};

// ============================================
// COMPONENTE: Editor de Tarjeta
// ============================================
const EditorSection = ({ selectedTemplate, onClose }) => {
    const [message, setMessage] = useState('');
    const [isGenerated, setIsGenerated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const cardPreviewRef = useRef(null);

    // Obtener el componente de plantilla seleccionado
    const selectedTemplateData = TEMPLATES.find(t => t.id === selectedTemplate);
    const SelectedComponent = selectedTemplateData?.Component;

    /**
     * Genera la tarjeta con el mensaje personalizado
     */
    const handleGenerate = () => {
        if (!message.trim()) {
            alert('Por favor, escribe una dedicatoria para mamá.');
            return;
        }
        setIsGenerated(true);
        
        // Scroll a la sección de compartir
        setTimeout(() => {
            document.querySelector('.lm-share-section')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'center' 
            });
        }, 300);
    };

    /**
     * Descarga la tarjeta como imagen PNG usando html2canvas
     */
    const handleDownload = async () => {
        if (!isGenerated || !cardPreviewRef.current) {
            alert('Primero genera tu tarjeta con una dedicatoria.');
            return;
        }

        setIsLoading(true);

        try {
            const canvas = await html2canvas(cardPreviewRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: null,
                logging: false
            });

            const imageData = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = imageData;
            downloadLink.download = 'tarjeta-dia-de-las-madres.png';
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);

        } catch (error) {
            console.error('Error al generar imagen:', error);
            alert('Hubo un error al generar la imagen. Intenta de nuevo.');
        } finally {
            setIsLoading(false);
        }
    };

    /**
     * Comparte por WhatsApp usando Web Share API o fallback
     */
    const handleWhatsAppShare = async () => {
        const phoneNumber = whatsappNumber.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
        const shareMessage = '¡Hola! Te he preparado una sorpresa especial por el Día de las Madres. Mírala aquí: www.studiomix.com.mx/dinamicadiezdemayo';

        // Intentar Web Share API
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Feliz Día de las Madres',
                    text: shareMessage,
                    url: 'https://www.studiomix.com.mx/dinamicadiezdemayo'
                });
                return;
            } catch (err) {
                console.log('Web Share cancelado, usando fallback');
            }
        }

        // Fallback: Abrir WhatsApp directamente
        const encodedMessage = encodeURIComponent(shareMessage);
        let whatsappUrl;

        if (phoneNumber && phoneNumber.length >= 10) {
            whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        } else {
            whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
        }

        window.open(whatsappUrl, '_blank');
    };

    if (!selectedTemplate || !SelectedComponent) return null;

    return (
        <section className="lm-editor-section active" id="editor" data-testid="editor-section">
            <div className="lm-editor-container">
                <div className="lm-editor-header">
                    <h3>Personaliza tu tarjeta</h3>
                    <p>Escribe tu dedicatoria y genera tu tarjeta personalizada</p>
                </div>

                <div className="lm-editor-grid">
                    {/* Vista previa de la tarjeta */}
                    <div className="lm-editor-preview">
                        <p className="lm-preview-label">Vista previa</p>
                        <div className="lm-card-preview-container">
                            <div 
                                className="lm-card-preview" 
                                id="card-preview" 
                                ref={cardPreviewRef}
                                data-testid="card-preview"
                            >
                                <SelectedComponent 
                                    message={message} 
                                    showButton={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Controles del editor */}
                    <div className="lm-editor-controls">
                        <div className="lm-control-group">
                            <label htmlFor="dedicatoria">Tu dedicatoria para mamá</label>
                            <textarea
                                id="dedicatoria"
                                placeholder="Escribe aquí tu dedicatoria para mamá..."
                                maxLength={300}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                data-testid="dedicatoria-textarea"
                            />
                            <span className="lm-char-counter">
                                <span id="charCount">{message.length}</span>/300 caracteres
                            </span>
                        </div>

                        <button 
                            className="lm-btn-generate" 
                            onClick={handleGenerate}
                            data-testid="btn-generate"
                        >
                            Generar Tarjeta
                        </button>

                        {/* Sección de compartir */}
                        {isGenerated && (
                            <div className="lm-share-section active" data-testid="share-section">
                                <p className="lm-preview-label">¡Tu tarjeta está lista!</p>
                                <div className="lm-share-buttons">
                                    <button 
                                        className={`lm-btn-download ${isLoading ? 'loading' : ''}`}
                                        onClick={handleDownload}
                                        disabled={isLoading}
                                        data-testid="btn-download"
                                    >
                                        {isLoading ? (
                                            <span>Generando...</span>
                                        ) : (
                                            <>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                                Descargar Tarjeta
                                            </>
                                        )}
                                    </button>

                                    <div className="lm-whatsapp-share">
                                        <input
                                            type="tel"
                                            placeholder="+52 123 456 7890"
                                            value={whatsappNumber}
                                            onChange={(e) => setWhatsappNumber(e.target.value)}
                                            data-testid="whatsapp-input"
                                        />
                                        <button 
                                            className="lm-btn-whatsapp" 
                                            onClick={handleWhatsAppShare}
                                            data-testid="btn-whatsapp"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                            </svg>
                                            Compartir por WhatsApp
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

// ============================================
// COMPONENTE: Registro
// ============================================
const RegistroSection = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /**
     * FUNCIÓN PLACEHOLDER PARA BACKEND
     * ============================================
     * Esta función simula el guardado en base de datos.
     * En producción, aquí se haría una petición fetch() al backend PHP.
     * 
     * Ejemplo de implementación real:
     * 
     * const guardarEnBaseDeDatos = async (datos) => {
     *     try {
     *         const response = await fetch('/api/registro.php', {
     *             method: 'POST',
     *             headers: { 'Content-Type': 'application/json' },
     *             body: JSON.stringify(datos)
     *         });
     *         if (!response.ok) throw new Error('Error en el servidor');
     *         const result = await response.json();
     *         // Manejar respuesta exitosa
     *     } catch (error) {
     *         console.error('Error:', error);
     *     }
     * };
     */
    const guardarEnBaseDeDatos = (datos) => {
        console.log('Datos del registro (simulado):', datos);
        alert('¡Gracias por registrarte! Pronto recibirás nuestras novedades.');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarEnBaseDeDatos(formData);
        setFormData({ nombre: '', email: '', telefono: '' });
    };

    return (
        <section id="registro" className="lm-registro" data-testid="registro-section">
            <div className="lm-registro-container">
                <h2>¿Quieres más <span>sorpresas</span>?</h2>
                <p>Regístrate para recibir contenido exclusivo, plantillas nuevas y promociones especiales de StudioMix.</p>

                <form className="lm-registro-form" onSubmit={handleSubmit} data-testid="registro-form">
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre completo"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        data-testid="registro-nombre"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Tu correo electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="registro-email"
                    />
                    <input
                        type="tel"
                        name="telefono"
                        placeholder="Tu número de teléfono (opcional)"
                        value={formData.telefono}
                        onChange={handleChange}
                        data-testid="registro-telefono"
                    />
                    <button type="submit" className="lm-btn-registro" data-testid="btn-registro">
                        Registrarme
                    </button>
                </form>
            </div>
        </section>
    );
};

// ============================================
// COMPONENTE: Footer
// ============================================
const Footer = () => (
    <footer className="lm-footer" data-testid="footer">
        <p>&copy; 2025 <a href="https://www.studiomix.com.mx" target="_blank" rel="noopener noreferrer">StudioMix</a>. Todos los derechos reservados.</p>
    </footer>
);

// ============================================
// COMPONENTE PRINCIPAL: Landing Page
// ============================================
const LandingMadres = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);

    const handleSelectTemplate = (templateId) => {
        setSelectedTemplate(templateId);
        
        // Scroll al editor
        setTimeout(() => {
            document.getElementById('editor')?.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 100);
    };

    return (
        <div className="lm-landing-page">
            <Navbar />
            <HeroSection />
            <IndicacionesSection />
            <CarouselSection onSelectTemplate={handleSelectTemplate} />
            {selectedTemplate && (
                <EditorSection 
                    selectedTemplate={selectedTemplate}
                    onClose={() => setSelectedTemplate(null)}
                />
            )}
            <RegistroSection />
            <Footer />
        </div>
    );
};

export default LandingMadres;
