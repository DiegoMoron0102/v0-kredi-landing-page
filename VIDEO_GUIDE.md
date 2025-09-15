# Guía para Videos de Fondo - Tema Oscuro

## 🌙 **Diseño Optimizado para Videos**

Tu landing page ahora tiene un **tema oscuro profesional** que realza cualquier video de fondo. Esto crea un contraste perfecto y hace que los videos se vean increíbles.

## 📹 Cómo agregar videos

### 1. Preparar el video para tema oscuro
- **Formato**: MP4 (H.264) - óptimo para web
- **Resolución**: 1920x1080 o 4K para calidad premium  
- **Duración**: 10-30 segundos para loops perfectos
- **Brillo**: Videos con buen contraste funcionan mejor en fondo oscuro
- **Tamaño**: Menos de 15MB para carga rápida

### 2. Tipos de videos recomendados
- **Tecnología/Blockchain**: Animaciones de datos, redes, conexiones
- **Finanzas**: Gráficos en movimiento, números, estadísticas
- **Abstract**: Partículas, ondas, gradientes animados
- **Corporativo**: Edificios, oficinas con buena iluminación

### 3. Ubicar el video
```
public/
  ├── hero-video.mp4        # Video principal del hero
  ├── benefits-bg.mp4       # Video de fondo para beneficios
  ├── requirements-bg.mp4   # Video para requisitos
  └── logo-kredi.png        # Tu logo
```

### 4. Usar el componente VideoBackground mejorado
```tsx
<VideoBackground 
  src="/tu-video.mp4" 
  className="min-h-screen"
  overlay="gradient"  // "light" | "dark" | "gradient" | "none"
>
  <div>Tu contenido aquí</div>
</VideoBackground>
```

### 5. Opciones de overlay
- `"gradient"` - Gradiente suave para mejor legibilidad (recomendado)
- `"dark"` - Overlay oscuro sólido
- `"light"` - Overlay claro (para videos oscuros)
- `"none"` - Sin overlay (video puro)

## 🎨 **Características del Tema Oscuro**

### Colores optimizados:
- **Fondo principal**: Negro profundo (#0a0a0a)
- **Cards**: Glass morphism con transparencia
- **Bordes**: Efectos neón sutiles
- **Texto**: Blanco brillante con sombras
- **Acentos**: Cyan eléctrico (#0ea5e9) y verde esmeralda (#10b981)

### Efectos visuales:
- ✨ **Glass morphism** en todas las cards
- 🌟 **Neon text effects** en títulos importantes  
- 💫 **Enhanced glow** en botones y elementos interactivos
- 🎭 **Gradientes animados** en textos especiales
- 🔮 **Backdrop blur** en header y overlays

## 🎬 **Ejemplos de Implementación**

### Hero Section con video:
```tsx
<VideoBackground 
  src="/hero-crypto.mp4" 
  className="min-h-screen flex items-center"
  overlay="gradient"
>
  <AnimatedText direction="up" delay={0.2}>
    <h1 className="neon-text">Tu título impactante</h1>
  </AnimatedText>
</VideoBackground>
```

### Section con video de fondo sutil:
```tsx
<VideoBackground 
  src="/abstract-bg.mp4" 
  className="py-16"
  overlay="dark"
>
  <FadeInSection>
    <div className="glass-card">Tu contenido</div>
  </FadeInSection>
</VideoBackground>
```

## 🚀 **Optimizaciones Aplicadas**

### Performance:
- **Lazy loading** de videos
- **Compresión automática** del navegador
- **Fallback gradients** si el video no carga
- **Responsive scaling** automático

### Accesibilidad:
- **Reducción de movimiento** respetada
- **Contraste optimizado** para legibilidad
- **Focus states** visibles en tema oscuro
- **Screen reader friendly**

### SEO:
- **Core Web Vitals** optimizados
- **Carga progresiva** de contenido
- **Meta tags** actualizados para tema oscuro

## 💡 **Tips Profesionales**

1. **Contraste es clave**: Asegúrate de que el texto sea siempre legible
2. **Menos es más**: No sobrecargues con demasiados videos
3. **Coherencia**: Mantén un estilo visual consistente
4. **Testing**: Prueba en diferentes dispositivos y conexiones
5. **Fallbacks**: Siempre ten un plan B si el video no carga

## � **Recursos Recomendados**

### Sitios para videos gratuitos:
- **Pixabay** - Videos HD gratuitos
- **Pexels** - Biblioteca extensa de videos
- **Unsplash** - Contenido de alta calidad
- **Coverr** - Especializado en videos para web

### Herramientas de edición:
- **HandBrake** - Compresión de video
- **FFmpeg** - Conversión de formatos
- **Adobe Media Encoder** - Optimización profesional

¡Tu landing page está lista para videos espectaculares! 🎬✨
