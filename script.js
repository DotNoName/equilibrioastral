/**
 * EQUILIBRIO ASTRAL (equilibrioastral.com)
 * Motor de Arqueoastronomía + Psicología Conductual Aplicada
 * Bienestar Basado en Evidencia, Ritmos Naturales y Sabiduría Ancestral
 */

// Cartucho Arqueológico Adaptado a la Estética de Bienestar Diurno
function createMayanCartouche(innerSvgContent) {
  return `<svg viewBox="0 0 120 145" class="w-full h-full text-[#4d5c4d]" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
    <!-- Marco Exterior del Cartucho de Día Clásico -->
    <rect x="18" y="12" width="84" height="88" rx="22" stroke-width="2.8" stroke="currentColor" fill="#f4efe8" fill-opacity="0.8"/>
    <!-- Doble filete interior tradicional -->
    <rect x="23" y="17" width="74" height="78" rx="17" stroke-width="1.2" stroke-dasharray="5 3" stroke-opacity="0.6"/>
    <!-- Pedestal arqueológico inferior tradicional -->
    <path d="M26 100 C26 114 36 122 48 122 H72 C84 122 94 114 94 100" stroke-width="2.5"/>
    <path d="M46 100 V122 M74 100 V122" stroke-width="1.8"/>
    <circle cx="60" cy="111" r="3.5" fill="currentColor"/>
    <!-- Símbolo Arqueológico Específico -->
    ${innerSvgContent}
  </svg>`;
}

// Base de datos de los 20 Arquetipos con Psicología Conductual & Salud
const ANCESTRAL_DATABASE = [
  {
    id: 0,
    kiche: "B'atz'",
    maya: "Chuen",
    mexica: "Ozomatli (Mono)",
    traduccion: "El Hilo del Tiempo y la Creatividad",
    glifoSignificado: "Perfil clásico del Mono Sabio y la madeja de hilo enrollada.",
    elemento: "Agua / Fuego",
    rumbo: "Oriente — La Salida del Sol",
    totem: "El Mono Aullador & La Tejedora",
    habitoConductual: "Micro-Pausa Lúdica de 5 minutos",
    conductaExplicacion: "Rompe la rigidez del córtex prefrontal con una actividad no estructurada (dibujar, caminar sin rumbo, estiramiento libre) para restaurar la dopamina natural.",
    saludConsejo: "Tu sistema nervioso se sobrecarga con la monotonía. Incorpora variabilidad en tus descansos.",
    svgGlyph: createMayanCartouche(`
      <path d="M40 56 C40 42 50 34 60 34 C70 34 78 42 78 52 C78 62 70 70 60 70 C52 70 46 64 46 56 C46 48 52 44 58 44 C64 44 66 48 66 52" stroke-width="2.8"/>
      <circle cx="34" cy="56" r="4.5" fill="currentColor"/>
      <path d="M72 40 C78 44 82 50 82 56"/>
      <circle cx="60" cy="52" r="2.5" fill="currentColor"/>
    `)
  },
  {
    id: 1,
    kiche: "E",
    maya: "Eb'",
    mexica: "Malinalli (Hierba)",
    traduccion: "El Camino y la Renovación",
    glifoSignificado: "Escalinata del templo celeste y las huellas del caminante.",
    elemento: "Tierra",
    rumbo: "Norte — La Casa de los Ancestros",
    totem: "El Caminante & El Gato Montés",
    habitoConductual: "Regulación Circadiana Matutina",
    conductaExplicacion: "10 minutos de luz natural en los ojos durante la primera hora al despertar. Calibra el cortisol y sincroniza los ritmos de sueño y vigilia.",
    saludConsejo: "La constancia en tus horarios de sueño es la mejor medicina preventiva para tu estabilidad emocional.",
    svgGlyph: createMayanCartouche(`
      <path d="M42 34 H78 V44 H42 Z" fill="currentColor" fill-opacity="0.15"/>
      <path d="M42 48 H78 V58 H42 Z" fill="currentColor" fill-opacity="0.15"/>
      <path d="M42 62 H78 V72 H42 Z" fill="currentColor" fill-opacity="0.15"/>
      <path d="M42 34 V72 M78 34 V72" stroke-width="2.5"/>
      <circle cx="34" cy="53" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 2,
    kiche: "Aj",
    maya: "B'en",
    mexica: "Ácatl (Caña)",
    traduccion: "La Caña y la Firmeza del Hogar",
    glifoSignificado: "Las cañas verticales unidas por las cuerdas del cielo.",
    elemento: "Madera / Fuego",
    rumbo: "Poniente — El Ocaso",
    totem: "El Armadillo & Las Cañas",
    habitoConductual: "Establecimiento de Límites Asertivos",
    conductaExplicacion: "Practica decir 'no' a compromisos que drenan tu energía sin dar explicaciones justificativas excesivas. Protege tu espacio somático.",
    saludConsejo: "La rigidez corporal suele reflejar tensión por exceso de responsabilidades ajenas. Estira la columna a diario.",
    svgGlyph: createMayanCartouche(`
      <path d="M44 32 V74 M76 32 V74" stroke-width="3"/>
      <path d="M38 46 H82 M38 60 H82" stroke-width="2"/>
      <circle cx="60" cy="46" r="3.5" fill="currentColor"/>
      <circle cx="60" cy="60" r="3.5" fill="currentColor"/>
    `)
  },
  {
    id: 3,
    kiche: "I'x",
    maya: "Ix",
    mexica: "Ocelotl (Jaguar)",
    traduccion: "El Jaguar y la Escucha Interior",
    glifoSignificado: "Las tres manchas oculares del jaguar entre las sombras del bosque.",
    elemento: "Tierra y Agua",
    rumbo: "Sur — La Maduración",
    totem: "El Jaguar & El Ocelote",
    habitoConductual: "Pausas de Descompresión Sensorial",
    conductaExplicacion: "5 minutos de silencio en una habitación con luz tenue a mitad de la tarde. Reduce la sobreestimulación de la corteza sensorial.",
    saludConsejo: "Tu intuición se afina cuando bajas el ruido exterior. Escucha las señales físicas de cansancio antes del agotamiento.",
    svgGlyph: createMayanCartouche(`
      <circle cx="44" cy="45" r="7" stroke-width="2.5" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="76" cy="45" r="7" stroke-width="2.5" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="60" cy="66" r="8" stroke-width="2.5" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="60" cy="66" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 4,
    kiche: "Tz'ik'in",
    maya: "Men",
    mexica: "Cuauhtli (Águila)",
    traduccion: "El Águila y la Visión Clara",
    glifoSignificado: "Perfil de la cabeza del ave sagrada con el pico curvo y cresta solar.",
    elemento: "Viento",
    rumbo: "Oriente — La Claridad",
    totem: "El Águila & El Halcón",
    habitoConductual: "Técnica de Reencuadre Cognitivo",
    conductaExplicacion: "Cuando enfrentes un problema, pregúntate: '¿Cómo se verá esto dentro de 6 meses?'. Eleva la perspectiva para apagar la amígdala.",
    saludConsejo: "Cuidar la vista y hacer descansos de pantallas (regla 20-20-20) evita la fatiga mental y las cefaleas tensionales.",
    svgGlyph: createMayanCartouche(`
      <path d="M38 65 C38 42 52 34 68 34 C78 34 84 40 84 48 C84 62 66 68 56 68 H38" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
      <circle cx="68" cy="46" r="4.5" fill="currentColor"/>
    `)
  },
  {
    id: 5,
    kiche: "Ajmaq",
    maya: "Kib'",
    mexica: "Cozcacuauhtli (Sabiduría Serena)",
    traduccion: "La Sabiduría y la Autocompasión",
    glifoSignificado: "La espiral del caracol sagrado que guarda la memoria ancestral.",
    elemento: "Tierra",
    rumbo: "Norte — La Quietud",
    totem: "El Búho Sabio & La Abeja",
    habitoConductual: "Diario de Liberación de Culpa (Journaling)",
    conductaExplicacion: "Escribe en 3 líneas un error del día y añade: 'Actué con las herramientas que tenía; mañana puedo aprender de esto'.",
    saludConsejo: "El rencor y la culpa elevan la inflamación crónica en el cuerpo. Practica soltar la necesidad de perfección.",
    svgGlyph: createMayanCartouche(`
      <path d="M60 34 C44 34 36 46 36 58 C36 70 48 76 62 76 C74 76 82 66 82 54 C82 44 74 38 64 38 C56 38 50 44 50 52 C50 58 56 62 62 62" stroke-width="2.5"/>
    `)
  },
  {
    id: 6,
    kiche: "No'j",
    maya: "Kab'an",
    mexica: "Ollin (Movimiento Reflexivo)",
    traduccion: "La Mente Lúcida y la Estrategia",
    glifoSignificado: "El icónico rizo de Caban que une la mente y la tierra.",
    elemento: "Tierra y Éter",
    rumbo: "Poniente — La Reflexión",
    totem: "El Coyote Sabio & El Pájaro Carpintero",
    habitoConductual: "Descarga Mental Nocturna (Brain Dump)",
    conductaExplicacion: "Vacía en un papel todas tus tareas pendientes 30 minutos antes de dormir para reducir el bucle de rumiación mental.",
    saludConsejo: "El exceso de análisis paraliza la acción. Haz actividad física moderada para sacar la energía acumulada en la cabeza.",
    svgGlyph: createMayanCartouche(`
      <path d="M40 38 C52 34 68 34 76 42 C84 50 84 64 74 72 C64 80 48 78 40 68 C36 62 36 52 42 46 C48 40 58 42 62 48" stroke-width="2.6"/>
      <circle cx="48" cy="62" r="3" fill="currentColor"/>
      <circle cx="56" cy="65" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 7,
    kiche: "Tijax",
    maya: "Etz'nab'",
    mexica: "Técpatl (Pedernal / Claridad)",
    traduccion: "El Espejo de la Verdad y la Sanación",
    glifoSignificado: "Hoja de pedernal sagrada con cuadrícula facetada de obsidiana.",
    elemento: "Fuego y Metal",
    rumbo: "Sur — El Discernimiento",
    totem: "El Pez Espada & El Lobo",
    habitoConductual: "Comunicación Asertiva sin Juicio",
    conductaExplicacion: "Expresa lo que necesitas usando 'Yo siento / Yo necesito' en lugar de acusar con 'Tú siempre / Tú nunca'.",
    saludConsejo: "Aprende a cortar compromisos superfluos para proteger tus niveles diarios de glucosa y energía vital.",
    svgGlyph: createMayanCartouche(`
      <path d="M60 30 L84 54 L60 78 L36 54 Z" stroke-width="2.8" fill="currentColor" fill-opacity="0.12"/>
      <path d="M36 54 H84 M60 30 V78" stroke-width="2"/>
    `)
  },
  {
    id: 8,
    kiche: "Kawoq",
    maya: "Kawak'",
    mexica: "Quiáhuitl (Lluvia)",
    traduccion: "La Lluvia Fértil y la Comunidad",
    glifoSignificado: "Los racimos de nubes celestes cargadas de agua fertilizadora.",
    elemento: "Agua",
    rumbo: "Oriente — La Vida Nueva",
    totem: "La Tortuga & La Rana de Río",
    habitoConductual: "Conexión Social Significativa",
    conductaExplicacion: "Una conversación genuina de 10 minutos al día con alguien de confianza estimula la liberación de oxitocina protectora.",
    saludConsejo: "Hidratación consciente y baños de agua tibia para descargar la tensión acumulada en hombros y cuello.",
    svgGlyph: createMayanCartouche(`
      <circle cx="44" cy="46" r="6" stroke-width="2"/>
      <circle cx="60" cy="42" r="7" stroke-width="2"/>
      <circle cx="76" cy="46" r="6" stroke-width="2"/>
      <path d="M38 58 Q60 50 82 58" stroke-width="2.5"/>
    `)
  },
  {
    id: 9,
    kiche: "Ajpu",
    maya: "Ajaw",
    mexica: "Xóchitl (Flor / Sol)",
    traduccion: "La Maestría Interior y el Propósito",
    glifoSignificado: "El rostro solar del cerbatanero cósmico con tiara real y ojos redondos.",
    elemento: "Fuego Solar",
    rumbo: "Norte — La Trascendencia",
    totem: "El Caracol Marino & El Cazador",
    habitoConductual: "Celebración de Micro-Victorias",
    conductaExplicacion: "Reconoce 3 cosas pequeñas que lograste hoy antes de cenar. Entrena a tu cerebro a notar el progreso en lugar del déficit.",
    saludConsejo: "La exposición al sol matutino y el ejercicio cardiovascular fortalecen tu energía metabólica.",
    svgGlyph: createMayanCartouche(`
      <circle cx="48" cy="50" r="5" fill="currentColor"/>
      <circle cx="72" cy="50" r="5" fill="currentColor"/>
      <circle cx="60" cy="66" r="5" fill="currentColor"/>
      <path d="M38 36 H82 M38 42 H82" stroke-width="2"/>
    `)
  },
  {
    id: 10,
    kiche: "Imox",
    maya: "Imix",
    mexica: "Cipactli (Aguas Primordiales)",
    traduccion: "La Intuición y las Raíces Fértiles",
    glifoSignificado: "El lirio de agua en la superficie del estanque primordial.",
    elemento: "Agua Profunda",
    rumbo: "Poniente — El Inconsciente",
    totem: "El Caimán & El Delfín",
    habitoConductual: "Anclaje Somático 5-4-3-2-1",
    conductaExplicacion: "Nombra 5 cosas que ves, 4 que tocas, 3 que escuchas, 2 que hueles y 1 que saboreas para salir de la rumiación.",
    saludConsejo: "Bañarse con agua templada y caminar descalzo en césped o tierra para calmar la agitación del sistema nervioso.",
    svgGlyph: createMayanCartouche(`
      <path d="M38 68 C38 48 50 36 60 36 C70 36 82 48 82 68 H38 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.15"/>
      <path d="M60 36 V68"/>
    `)
  },
  {
    id: 11,
    kiche: "Iq'",
    maya: "Ik'",
    mexica: "Ehécatl (Viento y Aliento)",
    traduccion: "El Aliento de Vida y la Vitalidad",
    glifoSignificado: "La sagrada Ventana en T flanqueada por las volutas de aire.",
    elemento: "Viento / Aire",
    rumbo: "Sur — La Comunicación",
    totem: "El Colibrí & El Halcón",
    habitoConductual: "Respiración con Suspiro Fisiológico",
    conductaExplicacion: "Dos inhalaciones cortas por la nariz y una exhalación larga y lenta por la boca. 3 repeticiones desinflan la taquicardia y la ansiedad.",
    saludConsejo: "Ventila tus espacios de trabajo con aire fresco cada 2 horas para optimizar la oxigenación celular.",
    svgGlyph: createMayanCartouche(`
      <path d="M42 38 H78 V48 H66 V72 H54 V48 H42 Z" stroke-width="2.8" fill="currentColor" fill-opacity="0.25"/>
      <path d="M32 54 C32 46 38 42 42 42"/>
      <path d="M88 54 C88 46 82 42 78 42"/>
    `)
  },
  {
    id: 12,
    kiche: "Aq'ab'al",
    maya: "Ak'b'al",
    mexica: "Calli (El Hogar / El Templo)",
    traduccion: "El Amanecer y la Renovación Diaria",
    glifoSignificado: "El horizonte arqueológico donde la luz divide las sombras nocturnas.",
    elemento: "Fuego y Éter",
    rumbo: "Oriente — La Esperanza",
    totem: "La Luciérnaga & El Murciélago",
    habitoConductual: "Ritual de Inicio de Jornada",
    conductaExplicacion: "Crea una señal conductual fija (ej. preparar tu infusión favorita con plena atención antes de abrir el correo) para ingresar en calma al trabajo.",
    saludConsejo: "Cuidar la higiene del sueño (dormitorio oscuro, fresco y libre de pantallas) es el cimiento de tu salud.",
    svgGlyph: createMayanCartouche(`
      <path d="M38 70 L38 46 L60 32 L82 46 L82 70" stroke-width="2.5"/>
      <circle cx="60" cy="54" r="8" stroke-width="2" fill="currentColor" fill-opacity="0.3"/>
    `)
  },
  {
    id: 13,
    kiche: "K'at",
    maya: "K'an",
    mexica: "Cuetzpalin (La Semilla)",
    traduccion: "La Semilla y el Orden Consciente",
    glifoSignificado: "El grano de maíz maduro cruzado por las líneas de la mazorca cósmica.",
    elemento: "Fuego",
    rumbo: "Norte — La Maduración",
    totem: "La Lagartija & La Araña",
    habitoConductual: "Regla de las 3 Prioridades Diarias",
    conductaExplicacion: "Elige solo 3 cosas esenciales para lograr hoy. Todo lo demás es secundario. Protege tu atención ejecutiva.",
    saludConsejo: "El desorden en tu espacio físico incrementa el cortisol en sangre. Mantén tu escritorio minimalista y despejado.",
    svgGlyph: createMayanCartouche(`
      <circle cx="60" cy="54" r="18" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
      <path d="M60 36 V72 M42 54 H78" stroke-width="2"/>
    `)
  },
  {
    id: 14,
    kiche: "Kan",
    maya: "Chikchan",
    mexica: "Cóatl (La Fuerza Vital)",
    traduccion: "La Energía Vital y la Adaptación",
    glifoSignificado: "La ondulación de la serpiente de fuego con sus marcas de escamas cruzadas.",
    elemento: "Fuego Somático",
    rumbo: "Poniente — La Transmutación",
    totem: "La Serpiente Cósmica",
    habitoConductual: "Movimiento Somático Inteligente",
    conductaExplicacion: "2 minutos de estiramientos corporales profundos cada hora de sedentarismo para restaurar el flujo sanguíneo y la fascia.",
    saludConsejo: "Canaliza tu alta energía con deporte regular o caminatas rápidas para evitar la tensión muscular acumulada.",
    svgGlyph: createMayanCartouche(`
      <path d="M40 38 Q60 32 78 44 Q60 56 42 66 Q60 76 80 68" stroke-width="3"/>
      <circle cx="74" cy="44" r="3.5" fill="currentColor"/>
    `)
  },
  {
    id: 15,
    kiche: "Kame",
    maya: "Kimi",
    mexica: "Miquiztli (La Pausa)",
    traduccion: "El Cierre de Ciclos y la Calma",
    glifoSignificado: "El ojo cerrado de la meditación y el signo del descanso consciente.",
    elemento: "Tierra y Silencio",
    rumbo: "Sur — El Descanso",
    totem: "La Lechuza Protectora",
    habitoConductual: "Técnica de Desconexión Digital",
    conductaExplicacion: "Activa el modo descanso en tu teléfono 1 hora antes de dormir. Disminuye la dopamina reactiva y prepara el descanso profundo.",
    saludConsejo: "Dormir bien no es tiempo perdido; es el proceso en el que tu cerebro limpia toxinas metabólicas.",
    svgGlyph: createMayanCartouche(`
      <line x1="40" y1="48" x2="80" y2="48" stroke-width="3"/>
      <circle cx="50" cy="38" r="4" fill="currentColor"/>
      <circle cx="70" cy="62" r="4" fill="currentColor"/>
      <line x1="72" y1="36" x2="48" y2="64" stroke-width="2.5"/>
    `)
  },
  {
    id: 16,
    kiche: "Kej",
    maya: "Manik'",
    mexica: "Mázatl (Firmeza Pacífica)",
    traduccion: "Los Cuatro Pilares y la Estabilidad",
    glifoSignificado: "La mano sagrada en gesto de bendición y equilibrio.",
    elemento: "Tierra y Bosque",
    rumbo: "Oriente — La Firmeza",
    totem: "El Ciervo Noble",
    habitoConductual: "Postura de Presencia y Apertura",
    conductaExplicacion: "Hombros hacia abajo y atrás, mentón paralelo al suelo y respiración baja. La retroalimentación postural calma el sistema nervioso.",
    saludConsejo: "Pasa tiempo en contacto con plantas o árboles para inducir el estado de restauración cognitiva según la neurobiología.",
    svgGlyph: createMayanCartouche(`
      <path d="M46 72 V48 C46 44 50 40 54 40 C58 40 62 44 62 48 V42 C62 38 66 34 70 34 C74 34 78 38 78 44 V68" stroke-width="2.4" fill="currentColor" fill-opacity="0.15"/>
    `)
  },
  {
    id: 17,
    kiche: "Q'anil",
    maya: "Lamat",
    mexica: "Tochtli (La Cosecha)",
    traduccion: "La Fertilidad y los Procesos Orgánicos",
    glifoSignificado: "La estrella de 4 puntas de Venus con sus 4 discos cósmicos.",
    elemento: "Tierra y Luz",
    rumbo: "Norte — La Belleza",
    totem: "El Conejo Ágil",
    habitoConductual: "Nutrición con Atención Plena (Mindful Eating)",
    conductaExplicacion: "Come sin pantallas al menos una vez al día, masticando despacio para favorecer la respuesta vagal digestiva.",
    saludConsejo: "Respeta tus propios ritmos. Obligar a que una meta florezca antes de tiempo solo genera frustración y burnout.",
    svgGlyph: createMayanCartouche(`
      <circle cx="44" cy="40" r="5" fill="currentColor"/>
      <circle cx="76" cy="40" r="5" fill="currentColor"/>
      <circle cx="44" cy="68" r="5" fill="currentColor"/>
      <circle cx="76" cy="68" r="5" fill="currentColor"/>
      <path d="M60 32 V76 M38 54 H82" stroke-width="2.5"/>
    `)
  },
  {
    id: 18,
    kiche: "Toj",
    maya: "Muluk'",
    mexica: "Atl (La Gratitud)",
    traduccion: "El Reconocimiento y la Reciprocidad",
    glifoSignificado: "La cuenta de jade con gotas circundantes sobre el altar de la tierra.",
    elemento: "Fuego y Agua",
    rumbo: "Poniente — El Equilibrio",
    totem: "El Fuego del Hogar",
    habitoConductual: "Práctica de Gratitud Específica",
    conductaExplicacion: "Escribe cada mañana 1 cosa concreta que aprecias hoy (no generalidades, sino detalles tangibles). Modifica el sesgo de negatividad.",
    saludConsejo: "Reconocer lo que ya funciona en tu vida reduce la tensión arterial y fomenta la calma emocional.",
    svgGlyph: createMayanCartouche(`
      <circle cx="60" cy="54" r="16" stroke-width="2.8" fill="currentColor" fill-opacity="0.15"/>
      <circle cx="60" cy="54" r="8" fill="currentColor"/>
    `)
  },
  {
    id: 19,
    kiche: "Tz'i'",
    maya: "Ok'",
    mexica: "Itzcuintli (La Lealtad)",
    traduccion: "La Lealtad hacia Uno Mismo",
    glifoSignificado: "Perfil de la oreja caída del guardián leal.",
    elemento: "Tierra y Corazón",
    rumbo: "Sur — La Coherencia",
    totem: "El Guardián Fiel",
    habitoConductual: "Chequeo de Valores Personales",
    conductaExplicacion: "Antes de tomar una decisión estresante, pregúntate: '¿Esto honra mi bienestar a largo plazo o es para complacer a otros?'.",
    saludConsejo: "La incongruencia entre lo que sientes y lo que haces es una de las mayores fuentes de estrés biológico.",
    svgGlyph: createMayanCartouche(`
      <path d="M44 36 C54 36 62 44 62 54 V74 C50 74 44 66 44 54 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.2"/>
      <path d="M62 48 H76 C76 60 68 70 62 72" stroke-width="2"/>
    `)
  }
];

const TONES_INFO = [
  { tone: 1, name: "Magnético", keyword: "Propósito Claro", desc: "Atracción, unidad e inicio consciente de una intención." },
  { tone: 2, name: "Lunar", keyword: "Discernimiento", desc: "Identificar polaridades y contrastes sin juicio destructivo." },
  { tone: 3, name: "Eléctrico", keyword: "Acción Práctica", desc: "Movimiento activo y enfoque en soluciones tangibles." },
  { tone: 4, name: "Autoexistente", keyword: "Estructura Saludable", desc: "Límites sanos, rutina estable y cimientos de bienestar." },
  { tone: 5, name: "Entonado", keyword: "Soberanía Personal", desc: "Autorregulación emocional y autoconfianza basada en hechos." },
  { tone: 6, name: "Rítmico", keyword: "Equilibrio Orgánico", desc: "Fluidez cotidiana y balance entre esfuerzo y recuperación." },
  { tone: 7, name: "Resonante", keyword: "Claridad Mental", desc: "Atención plena, reducción de ruido exterior e introspección." },
  { tone: 8, name: "Galáctico", keyword: "Coherencia de Vida", desc: "Alineación entre pensamientos, palabras y acciones diarias." },
  { tone: 9, name: "Solar", keyword: "Paciencia Sabia", desc: "Reconocer que los procesos biológicos y mentales toman tiempo." },
  { tone: 10, name: "Planetario", keyword: "Manifestación Real", desc: "Materialización de metas a través de micro-hábitos sostenibles." },
  { tone: 11, name: "Espectral", keyword: "Liberación de Cargas", desc: "Soltar apegos, tareas innecesarias y rumiaciones del pasado." },
  { tone: 12, name: "Cristal", keyword: "Comunidad & Apoyo", desc: "Cooperación, relaciones constructivas y apoyo mutuo." },
  { tone: 13, name: "Cósmico", keyword: "Integración Total", desc: "Sabiduría madura y capacidad de comenzar nuevos ciclos en paz." }
];

function getJulianDayNumber(year, month, day) {
  let y = parseInt(year);
  let m = parseInt(month);
  let d = parseInt(day);

  if (m <= 2) {
    y -= 1;
    m += 12;
  }
  const a = Math.floor(y / 100);
  const b = 2 - a + Math.floor(a / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + b - 1524;
}

function calculateAncestralSigns(year, month, day) {
  const jdn = getJulianDayNumber(year, month, day);
  const GMT_CORRELATION = 584283;
  const daysSinceEpoch = jdn - GMT_CORRELATION;

  const toneIndex = ((daysSinceEpoch + 3) % 13 + 13) % 13;
  const toneData = TONES_INFO[toneIndex];

  const signIndex = ((daysSinceEpoch + 19) % 20 + 20) % 20;
  const nahualData = ANCESTRAL_DATABASE[signIndex];

  return {
    jdn,
    tone: toneData,
    nahual: nahualData,
    dateString: `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
  };
}

document.addEventListener('DOMContentLoaded', () => {
  populateDateSelectors();

  const form = document.getElementById('ancestral-calc-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleCalculation();
    });
  }

  const leadForm = document.getElementById('lead-magnet-form');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleLeadCapture();
    });
  }

  setupAudioEngine();
});

function populateDateSelectors() {
  const daySelect = document.getElementById('calc-day');
  const monthSelect = document.getElementById('calc-month');
  const yearSelect = document.getElementById('calc-year');

  if (!daySelect || !yearSelect) return;

  for (let i = 1; i <= 31; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    if (i === 15) opt.selected = true;
    daySelect.appendChild(opt);
  }

  const currentYear = new Date().getFullYear();
  for (let y = currentYear; y >= 1940; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    if (y === 1996) opt.selected = true;
    yearSelect.appendChild(opt);
  }
}

let lastCalculatedData = null;

function handleCalculation() {
  const day = document.getElementById('calc-day').value;
  const month = document.getElementById('calc-month').value;
  const year = document.getElementById('calc-year').value;

  const results = calculateAncestralSigns(year, month, day);
  lastCalculatedData = results;

  renderResultsCard(results);

  const resultContainer = document.getElementById('results-section');
  if (resultContainer) {
    resultContainer.classList.remove('hidden');
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function renderResultsCard(data) {
  const { nahual, tone, dateString } = data;

  document.getElementById('res-date-label').textContent = dateString;
  document.getElementById('res-nahual-kiche').textContent = nahual.kiche;
  document.getElementById('res-nahual-maya').textContent = `Tzolk'in: ${nahual.maya} • Mexica: ${nahual.mexica}`;
  document.getElementById('res-traduccion').textContent = `"${nahual.traduccion}"`;
  document.getElementById('res-tone-name').textContent = `Tono ${tone.tone} (${tone.name})`;
  document.getElementById('res-tone-desc').textContent = `${tone.keyword}: ${tone.desc}`;

  const glyphContainer = document.getElementById('res-glyph-container');
  if (glyphContainer) {
    glyphContainer.innerHTML = nahual.svgGlyph;
  }

  const badge = document.getElementById('res-glyph-badge');
  if (badge) {
    badge.textContent = `Cartucho Arqueológico: ${nahual.maya}`;
  }

  document.getElementById('res-rumbo').textContent = nahual.rumbo;
  document.getElementById('res-totem').textContent = nahual.totem;

  document.getElementById('res-habito-titulo').textContent = nahual.habitoConductual;
  document.getElementById('res-habito-desc').textContent = nahual.conductaExplicacion;
  document.getElementById('res-salud-consejo').textContent = nahual.saludConsejo;
}

function openLeadModal() {
  const modal = document.getElementById('lead-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeLeadModal() {
  const modal = document.getElementById('lead-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleLeadCapture() {
  const name = document.getElementById('lead-name').value.trim();
  const email = document.getElementById('lead-email').value.trim();

  if (!email || !name) return;

  const subscribers = JSON.parse(localStorage.getItem('equilibrio_subscribers') || '[]');
  subscribers.push({
    name,
    email,
    nahual: lastCalculatedData ? lastCalculatedData.nahual.kiche : 'Desconocido',
    date: new Date().toISOString()
  });
  localStorage.setItem('equilibrio_subscribers', JSON.stringify(subscribers));

  const formBox = document.getElementById('lead-form-box');
  const successBox = document.getElementById('lead-success-box');

  if (formBox && successBox) {
    formBox.classList.add('hidden');
    successBox.classList.remove('hidden');
    document.getElementById('user-confirmed-email').textContent = email;
  }
}

// Sonido de Fondo Armónico en Vivo (432 Hz)
let audioCtx = null;
let isAudioPlaying = false;
let osc1 = null;
let osc2 = null;
let gainNode = null;

function setupAudioEngine() {
  const audioBtn = document.getElementById('toggle-soundscape-btn');
  const audioStatus = document.getElementById('soundscape-status');

  if (!audioBtn) return;

  audioBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startSoundscape();
      isAudioPlaying = true;
      if (audioStatus) audioStatus.textContent = "Frecuencia activa (432 Hz)";
      if (audioBtn) audioBtn.classList.add('bg-sage-dark');
    } else {
      stopSoundscape();
      isAudioPlaying = false;
      if (audioStatus) audioStatus.textContent = "Escuchar audio de calma (432 Hz)";
      if (audioBtn) audioBtn.classList.remove('bg-sage-dark');
    }
  });
}

function startSoundscape() {
  if (!audioCtx) return;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.10, audioCtx.currentTime + 3);

  osc1 = audioCtx.createOscillator();
  osc1.type = 'sine';
  osc1.frequency.setValueAtTime(432, audioCtx.currentTime);

  osc2 = audioCtx.createOscillator();
  osc2.type = 'triangle';
  osc2.frequency.setValueAtTime(216, audioCtx.currentTime);

  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  osc1.start();
  osc2.start();
}

function stopSoundscape() {
  if (!gainNode || !audioCtx) return;

  gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1.5);

  setTimeout(() => {
    if (osc1) { osc1.stop(); osc1.disconnect(); }
    if (osc2) { osc2.stop(); osc2.disconnect(); }
  }, 1600);
}
