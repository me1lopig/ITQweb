# ITQweb - Instituto Tecnológico de Quentar

> **Web satírica inspirada en el canal de YouTube [ITQuentar](https://www.youtube.com/@ITQuentar/videos)**

Una parodia del mundo de la tecnología, la consultoría corporativa y las metodologías ágiles, con un toque de humor andaluz y mucho pacharán.

## 🚀 Estructura del Proyecto

```
ITQweb/
├── index.html              # Página principal (versión 2.0 con blog integrado)
├── README.md               # Este archivo
├── LICENSE                 # Apache License 2.0
├── balido.mp3              # Audio de cabra para el botón de contacto
├── fundadora.jpg           # Imagen de la Dra. Mari Chantal
├── .gitignore              # Archivos ignorados por Git
├── favicon.ico             # Icono del sitio (opcional)
├── blog/                   # Blog satírico
│   ├── index.html          # Página principal del blog
│   ├── blockchain.html     # Artículo: Blockchain en tu empresa
│   ├── scrum-cabras.html   # Artículo: Scrum en una granja de cabras
│   ├── pacharan-framework.html # Artículo: Framework P.A.C.H.A.R.A.N. + Excel
│   └── balido.mp3          # Audio para el blog
├── styles/                 # Hojas de estilo
│   ├── main.css            # Estilos de la página principal
│   └── blog.css            # Estilos del blog
└── images/                 # Imágenes del blog
    └── fundadora.jpg        # Copia de la imagen principal
```

## 🎯 Características

- **Diseño Dark Mode**: Estilo oscuro con toques de rojo pacharán (#8b0029).
- **Responsive**: Adaptado a móviles, tablets y escritorio.
- **Blog Integrado**: Sección de blog con artículos satíricos sobre tecnología y caos corporativo.
- **Interactividad**: Botones con efectos hover, audio de cabra, alertas humorísticas.
- **Navegación fluida**: Scroll suave y menú sticky.

## 📝 Artículos del Blog

1. **[Cómo implementar Blockchain en tu empresa (sin que nadie note la diferencia)](blog/blockchain.html)**
   - Guía para usar la palabra "Blockchain" sin implementar nada.

2. **[Cómo implementar Scrum en una granja de cabras](blog/scrum-cabras.html)**
   - Metodologías ágiles adaptadas al mundo animal.

3. **[El Framework P.A.C.H.A.R.A.N. ahora es compatible con Excel](blog/pacharan-framework.html)**
   - Programación anárquica en hojas de cálculo.

## 🛠 Tecnologías Usadas

- **Frontend**: HTML5, CSS3, JavaScript vanilla.
- **Diseño**: CSS Grid, Flexbox, animaciones CSS.
- **Audio**: Reproducción de audio con la API de HTML5.
- **Sin dependencias**: Todo el código es autónomo, sin frameworks ni librerías externas.

## 📦 Cómo Desplegar

### Opción 1: GitHub Pages
1. Sube el repositorio a GitHub.
2. Ve a **Settings > Pages**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Tu sitio estará disponible en `https://[tu-usuario].github.io/ITQweb/`.

### Opción 2: Netlify/Vercel
1. Conecta tu repositorio de GitHub a Netlify o Vercel.
2. Configura el deploy automático.
3. ¡Listo! Tu sitio se desplegará automáticamente.

### Opción 3: Servidor Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js (npx)
npx serve
```

## 🎨 Personalización

### Añadir nuevos artículos al blog
1. Crea un nuevo archivo HTML en la carpeta `blog/` (ej: `nuevo-articulo.html`).
2. Usa la plantilla de los artículos existentes.
3. Añade el enlace en `blog/index.html` y en la sección de blog de `index.html`.

### Cambiar colores
Modifica las variables CSS en `:root` en los archivos:
- `styles/main.css` (para la página principal)
- `styles/blog.css` (para el blog)

### Añadir más secciones
Duplica la estructura de las secciones existentes en `index.html` y ajusta los estilos según sea necesario.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama con tu feature (`git checkout -b feature/nueva-seccion`).
3. Commitea tus cambios (`git commit -m 'Añade nueva sección satírica'`).
4. Haz push a la rama (`git push origin feature/nueva-seccion`).
5. Abre un Pull Request.

## 📜 Licencia

Este proyecto está bajo la **Apache License 2.0**. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🎬 Créditos

- **Inspiración**: Canal de YouTube [ITQuentar](https://www.youtube.com/@ITQuentar/videos).
- **Diseño**: Estilo oscuro con toques de humor corporativo.
- **Contenido**: Parodia de las metodologías ágiles, la consultoría tecnológica y la cultura startup.

---

> **"El Caos es nuestro Colega™"** — ITQ, 2026
