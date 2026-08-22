/**
 * ITQ - Instituto Tecnológico de Quentar
 * JavaScript Principal - Mejoras 2026
 * "El Caos es nuestro Colega"
 */

// ============================================
// Configuración Inicial
// ============================================
const ITQConfig = {
    pacharanLevel: 87,
    cabrasOnline: 3,
    latencia: 420,
    sistemaStatus: 'Óptimo para liarla',
    achievements: {
        'cabra_novata': { name: 'Cabra Novata', description: 'Visitar la web por primera vez', unlocked: false },
        'resistente_pacharan': { name: 'Resistente al Pacharán', description: 'Permanecer 5 minutos en la web', unlocked: false },
        'heroe_caos': { name: 'Héroe del Caos', description: 'Hacer click en todos los botones que no funcionan', unlocked: false },
        'experto_excusas': { name: 'Experto en Excusas', description: 'Generar 3 excusas corporativas', unlocked: false },
        'modo_resaca': { name: 'Superviviente de la Resaca', description: 'Activar el modo resaca', unlocked: false }
    }
};

// ============================================
// Barra de Estado del Sistema
// ============================================
function initSystemStatusBar() {
    const statusBar = document.createElement('div');
    statusBar.id = 'system-status-bar';
    statusBar.className = 'system-status-bar';
    statusBar.innerHTML = `
        <div class="status-item">
            <span class="status-icon">✅</span>
            <span class="status-label">Servidores Caprinos:</span>
            <span class="status-value" id="servidores-value">${ITQConfig.cabrasOnline}/5 pastando</span>
        </div>
        <div class="status-item">
            <span class="status-icon">⚠️</span>
            <span class="status-label">Latencia:</span>
            <span class="status-value" id="latencia-value">${ITQConfig.latencia}ms</span>
        </div>
        <div class="status-item">
            <span class="status-icon">🍷</span>
            <span class="status-label">Nivel de Pacharán:</span>
            <span class="status-value" id="pacharan-value">${ITQConfig.pacharanLevel}%</span>
        </div>
        <div class="status-item">
            <span class="status-icon">🐐</span>
            <span class="status-label">Cabras en línea:</span>
            <span class="status-value" id="cabras-value">${ITQConfig.cabrasOnline}</span>
        </div>
    `;
    
    // Insertar después del header
    const header = document.querySelector('header');
    if (header) {
        header.after(statusBar);
    }
    
    // Actualizar valores aleatoriamente
    setInterval(updateSystemStatus, 5000);
}

function updateSystemStatus() {
    // Actualizar latencia (entre 200 y 800)
    ITQConfig.latencia = Math.floor(Math.random() * 600) + 200;
    document.getElementById('latencia-value').textContent = `${ITQConfig.latencia}ms`;
    
    // Actualizar nivel de pacharán (entre 50 y 100)
    ITQConfig.pacharanLevel = Math.floor(Math.random() * 50) + 50;
    document.getElementById('pacharan-value').textContent = `${ITQConfig.pacharanLevel}%`;
    
    // Actualizar cabras (entre 0 y 5)
    ITQConfig.cabrasOnline = Math.floor(Math.random() * 6);
    document.getElementById('cabras-value').textContent = ITQConfig.cabrasOnline;
    document.getElementById('servidores-value').textContent = `${ITQConfig.cabrasOnline}/5 pastando`;
    
    // Cambiar estado del sistema
    const statuses = [
        'Óptimo para liarla',
        'En modo resaca',
        'La cabra se durmió',
        'Pastando tranquilo',
        'Servidor en llamas',
        'Error 404: Café no encontrado'
    ];
    ITQConfig.sistemaStatus = statuses[Math.floor(Math.random() * statuses.length)];
}

// ============================================
// Modo Resaca
// ============================================
function initResacaMode() {
    const resacaBtn = document.createElement('button');
    resacaBtn.id = 'resaca-mode-btn';
    resacaBtn.className = 'resaca-mode-btn';
    resacaBtn.innerHTML = '<span class="btn-text">Activar Modo Resaca</span><span class="btn-subtext">(No recomendado para HR)</span>';
    resacaBtn.onclick = toggleResacaMode;
    
    // Insertar en el header
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(resacaBtn);
    }
    
    // Cargar estado desde localStorage
    if (localStorage.getItem('itq_resaca_mode') === 'true') {
        document.body.classList.add('resaca-mode');
        resacaBtn.classList.add('active');
        resacaBtn.innerHTML = '<span class="btn-text">Desactivar Modo Resaca</span><span class="btn-subtext">(Demasiado tarde)</span>';
        unlockAchievement('modo_resaca');
    }
}

function toggleResacaMode() {
    const resacaBtn = document.getElementById('resaca-mode-btn');
    const isResacaMode = document.body.classList.toggle('resaca-mode');
    
    if (isResacaMode) {
        resacaBtn.classList.add('active');
        resacaBtn.innerHTML = '<span class="btn-text">Desactivar Modo Resaca</span><span class="btn-subtext">(Demasiado tarde)</span>';
        localStorage.setItem('itq_resaca_mode', 'true');
        unlockAchievement('modo_resaca');
        
        // Efecto sonoro opcional
        setTimeout(() => {
            alert('⚠️ Advertencia: El modo resaca puede causar visión borrosa, confusión y la necesidad urgente de pacharán.');
        }, 1000);
    } else {
        resacaBtn.classList.remove('active');
        resacaBtn.innerHTML = '<span class="btn-text">Activar Modo Resaca</span><span class="btn-subtext">(No recomendado para HR)</span>';
        localStorage.setItem('itq_resaca_mode', 'false');
    }
}

// ============================================
// Generador de Excusas Corporativas
// ============================================
function initExcuseGenerator() {
    // Crear sección si no existe
    const excuseSection = document.getElementById('excuse-generator');
    if (!excuseSection) return;
    
    const excuseBtn = excuseSection.querySelector('.generate-excuse-btn');
    const excuseOutput = excuseSection.querySelector('.excuse-output');
    
    if (excuseBtn && excuseOutput) {
        excuseBtn.onclick = () => {
            const excuse = generateExcuse();
            excuseOutput.textContent = excuse;
            
            // Contar excusas generadas para logros
            const excusasCount = parseInt(localStorage.getItem('itq_excusas_count') || '0') + 1;
            localStorage.setItem('itq_excusas_count', excusasCount);
            
            if (excusasCount >= 3) {
                unlockAchievement('experto_excusas');
            }
        };
    }
}

const excuses = [
    "El servidor está pastando. Volveré en 3 horas (o nunca).",
    "Estoy en una reunión de Scrum con las cabras. No puedo atender ahora.",
    "El código está en modo resaca. Necesita tiempo para recuperarse.",
    "La base de datos se ha comido un balido. Estamos reiniciando.",
    "El cliente no sabe lo que quiere. Estoy esperando que se decida.",
    "Mi conexión a internet pasa por una cabra. Hay latencia.",
    "Estoy documentando el código... en servilletas de bar.",
    "El framework P.A.C.H.A.R.A.N. requiere pacharán para funcionar. Estoy reabasteciendo.",
    "El becario ha borrado el repositorio. Estamos recuperando datos.",
    "La Dra. Mari Chantal me ha asignado a un proyecto más importante: beber pacharán.",
    "El sistema está optimizado para el caos. No es un bug, es una feature.",
    "Estoy en modo focus: ignorando todos los mensajes.",
    "El deploy falló porque el servidor está a lomos de una cabra que se durmió.",
    "Estoy esperando a que el café haga efecto. O a que el pacharán lo haga.",
    "El error 404 es en realidad el código de éxito en el ITQ."
];

function generateExcuse() {
    return excuses[Math.floor(Math.random() * excuses.length)];
}

// ============================================
// Sistema de Logros (Achievements)
// ============================================
function initAchievements() {
    // Cargar logros desde localStorage
    const savedAchievements = localStorage.getItem('itq_achievements');
    if (savedAchievements) {
        Object.assign(ITQConfig.achievements, JSON.parse(savedAchievements));
    }
    
    // Verificar logro de primera visita
    if (!ITQConfig.achievements.cabra_novata.unlocked) {
        unlockAchievement('cabra_novata');
    }
    
    // Verificar tiempo en la página (5 minutos)
    setTimeout(() => {
        unlockAchievement('resistente_pacharan');
    }, 300000); // 5 minutos
    
    // Contar clicks en botones
    document.querySelectorAll('button, .btn, .card-link').forEach(btn => {
        btn.addEventListener('click', () => {
            const clicks = parseInt(localStorage.getItem('itq_button_clicks') || '0') + 1;
            localStorage.setItem('itq_button_clicks', clicks);
            
            if (clicks >= 5) {
                unlockAchievement('heroe_caos');
            }
        });
    });
    
    // Mostrar notificación de logros
    setInterval(checkNewAchievements, 10000);
}

function unlockAchievement(key) {
    if (ITQConfig.achievements[key] && !ITQConfig.achievements[key].unlocked) {
        ITQConfig.achievements[key].unlocked = true;
        localStorage.setItem('itq_achievements', JSON.stringify(ITQConfig.achievements));
        showAchievementNotification(ITQConfig.achievements[key]);
    }
}

function showAchievementNotification(achievement) {
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-icon">🏆</div>
        <div class="achievement-content">
            <h4>¡Logro Desbloqueado!</h4>
            <p><strong>${achievement.name}</strong></p>
            <p class="achievement-desc">${achievement.description}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animación de entrada
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Auto-remover después de 5 segundos
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
}

function checkNewAchievements() {
    // Podríamos añadir más lógica aquí para verificar logros
}

// ============================================
// Sonidos Aleatorios
// ============================================
function initRandomSounds() {
    // Reproducir balido aleatoriamente cada 30-60 segundos
    setInterval(() => {
        if (Math.random() > 0.7) { // 30% de probabilidad
            const audio = new Audio('balido.mp3');
            audio.play().catch(e => {});
        }
    }, 30000 + Math.random() * 30000);
}

// ============================================
// Micro-Interacciones
// ============================================
function initMicroInteractions() {
    // Botón "No Hacer Click"
    const noClickBtn = document.getElementById('no-click-btn');
    if (noClickBtn) {
        noClickBtn.onclick = () => {
            alert('¡Lo sabías! Ahora la cabra te odia. Achievement: "Desobediente" desbloqueado.');
        };
        
        // Mover botón aleatoriamente
        setInterval(() => {
            if (Math.random() > 0.9) {
                noClickBtn.style.position = 'relative';
                noClickBtn.style.left = `${Math.random() * 20 - 10}px`;
                noClickBtn.style.top = `${Math.random() * 20 - 10}px`;
                setTimeout(() => {
                    noClickBtn.style.left = '0';
                    noClickBtn.style.top = '0';
                }, 1000);
            }
        }, 5000);
    }
    
    // Efecto de glitch aleatorio en títulos
    document.querySelectorAll('h1, h2, h3').forEach(title => {
        if (Math.random() > 0.8) {
            title.addEventListener('mouseenter', () => {
                if (Math.random() > 0.5) {
                    title.style.animation = 'glitch 0.3s ease-in-out';
                    setTimeout(() => {
                        title.style.animation = '';
                    }, 300);
                }
            });
        }
    });
}

// ============================================
// Muro de la Vergüenza (GitHub Commits)
// ============================================
function initShameWall() {
    const shameWall = document.getElementById('shame-wall');
    if (!shameWall) return;
    
    const commits = [
        { author: 'me1lopig', message: 'Fix: Arreglé lo que no estaba roto', time: '2 hours ago' },
        { author: 'DraMariChantal', message: 'Feat: Añadí más pacharán al código (WIP)', time: '1 week ago' },
        { author: 'ITQ-Bot', message: 'Docs: Actualicé el README con mentiras', time: '3 days ago' },
        { author: 'LaCabra', message: 'Chore: Me comí los logs del servidor', time: '5 hours ago' },
        { author: 'becario', message: 'WIP: Intentando entender el código', time: '1 month ago' },
        { author: 'ITQ-Bot', message: 'Fix: Borré el bug borrando todo', time: '2 weeks ago' }
    ];
    
    let html = '<h3>Últimos Commits (Ficticios)</h3><div class="commits-list">';
    commits.forEach(commit => {
        html += `
            <div class="commit">
                <span class="commit-author">🐐 ${commit.author}</span>
                <span class="commit-message">${commit.message}</span>
                <span class="commit-time">${commit.time}</span>
            </div>
        `;
    });
    html += '</div>';
    
    shameWall.innerHTML = html;
}

// ============================================
// Inicialización
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas las funcionalidades
    initSystemStatusBar();
    initResacaMode();
    initExcuseGenerator();
    initAchievements();
    initRandomSounds();
    initMicroInteractions();
    initShameWall();
    
    // Contador de tiempo en la página
    setTimeout(() => {
        unlockAchievement('resistente_pacharan');
    }, 300000); // 5 minutos
});

// ============================================
// Funciones Auxiliares
// ============================================

// Smooth scroll mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu (ya existente, pero mejorado)
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
        const nav = document.querySelector('header nav');
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
        
        // Efecto de balido al abrir menú móvil
        if (nav.style.display === 'flex') {
            const audio = new Audio('balido.mp3');
            audio.play().catch(e => {});
        }
    });
}

// Balido button (mejorado)
const balidoBtn = document.getElementById('balido-btn');
if (balidoBtn) {
    balidoBtn.addEventListener('click', function() {
        const audio = new Audio('balido.mp3'); 
        audio.play().catch(e => {
            alert('Error: El audio no se puede reproducir. La cabra está dormida.');
        });
        
        setTimeout(function() {
            alert('Transmisión enviada. La cabra balará su respuesta en un plazo de 4 a 6 años fiscales.');
        }, 1000); 
    });
}

// Consola de depuración ITQ
console.log('%c🐐 ITQ - Instituto Tecnológico de Quentar 🐐', 'color: #8b0029; font-size: 20px; font-weight: bold;');
console.log('%cEl Caos es nuestro Colega™', 'color: #888; font-size: 14px;');
console.log('%c========================================', 'color: #8b0029;');
console.log('%c⚠️ Advertencia: Esta consola puede contener trazas de pacharán y balidos.', 'color: #ff0;');
console.log('%c========================================', 'color: #8b0029;');
