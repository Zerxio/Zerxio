# PRD - Landing Page Día de las Madres (StudioMix)

## Problema Original
Landing Page promocional del Día de las Madres para www.studiomix.com.mx/dinamicadiezdemayo con:
- Archivo único HTML con CSS y JavaScript vanilla
- Hero Section 100vw x 600px
- Bloque explicativo 2 columnas
- Carrusel CSS/JS con 5 plantillas
- Editor de tarjeta interactivo
- Generación de imagen con html2canvas
- Compartir por WhatsApp

## Requisitos del Usuario
- Colores: Blanco, negro y tonos rosados
- Tipografía: Montserrat (Bold títulos, Regular textos)
- Navbar: Logo placeholder + Home | Indicaciones | Plantilla | Registro
- Imágenes: Placeholders de banco gratuito

## User Personas
- **Usuario principal**: Persona que quiere enviar una tarjeta digital personalizada a su mamá
- **Target**: Público general mexicano, especialmente jóvenes y adultos con acceso a WhatsApp

## Core Requirements (Static)
1. Hero Section con título "DÍCELO CON AMOR A MAMÁ"
2. Sección de indicaciones paso a paso
3. Carrusel de 5 plantillas diferentes
4. Editor de tarjeta con textarea para dedicatoria
5. Generación de imagen PNG descargable (html2canvas)
6. Compartir por WhatsApp (Web Share API + fallback)
7. Formulario de registro
8. Diseño 100% responsive

## What's Been Implemented
### 01-Mar-2025
- ✅ Navbar con glassmorphism y navegación por secciones
- ✅ Menú hamburguesa para móvil
- ✅ Hero Section con imagen de fondo y overlay
- ✅ Sección de indicaciones (2 columnas)
- ✅ Carrusel CSS/JS con 5 plantillas únicas:
  - Floral Elegante (rosa degradado)
  - Rosa Suave (borde rosa)
  - Mármol (textura)
  - Minimal Blanco (esquinas decorativas)
  - Abstracto Moderno (fondo oscuro)
- ✅ Editor de tarjeta con preview en tiempo real
- ✅ Contador de caracteres (300 max)
- ✅ Generación de imagen con html2canvas
- ✅ Descarga de tarjeta PNG
- ✅ Compartir por WhatsApp (Web Share + fallback wa.me)
- ✅ Formulario de registro (SIMULADO)
- ✅ Responsive design (móvil/tablet/desktop)
- ✅ Archivo HTML único adicional: `/app/dinamicadiezdemayo.html`

## Prioritized Backlog

### P0 - Completado
- [x] Todas las funcionalidades core implementadas

### P1 - Próximo
- [ ] Integración con backend PHP para guardar registros
- [ ] Sustituir logo placeholder por SVG real de StudioMix
- [ ] Sustituir imágenes placeholder por imágenes finales

### P2 - Futuro
- [ ] Analytics de conversión
- [ ] A/B testing de plantillas
- [ ] Opción de personalizar colores de texto
- [ ] Más plantillas de tarjetas

## Next Tasks
1. Cliente debe reemplazar logo placeholder con SVG de StudioMix
2. Cliente debe reemplazar imágenes placeholder
3. Implementar endpoint PHP para `guardarEnBaseDeDatos()`
4. Configurar dominio www.studiomix.com.mx/dinamicadiezdemayo
