# Mi Tarjeta de Presentación Digital

Una página web personal con diseño neon innovador y efectos interactivos.

## Características

- **Diseño Neon**: Paleta de colores vibrantes con efectos de brillo
- **Animaciones Interactivas**: Efectos hover, partículas flotantes, y efectos de glitch
- **Diseño Responsivo**: Se adapta a diferentes tamaños de pantalla
- **Efectos Especiales**: 
  - Texto con efecto glitch
  - Bordes animados neon
  - Partículas flotantes de fondo
  - Efectos de parallax
  - Easter eggs (código Konami)

## Personalización

### Cambiar Información Personal

Edita el archivo `index.html` para modificar:

- **Nombre**: Cambia "ÁNGEL GALLARDO" en la línea 23
- **Correo**: Actualiza `angel@example.com` en la línea 32
- **Teléfono**: Modifica `+54 9 123 456 789` en la línea 36
- **Redes Sociales**: Actualiza los enlaces en las líneas 45-55
- **Habilidades**: Modifica las etiquetas en las líneas 62-69

### Cambiar Foto

Reemplaza la imagen placeholder en la línea 22:

```html
<img src="tu-foto.jpg" alt="Tu foto" id="profilePic">
```

### Personalizar Colores Neón

Edita las variables CSS en `styles.css` (líneas 15-22):

```css
:root {
    --neon-pink: #ff00ff;
    --neon-blue: #00ffff;
    --neon-green: #00ff00;
    --neon-yellow: #ffff00;
    --neon-purple: #9d00ff;
    --neon-orange: #ff6600;
}
```

## Cómo Publicar Online

### Opción 1: GitHub Pages (Gratis)

1. **Crear Repositorio**:
   ```bash
   git init
   git add .
   git commit -m "Primera versión"
   git branch -M main
   git remote add origin https://github.com/TU_USERNAME/tu-repo.git
   git push -u origin main
   ```

2. **Activar GitHub Pages**:
   - Ve a Settings > Pages
   - Selecciona "Deploy from a branch"
   - Elige `main` y `/root`
   - Tu sitio estará en: `https://TU_USERNAME.github.io/tu-repo`

### Opción 2: Netlify (Gratis)

1. **Subir archivos**:
   - Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
   - O conecta tu repositorio de GitHub

2. **Obtener URL**: Netlify te dará una URL aleatoria que puedes personalizar

### Opción 3: Vercel (Gratis)

1. **Instalar Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Desplegar**:
   ```bash
   vercel --prod
   ```

### Opción 4: Firebase Hosting (Gratis)

1. **Instalar Firebase CLI**:
   ```bash
   npm install -g firebase-tools
   ```

2. **Inicializar proyecto**:
   ```bash
   firebase init hosting
   firebase deploy
   ```

## Efectos Interactivos

### Atajos de Teclado

- **Ctrl + Enter**: Cambia el tema de colores neón
- **Código Konami** (Arriba Arriba Abajo Abajo Izquierda Derecha Izquierda Derecha B A): Activa modo arcoíris

### Efectos del Mouse

- **Mover sobre la tarjeta**: Efecto 3D de perspectiva
- **Hover en enlaces**: Efectos de neón y transformación
- **Click en redes sociales**: Efecto de onda (ripple)

## Tecnologías Usadas

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, efectos de neón, diseño responsivo
- **JavaScript Vanilla**: Interactividad y efectos especiales
- **Google Fonts**: Tipografías Orbitron y Space Mono

## Navegadores Compatibles

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Licencia

Este proyecto es de uso libre. Siéntete libre de modificarlo y usarlo como inspiración.

---

**Creado con amor y efectos neón** by Ángel Gallardo
