# ITQweb - Instituto Tecnológico de Quentar

> **Web satírica inspirada en el canal de YouTube [ITQuentar](https://www.youtube.com/@ITQuentar/videos)**

Una parodia del mundo de la tecnología, la consultoría corporativa y las metodologías ágiles, con un toque de humor, mucho pacharán y un enfoque único en el **caos corporativo como modelo de negocio**.

---

## 📁 Estructura del Proyecto

```
ITQweb/
├── index.html              # Página principal (versión 2.0 con blog integrado)
├── README.md               # Este archivo
├── LICENSE                 # Apache License 2.0
├── balido.mp3              # Audio de cabra para el botón de contacto
├── fundadora.jpg           # Imagen de la Dra. Mari Chantal (CEO y Arquitecta del Caos)
├── .gitignore              # Archivos ignorados por Git
├── favicon.ico             # Icono del sitio (opcional)
├── favicon.svg             # Icono del sitio en formato SVG
├── blog/                   # Blog satírico
│   ├── index.html          # Página principal del blog (con secciones de categorías)
│   ├── agile-vs-pacharan.html # Artículo: Agile vs. P.A.C.H.A.R.A.N.
│   ├── alerta-codigo-filtrado.html # Artículo: Código de P.A.C.H.A.R.A.N. filtrado
│   ├── blockchain.html     # Artículo: Blockchain en tu empresa
│   ├── endrin-os-2.html     # Artículo: Lanzamiento de Endrin-OS 2.0
│   ├── pacharan-framework.html # Artículo: Framework P.A.C.H.A.R.A.N. + Excel
│   ├── procrastinacion-productiva.html # Artículo: El arte de la procrastinación
│   ├── scrum-cabras.html   # Artículo: Scrum en una granja de cabras
│   └── balido.mp3          # Audio para el blog
├── styles/                 # Hojas de estilo
│   ├── main.css            # Estilos de la página principal
│   └── blog.css            # Estilos del blog
└── v2/                     # Versión alternativa de la página principal
    └── index.html          # Versión 2.0 de la página principal
```

---

## 🌟 Características

- **Diseño Dark Mode**: Estilo oscuro con toques de **rojo pacharán** (#8b0029), inspirado en el endrino y el caos corporativo.
- **Responsive**: Adaptado a móviles, tablets y escritorio. Porque el caos debe ser accesible desde cualquier dispositivo.
- **Blog Integrado**: Sección de blog con artículos satíricos sobre tecnología, metodologías inútiles y el **Pacharán como combustible creativo**.
  - **Categorías organizadas**: Metodologías, Tecnología, Cultura ITQ y Noticias Urgentes.
- **Interactividad**: Botones con efectos hover, audio de cabra, alertas humorísticas y **funcionalidades que no funcionan (a propósito)**.
- **Navegación fluida**: Scroll suave, menú sticky y enlaces que a veces llevan a algún lado.
- **Personajes icónicos**: La **Dra. Mari Chantal**, CEO y Arquitecta del Caos, preside el liderazgo ágil (o no tan ágil).

---

## 📝 Artículos del Blog

### 🐐 Metodologías
1. **[Agile vs. P.A.C.H.A.R.A.N.: Por qué tu equipo necesita menos reuniones y más pacharán](blog/agile-vs-pacharan.html)**
   - Comparativa entre metodologías ágiles y el **Framework P.A.C.H.A.R.A.N.** (Programación Anárquica Con Horarios Aleatorios y Rendimiento Altamente Nulo).

2. **[Cómo implementar Scrum en una granja de cabras](blog/scrum-cabras.html)**
   - Lecciones aprendidas (y balidos escuchados) al aplicar Scrum en un entorno caprino.

### 💻 Tecnología
3. **[Cómo implementar Blockchain en tu empresa (sin que nadie note la diferencia)](blog/blockchain.html)**
   - Guía para usar la palabra "Blockchain" sin implementar nada. Spoiler: No necesitas Blockchain, necesitas una excusa.

4. **[Lanzamos Endrin-OS 2.0: Ahora con 30% más latencia y 100% más resaca](blog/endrin-os-2.html)**
   - El sistema operativo que se reinicia automáticamente cuando detecta que el usuario está sobrio.

5. **[El Framework P.A.C.H.A.R.A.N. ahora es compatible con Excel](blog/pacharan-framework.html)**
   - Programación anárquica en hojas de cálculo. Porque hasta el caos necesita una hoja de Excel.

### 🍷 Cultura ITQ
6. **[El arte de la procrastinación productiva](blog/procrastinacion-productiva.html)**
   - Cómo hacer que tu jefe crea que estás trabajando (mientras navegas por Reddit).

### 🚨 Noticias Urgentes
7. **[ALERTA: Se ha filtrado el código de P.A.C.H.A.R.A.N. en GitHub](blog/alerta-codigo-filtrado.html)**
   - No pasa nada, nadie lo entenderá (ni nosotros).

---

## 🛠 Tecnologías Usadas

- **Frontend**: HTML5, CSS3, JavaScript vanilla (porque los frameworks son para débiles).
- **Diseño**: CSS Grid, Flexbox, animaciones CSS y **estilos que nadie entiende pero funcionan**.
- **Audio**: Reproducción de audio con la API de HTML5 (para el balido de la cabra).
- **Sin dependencias**: Todo el código es autónomo, sin frameworks ni librerías externas. Porque en el ITQ, **reinventar la rueda es un deporte nacional**.

---

## 📤 Cómo Desplegar

### Opción 1: GitHub Pages (recomendado para el caos controlado)
1. Sube el repositorio a GitHub.
2. Ve a **Settings > Pages**.
3. Selecciona la rama `main` y la carpeta `/ (root)`.
4. Tu sitio estará disponible en `https://[tu-usuario].github.io/ITQweb/`.
   - *Nota: Si el sitio no carga, es porque el servidor está pastando. Inténtalo más tarde.*

### Opción 2: Netlify/Vercel (para los que prefieren el caos automatizado)
1. Conecta tu repositorio de GitHub a Netlify o Vercel.
2. Configura el deploy automático.
3. ¡Listo! Tu sitio se desplegará automáticamente (o no, dependiendo del humor de la cabra).

### Opción 3: Servidor Local (para pruebas en el abismo)
```bash
# Usando Python (recomendado para desarrolladores que no saben lo que hacen)
python -m http.server 8000

# Usando Node.js (para los que prefieren npm)
npx serve

# Usando PHP (porque sí)
php -S localhost:8000
```
*Advertencia: Si el servidor local no funciona, es porque el código está escrito bajo los efectos del pacharán.*

---

## 🎨 Personalización (o cómo liarla más)

### Añadir nuevos artículos al blog
1. Crea un nuevo archivo HTML en la carpeta `blog/` (ej: `nuevo-articulo.html`).
2. Usa la plantilla de los artículos existentes (o inventa la tuya, total, aquí todo vale).
3. Añade el enlace en `blog/index.html` y en la sección de blog de `index.html`.
4. **Importante**: Asegúrate de que el artículo incluya al menos:
   - Un `alert` con un mensaje satírico.
   - Una referencia al pacharán, las cabras o el caos corporativo.

### Cambiar colores (si te atreves)
Modifica las variables CSS en `:root` en los archivos:
- `styles/main.css` (para la página principal).
- `styles/blog.css` (para el blog).

*Recomendación: Usa el código de color `#8b0029` (rojo pacharán) para mantener la esencia ITQ.*

### Añadir más secciones (porque el caos nunca es suficiente)
1. Duplica la estructura de las secciones existentes en `index.html`.
2. Añade un título con emojis (obligatorio).
3. Incluye al menos una frase que no tenga sentido pero suene profesional.
4. Asegúrate de que los enlaces no lleven a ningún lado (opcional, pero recomendado).

### Añadir botones que no funcionan
Todos los botones en el ITQ deben tener un `onclick` con un `alert`. Ejemplo:
```html
<button class="btn" onclick="alert('Error 404: La funcionalidad no encontrada. Inténtalo de nuevo nunca.')">Haz clic aquí</button>
```

---

## 🐐 Contribuir (si te atreves)

Las contribuciones son bienvenidas, pero **no nos hacemos responsables de los daños mentales** que pueda causar trabajar en este proyecto. Para contribuir:

1. Haz un fork del repositorio (si GitHub no está pastando).
2. Crea una rama con tu feature (`git checkout -b feature/caos-nuevo`).
3. Commitea tus cambios con un mensaje que no tenga sentido (`git commit -m 'Fix: Arreglé lo que no estaba roto'`).
4. Haz push a la rama (`git push origin feature/caos-nuevo`).
5. Abre un Pull Request y reza para que la Dra. Mari Chantal no lo rechace.

*Nota: Las contribuciones pueden ser ignoradas, borradas o convertidas en memes sin previo aviso.*

---

## 📜 Licencia (o la falta de ella)

Este proyecto está bajo la **Apache License 2.0**, lo que significa que puedes hacer lo que quieras con él, siempre y cuando no nos culpes cuando algo salga mal. Ver el archivo [LICENSE](LICENSE) para más detalles (o no, total, nadie lo lee).

*Disclaimer: El ITQ no se hace responsable de:
- La pérdida de productividad.
- La adicción al pacharán.
- El síndrome del impostor.
- Las cabras que hackean tus sistemas.*

---

## 🎭 Créditos (o a quién culpar)

- **Inspiración**: Canal de YouTube [ITQuentar](https://www.youtube.com/@ITQuentar/videos). Sin ellos, este caos no sería posible.
- **Diseño**: Estilo oscuro con toques de humor corporativo, **rojo pacharán** y un 30% de latencia visual.
- **Contenido**: Parodia de las metodologías ágiles, la consultoría tecnológica, la cultura startup y **todo lo que está mal en el mundo del desarrollo de software**.
- **Personajes**: 
  - **Dra. Mari Chantal**: CEO, Chief Visionary Dictator y Arquitecta del Caos.
  - **La Cabra**: Lead Developer y responsable de la latencia en los servidores.
  - **El Endrino**: Fuel oficial del ITQ.

*Especial agradecimiento a todas las empresas que han inspirado este proyecto sin saberlo (y sin quererlo).*

---

> **"El Caos es nuestro Colega™"** — ITQ, 2026
