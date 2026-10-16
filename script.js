/**
 * EQUILIBRIO ASTRAL (equilibrioastral.com)
 * Motor Arqueoastronómico con Cartuchos Mayas Tradicionales (Estilo Estela & Códices)
 * 100% Patrimonio Arqueológico de Dominio Público
 */

// Helper para envolver el glifo en el auténtico Cartucho de Día Clásico Maya (con pedestal arqueológico inferior)
function createMayanCartouche(innerSvgContent) {
  return `<svg viewBox="0 0 120 145" class="w-full h-full text-gold-sand" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
    <!-- Marco Exterior del Cartucho de Día (Estela Clásica) -->
    <rect x="18" y="12" width="84" height="88" rx="22" stroke-width="3" stroke="currentColor" fill="currentColor" fill-opacity="0.08"/>
    <!-- Doble filete interior tradicional -->
    <rect x="23" y="17" width="74" height="78" rx="17" stroke-width="1.2" stroke-dasharray="6 3" stroke-opacity="0.7"/>
    <!-- Pedestal arqueológico inferior tradicional (los soportes del Tzolk'in) -->
    <path d="M26 100 C26 114 36 122 48 122 H72 C84 122 94 114 94 100" stroke-width="2.5"/>
    <path d="M46 100 V122 M74 100 V122" stroke-width="1.8"/>
    <circle cx="60" cy="111" r="3.5" fill="currentColor"/>
    <!-- Símbolo Arqueológico Específico del Glifo -->
    ${innerSvgContent}
  </svg>`;
}

// ==========================================================================
// 1. BASE DE DATOS DE LOS 20 NAHUALES CON CARTUCHOS MAYAS ARQUEOLÓGICOS
// ==========================================================================
const ANCESTRAL_DATABASE = [
  {
    id: 0,
    kiche: "B'atz'",
    maya: "Chuen",
    mexica: "Ozomatli (Mono)",
    traduccion: "El Hilo del Tiempo y la Creatividad",
    glifoSignificado: "Perfil clásico del Mono Sabio y la madeja de hilo enrollada.",
    elemento: "Agua / Fuego",
    rumbo: "Oriente (Rojo) — La Salida del Sol",
    totem: "El Mono Aullador & La Araña Tejedora",
    aliado: "Cacao Ancestral & Ámbar",
    don: "Capacidad artística, mediación, flexibilidad mental y visión para conectar a las personas.",
    medicina: "Aprende a soltar la rigidez. El juego, la risa y el arte son tu mayor portal de sanación.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Chuen / B'atz': Espiral de la madeja sagrada y orejera de mono -->
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
    rumbo: "Norte (Blanco) — La Casa de los Ancestros",
    totem: "El Gato Montés & El Caminante",
    aliado: "Obsidiana Verde & Salvia",
    don: "Liderazgo natural en expediciones, guía para otros, perseverancia y diplomacia.",
    medicina: "Cada desvío en tu vida no es un error, es un maestro. Honra tus pasos sin prisa.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Eb': Los peldaños sagrados y mandíbula del caminante -->
      <path d="M42 34 H78 V44 H42 Z" fill="currentColor" fill-opacity="0.2"/>
      <path d="M42 48 H78 V58 H42 Z" fill="currentColor" fill-opacity="0.2"/>
      <path d="M42 62 H78 V72 H42 Z" fill="currentColor" fill-opacity="0.2"/>
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
    rumbo: "Poniente (Negro) — El Ocaso y la Sabiduría",
    totem: "El Armadillo & Las Cañas Sagradas",
    aliado: "Maíz Criollo & Ojo de Tigre",
    don: "Columna vertebral moral, lealtad a la familia, protección del territorio y firmeza.",
    medicina: "La caña resiste las tormentas porque sabe doblarse con el viento. Cultiva la ternura.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo B'en: Dos columnas con ataduras ceremoniales -->
      <path d="M44 32 V74 M76 32 V74" stroke-width="3"/>
      <path d="M38 46 H82 M38 60 H82" stroke-width="2"/>
      <circle cx="60" cy="46" r="3.5" fill="currentColor"/>
      <circle cx="60" cy="60" r="3.5" fill="currentColor"/>
      <path d="M52 32 H68"/>
    `)
  },
  {
    id: 3,
    kiche: "I'x",
    maya: "Ix",
    mexica: "Ocelotl (Jaguar)",
    traduccion: "El Jaguar y el Espíritu de la Selva",
    glifoSignificado: "Las tres manchas oculares del jaguar entre las sombras del bosque.",
    elemento: "Tierra y Agua",
    rumbo: "Sur (Amarillo) — La Fertilidad y la Cosecha",
    totem: "El Jaguar & El Ocelote",
    aliado: "Jade Verde & Copal Blanco",
    don: "Sensibilidad intuitiva profunda, capacidad de ver en la sombra, sigilo y temple noble.",
    medicina: "Tu intuición no es paranoia; es memoria ancestral. Aprende a confiar en tus silencios.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Ix: Las 3 manchas triangulares del jaguar de estela -->
      <circle cx="44" cy="45" r="7" stroke-width="2.5" fill="currentColor" fill-opacity="0.3"/>
      <circle cx="76" cy="45" r="7" stroke-width="2.5" fill="currentColor" fill-opacity="0.3"/>
      <circle cx="60" cy="66" r="8" stroke-width="2.5" fill="currentColor" fill-opacity="0.3"/>
      <path d="M50 36 C55 33 65 33 70 36" stroke-width="2"/>
      <circle cx="60" cy="66" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 4,
    kiche: "Tz'ik'in",
    maya: "Men",
    mexica: "Cuauhtli (Águila)",
    traduccion: "El Águila y la Abundancia Visionaria",
    glifoSignificado: "Perfil de la cabeza del ave sagrada con el pico curvo y cresta solar.",
    elemento: "Viento",
    rumbo: "Oriente (Rojo) — La Iluminación",
    totem: "El Quetzal & El Águila Real",
    aliado: "Pirita Dorada & Plumas de Romero",
    don: "Claridad para ver el cuadro completo, visión de negocios con propósito y elocuencia.",
    medicina: "No te pierdas en pequeñeces cotidianas; elévanos con tu perspectiva elevada.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Men: Pico curvado de águila y volutas de plumaje -->
      <path d="M38 65 C38 42 52 34 68 34 C78 34 84 40 84 48 C84 62 66 68 56 68 H38" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
      <path d="M56 68 C52 74 46 76 40 76 C36 76 34 72 36 68" stroke-width="2"/>
      <circle cx="68" cy="46" r="4.5" fill="currentColor"/>
      <path d="M68 34 C68 28 62 26 56 26"/>
    `)
  },
  {
    id: 5,
    kiche: "Ajmaq",
    maya: "Kib'",
    mexica: "Cozcacuauhtli (Zopilote Sagrado)",
    traduccion: "El Perdón y la Sabiduría de los Abuelos",
    glifoSignificado: "La espiral del caracol sagrado que guarda la memoria ancestral.",
    elemento: "Tierra",
    rumbo: "Norte (Blanco) — La Quietud",
    totem: "La Abeja Silvestre & El Búho Sabio",
    aliado: "Cera de Abeja & Cuarzo Ahumado",
    don: "Poder para reconciliar rencores, humildad, introspección y conexión con linajes.",
    medicina: "Perdonar no es justificar; es soltar la brasa que te quemaba las manos.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Kib': La concha en espiral y las rayas de expiación -->
      <path d="M60 34 C44 34 36 46 36 58 C36 70 48 76 62 76 C74 76 82 66 82 54 C82 44 74 38 64 38 C56 38 50 44 50 52 C50 58 56 62 62 62" stroke-width="2.5"/>
      <path d="M36 50 H82 M38 62 H80" stroke-width="1.5" stroke-dasharray="3 3"/>
    `)
  },
  {
    id: 6,
    kiche: "No'j",
    maya: "Kab'an",
    mexica: "Ollin (Movimiento / Sol)",
    traduccion: "La Sabiduría y la Mente Cósmica",
    glifoSignificado: "El icónico 'rizo de Caban' (el cabello ondulado de la diosa de la tierra).",
    elemento: "Tierra y Éter",
    rumbo: "Poniente (Negro) — El Conocimiento Oculto",
    totem: "El Pájaro Carpintero & El Coyote",
    aliado: "Lapislázuli & Hojas de Laurel",
    don: "Intelecto lúcido, pensamiento estratégico, memoria profunda y capacidad de análisis.",
    medicina: "Baja de la mente al corazón. El intelecto sin compasión se vuelve una jaula fría.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Kab'an: El rizo de tierra y los tres puntos de copal -->
      <path d="M40 38 C52 34 68 34 76 42 C84 50 84 64 74 72 C64 80 48 78 40 68 C36 62 36 52 42 46 C48 40 58 42 62 48" stroke-width="2.6"/>
      <circle cx="48" cy="62" r="3" fill="currentColor"/>
      <circle cx="56" cy="65" r="3" fill="currentColor"/>
      <circle cx="64" cy="64" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 7,
    kiche: "Tijax",
    maya: "Etz'nab'",
    mexica: "Técpatl (Pedernal / Espejo)",
    traduccion: "El Espejo de Obsidiana y el Sanador",
    glifoSignificado: "Hoja de pedernal sagrada con cuadrícula facetada de obsidiana.",
    elemento: "Fuego y Metal",
    rumbo: "Sur (Amarillo) — El Juicio Claro",
    totem: "El Pez Espada & El Lobo",
    aliado: "Obsidiana Negra & Flor de Manzanilla",
    don: "Capacidad para sanar heridas ajenas, sinceridad radical, coraje y discernimiento.",
    medicina: "La verdad dicha sin amor es crueldad. Sé impecable con tu palabra.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Etz'nab': Rombo de pedernal con trama interior en cruz -->
      <path d="M60 30 L84 54 L60 78 L36 54 Z" stroke-width="2.8" fill="currentColor" fill-opacity="0.12"/>
      <path d="M36 54 H84 M60 30 V78" stroke-width="2"/>
      <path d="M48 42 L72 66 M48 66 L72 42" stroke-width="1.5" stroke-dasharray="2 2"/>
    `)
  },
  {
    id: 8,
    kiche: "Kawoq",
    maya: "Kawak'",
    mexica: "Quiáhuitl (Lluvia)",
    traduccion: "La Lluvia Sagrada y la Comunidad",
    glifoSignificado: "Los racimos de nubes celestes cargadas de agua y semillas de lluvia.",
    elemento: "Agua",
    rumbo: "Oriente (Rojo) — La Vida Nueva",
    totem: "La Tortuga & La Rana de Río",
    aliado: "Agua de Manantial & Calcita Azul",
    don: "Nutrir a otros, tejer redes comunitarias solidarias, paciencia y generosidad de hogar.",
    medicina: "No asumas el dolor de todos a tu alrededor. Permite que cada quien camine su lección.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Kawak: Nubes de Cauac con perlas de lluvia -->
      <circle cx="44" cy="46" r="6" stroke-width="2"/>
      <circle cx="60" cy="42" r="7" stroke-width="2"/>
      <circle cx="76" cy="46" r="6" stroke-width="2"/>
      <path d="M38 58 Q60 50 82 58" stroke-width="2.5"/>
      <circle cx="48" cy="68" r="3.5" fill="currentColor"/>
      <circle cx="60" cy="72" r="3.5" fill="currentColor"/>
      <circle cx="72" cy="68" r="3.5" fill="currentColor"/>
    `)
  },
  {
    id: 9,
    kiche: "Ajpu",
    maya: "Ajaw",
    mexica: "Xóchitl (Flor / Sol)",
    traduccion: "El Sol Interior y la Maestría",
    glifoSignificado: "El rostro solar del cerbatanero cósmico con tiara real y ojos redondos.",
    elemento: "Fuego Solar",
    rumbo: "Norte (Blanco) — La Trascendencia",
    totem: "El Caracol Marino & El Cazador",
    aliado: "Oro Puro & Girasol",
    don: "Luz propia que contagia esperanza, resiliencia ante pruebas duras y heroísmo sereno.",
    medicina: "El sol alumbra a todos sin pedir tributo. Reconoce tu brillo sin necesidad de aplausos.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Ajaw Clásico: Cara redonda con ojos de sol y diadema sagrada -->
      <circle cx="48" cy="50" r="5" fill="currentColor"/>
      <circle cx="72" cy="50" r="5" fill="currentColor"/>
      <circle cx="60" cy="66" r="5" fill="currentColor"/>
      <path d="M38 36 H82 M38 42 H82" stroke-width="2"/>
      <path d="M60 30 V36" stroke-width="2"/>
    `)
  },
  {
    id: 10,
    kiche: "Imox",
    maya: "Imix",
    mexica: "Cipactli (Cocodrilo Cósmico)",
    traduccion: "Las Aguas Primordiales y la Intuición",
    glifoSignificado: "El lirio de agua en la superficie del estanque primordial.",
    elemento: "Agua Profunda",
    rumbo: "Poniente (Negro) — El Inconsciente",
    totem: "El Caimán & El Delfín",
    aliado: "Concha Marina & Aguamarina",
    don: "Capacidad de soñar mundos nuevos, imaginación desbordante y sensibilidad psíquica.",
    medicina: "Pon anclas en la tierra; si no canalizas tu agua interior en proyectos, te abrumará.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Imix: El capullo del nenúfar cósmico con ondas de agua -->
      <path d="M38 68 C38 48 50 36 60 36 C70 36 82 48 82 68 H38 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.15"/>
      <path d="M60 36 V68 M48 48 Q60 54 72 48" stroke-width="2"/>
      <path d="M34 76 Q60 70 86 76" stroke-width="2"/>
    `)
  },
  {
    id: 11,
    kiche: "Iq'",
    maya: "Ik'",
    mexica: "Ehécatl (Viento Sagrado)",
    traduccion: "El Aliento de Vida y la Inspiración",
    glifoSignificado: "La sagrada 'Ventana en T' (Tau maya) flanqueada por las volutas de aire.",
    elemento: "Viento / Aire",
    rumbo: "Sur (Amarillo) — La Comunicación",
    totem: "El Colibrí & El Halcón",
    aliado: "Flauta de Barro & Selenita",
    don: "Mensajero natural, capacidad para limpiar energías densas con palabras y aliento puro.",
    medicina: "Haz pausas conscientes de respiración. El viento purifica cuando fluye, pero destruye si se estanca.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Ik' Clásico: La Tau Maya Arqueológica con orlas de viento -->
      <path d="M42 38 H78 V48 H66 V72 H54 V48 H42 Z" stroke-width="2.8" fill="currentColor" fill-opacity="0.25"/>
      <!-- Volutas laterales de viento de estela maya -->
      <path d="M32 54 C32 46 38 42 42 42" stroke-width="2"/>
      <path d="M88 54 C88 46 82 42 78 42" stroke-width="2"/>
      <circle cx="60" cy="30" r="3" fill="currentColor"/>
    `)
  },
  {
    id: 12,
    kiche: "Aq'ab'al",
    maya: "Ak'b'al",
    mexica: "Calli (Casa / Templo)",
    traduccion: "El Amanecer y la Luz en la Oscuridad",
    glifoSignificado: "El horizonte arqueológico donde la luz divide las sombras nocturnas.",
    elemento: "Fuego y Éter",
    rumbo: "Oriente (Rojo) — La Esperanza",
    totem: "La Luciérnaga & El Murciélago",
    aliado: "Vela de Cera Pura & Amatista",
    don: "Capacidad para ver la salida en los momentos más oscuros, calidez que abraza y renueva.",
    medicina: "La noche más oscura es la que precede al alba. No temas los finales; son cunas.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Ak'b'al: La bóveda del templo y el sol naciente -->
      <path d="M38 70 L38 46 L60 32 L82 46 L82 70" stroke-width="2.5"/>
      <circle cx="60" cy="54" r="8" stroke-width="2" fill="currentColor" fill-opacity="0.3"/>
      <path d="M38 58 H82" stroke-width="1.8"/>
    `)
  },
  {
    id: 13,
    kiche: "K'at",
    maya: "K'an",
    mexica: "Cuetzpalin (Lagartija)",
    traduccion: "La Semilla y la Red de la Cosecha",
    glifoSignificado: "El grano de maíz maduro cruzado por las líneas de la mazorca cósmica.",
    elemento: "Fuego",
    rumbo: "Norte (Blanco) — La Maduración",
    totem: "La Lagartija & La Araña",
    aliado: "Semilla de Cacao & Citrino",
    don: "Organización, capacidad de clasificar prioridades, fecundidad en proyectos y perseverancia.",
    medicina: "Desata los enredos del pasado. No cargues semillas que ya no van a florecer.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo K'an: El nudo sagrado del maíz con 4 puntos de tierra -->
      <circle cx="60" cy="54" r="18" stroke-width="2.5" fill="currentColor" fill-opacity="0.15"/>
      <path d="M60 36 V72 M42 54 H78" stroke-width="2"/>
      <circle cx="48" cy="44" r="2.5" fill="currentColor"/>
      <circle cx="72" cy="44" r="2.5" fill="currentColor"/>
      <circle cx="48" cy="64" r="2.5" fill="currentColor"/>
      <circle cx="72" cy="64" r="2.5" fill="currentColor"/>
    `)
  },
  {
    id: 14,
    kiche: "Kan",
    maya: "Chikchan",
    mexica: "Cóatl (Serpiente Cósmica)",
    traduccion: "La Serpiente Emplumada y la Energía Vital",
    glifoSignificado: "La ondulación de la serpiente de fuego con sus marcas de escamas cruzadas.",
    elemento: "Fuego Kundalini",
    rumbo: "Poniente (Negro) — La Transmutación",
    totem: "La Serpiente de Cascabel & El Dragón",
    aliado: "Cornalina & Resina de Copal",
    don: "Poder de transmutar dolor en sabiduría, fuerza física, magnetismo y regeneración.",
    medicina: "Muda de piel sin culpa. La persona que fuiste hace 5 años ya cumplió su misión.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Chikchan: Las escamas enrejadas y el ojo de la serpiente -->
      <path d="M40 38 Q60 32 78 44 Q60 56 42 66 Q60 76 80 68" stroke-width="3"/>
      <circle cx="74" cy="44" r="3.5" fill="currentColor"/>
      <path d="M50 45 L66 57 M66 45 L50 57" stroke-width="1.8"/>
    `)
  },
  {
    id: 15,
    kiche: "Kame",
    maya: "Kimi",
    mexica: "Miquiztli (Transformación)",
    traduccion: "La Puerta Entre Dimensiones y la Paz",
    glifoSignificado: "El ojo cerrado de la meditación y el signo del porcentaje lunar.",
    elemento: "Tierra y Silencio",
    rumbo: "Sur (Amarillo) — El Descanso Sagrado",
    totem: "La Lechuza & El Jaguar Negro",
    aliado: "Turmalina Negra & Romero Seco",
    don: "Aceptación pacífica de los ciclos, serenidad ante la pérdida, oráculo de consuelo.",
    medicina: "La muerte no es el final; es el abono de lo que viene. Abraza los ciclos que cierran.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Kimi: Signo del ojo cerrado y mandíbula de estela -->
      <line x1="40" y1="48" x2="80" y2="48" stroke-width="3"/>
      <circle cx="50" cy="38" r="4" fill="currentColor"/>
      <circle cx="70" cy="62" r="4" fill="currentColor"/>
      <line x1="72" y1="36" x2="48" y2="64" stroke-width="2.5"/>
      <path d="M46 72 Q60 76 74 72"/>
    `)
  },
  {
    id: 16,
    kiche: "Kej",
    maya: "Manik'",
    mexica: "Mázatl (Venado)",
    traduccion: "El Venado y los Cuatro Pilares",
    glifoSignificado: "La mano sagrada en gesto de bendición y equilibrio.",
    elemento: "Tierra y Bosque",
    rumbo: "Oriente (Rojo) — La Firmeza",
    totem: "El Ciervo Sagrado & El Caballo",
    aliado: "Madera de Cedro & Cuarzo Verde",
    don: "Nobleza de carácter, agilidad para sortear trampas, liderazgo pacífico y fortaleza.",
    medicina: "Tu fuerza no necesita imponerse a gritos. Tu presencia serena es suficiente para inspirar.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Manik': La mano maya de los 4 rumbos -->
      <path d="M46 72 V48 C46 44 50 40 54 40 C58 40 62 44 62 48 V42 C62 38 66 34 70 34 C74 34 78 38 78 44 V68" stroke-width="2.4" fill="currentColor" fill-opacity="0.15"/>
      <path d="M46 56 C40 56 36 60 36 66 C36 72 42 74 54 74 H78" stroke-width="2"/>
    `)
  },
  {
    id: 17,
    kiche: "Q'anil",
    maya: "Lamat",
    mexica: "Tochtli (Conejo / Semilla)",
    traduccion: "La Semilla Estelar y la Fertilidad",
    glifoSignificado: "La estrella de 4 puntas de Venus con sus 4 discos cósmicos.",
    elemento: "Tierra y Luz",
    rumbo: "Norte (Blanco) — La Belleza",
    totem: "El Conejo & Las Aves de Colores",
    aliado: "Cuarzo Rosa & Flores de Lavanda",
    don: "Facilidad para crear abundancia, don para las plantas y la jardinería, dulzura.",
    medicina: "No arranques el brote para ver si tiene raíces. Confía en los tiempos naturales de tus proyectos.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Lamat Clásico: Estrella de Venus con 4 cuentas de jade -->
      <circle cx="44" cy="40" r="5" fill="currentColor"/>
      <circle cx="76" cy="40" r="5" fill="currentColor"/>
      <circle cx="44" cy="68" r="5" fill="currentColor"/>
      <circle cx="76" cy="68" r="5" fill="currentColor"/>
      <path d="M60 32 V76 M38 54 H82" stroke-width="2.5"/>
      <circle cx="60" cy="54" r="3.5" fill="currentColor"/>
    `)
  },
  {
    id: 18,
    kiche: "Toj",
    maya: "Muluk'",
    mexica: "Atl (Agua / Ofrenda)",
    traduccion: "El Fuego del Agradecimiento y el Pago",
    glifoSignificado: "La cuenta de jade con gotas circundantes sobre el altar.",
    elemento: "Fuego y Agua",
    rumbo: "Poniente (Negro) — El Equilibrio Kármico",
    totem: "El Pato Silvestre & El Fuego de Hogar",
    aliado: "Copal & Sal Marina",
    don: "Generosidad natural, espíritu de servicio desinteresado, purificación emocional.",
    medicina: "Agradece lo que ya tienes antes de pedir lo que deseas. La gratitud abre las puertas.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Muluk': Cuenta redonda de jade con disco concéntrico -->
      <circle cx="60" cy="54" r="16" stroke-width="2.8" fill="currentColor" fill-opacity="0.2"/>
      <circle cx="60" cy="54" r="8" fill="currentColor"/>
      <circle cx="60" cy="32" r="3.5" fill="currentColor"/>
      <circle cx="60" cy="76" r="3.5" fill="currentColor"/>
      <circle cx="38" cy="54" r="3.5" fill="currentColor"/>
      <circle cx="82" cy="54" r="3.5" fill="currentColor"/>
    `)
  },
  {
    id: 19,
    kiche: "Tz'i'",
    maya: "Ok'",
    mexica: "Itzcuintli (Perro / Lealtad)",
    traduccion: "La Lealtad Sagrada y la Justicia",
    glifoSignificado: "Perfil de la oreja caída del perro sagrado con la muesca ritual.",
    elemento: "Tierra y Corazón",
    rumbo: "Sur (Amarillo) — La Amistad",
    totem: "El Xoloitzcuintle & El Coyote Guardián",
    aliado: "Jaspe Rojo & Arcilla Cocida",
    don: "Fidelidad incorruptible, sentido de justicia natural, compañerismo entrañable.",
    medicina: "Sé tan leal contigo mismo como lo eres con los demás. No traiciones tus principios por complacer.",
    svgGlyph: createMayanCartouche(`
      <!-- Glifo Ok': La oreja de perro con muesca en el cartucho -->
      <path d="M44 36 C54 36 62 44 62 54 V74 C50 74 44 66 44 54 Z" stroke-width="2.6" fill="currentColor" fill-opacity="0.2"/>
      <path d="M62 48 H76 C76 60 68 70 62 72" stroke-width="2"/>
      <circle cx="70" cy="56" r="3" fill="currentColor"/>
    `)
  }
];

// Nombres y virtudes de los 13 Tonos Galácticos
const TONES_INFO = [
  { tone: 1, name: "Magnético / Jun", barDot: "•", keyword: "El Propósito", desc: "Atracción, unidad y el nacimiento de una intención clara." },
  { tone: 2, name: "Lunar / Keb'", barDot: "••", keyword: "El Desafío", desc: "Polaridad, discernimiento y reconocimiento de los contrastes necesarios." },
  { tone: 3, name: "Eléctrico / Oxib'", barDot: "•••", keyword: "El Servicio", desc: "Movimiento activo, creatividad unida y expresión práctica." },
  { tone: 4, name: "Autoexistente / Kajib'", barDot: "••••", keyword: "La Estructura", desc: "Definición, límites sanos y cimientos sólidos en la tierra." },
  { tone: 5, name: "Entonado / Job'", barDot: "—", keyword: "El Empoderamiento", desc: "Centro de mando interior, soberanía personal y resiliencia." },
  { tone: 6, name: "Rítmico / Waqib'", barDot: "• —", keyword: "El Equilibrio", desc: "Fluidez orgánica, balance diario y armonía con el entorno." },
  { tone: 7, name: "Resonante / Wuqub'", barDot: "•• —", keyword: "La Sintonía", desc: "Canalización de lo sutil, claridad espiritual e intuición afinada." },
  { tone: 8, name: "Galáctico / Wajxaqib'", barDot: "••• —", keyword: "La Integridad", desc: "Vivir en coherencia entre lo que piensas, sientes y haces." },
  { tone: 9, name: "Solar / B'elejeb'", barDot: "•••• —", keyword: "La Maduración", desc: "Paciencia sabia, cosecha de frutos y culminación consciente." },
  { tone: 10, name: "Planetario / Lajuj", barDot: "= (dos barras)", keyword: "La Manifestación", desc: "Perfeccionamiento, materialización tangible en este plano." },
  { tone: 11, name: "Espectral / Julajuj", barDot: "• =", keyword: "La Liberación", desc: "Soltar apegos, disolver bloqueos y renovación profunda." },
  { tone: 12, name: "Cristal / Kab'lajuj", barDot: "•• =", keyword: "La Cooperación", desc: "Trabajo en comunidad, mesa compartida y sabiduría colectiva." },
  { tone: 13, name: "Cósmico / Oxlajuj", barDot: "••• =", keyword: "La Trascendencia", desc: "Retorno a la fuente, maestría interior y nuevo comienzo." }
];

// ==========================================================================
// 2. MATEMÁTICA ASTRONÓMICA (JDN & Correlación GMT 584283)
// ==========================================================================
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

  // Cálculo del Tono (1 al 13)
  const toneIndex = ((daysSinceEpoch + 3) % 13 + 13) % 13;
  const toneData = TONES_INFO[toneIndex];

  // Cálculo del Signo / Nahual (0 al 19)
  const signIndex = ((daysSinceEpoch + 19) % 20 + 20) % 20;
  const nahualData = ANCESTRAL_DATABASE[signIndex];

  return {
    jdn,
    tone: toneData,
    nahual: nahualData,
    dateString: `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`
  };
}

// ==========================================================================
// 3. INTERACCIÓN DEL FORMULARIO & RENDERIZADO BOHO
// ==========================================================================
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
  document.getElementById('res-tone-symbol').textContent = tone.barDot;
  document.getElementById('res-tone-desc').textContent = `${tone.keyword}: ${tone.desc}`;

  // Actualizar Glifo Vectorial Arqueológico
  const glyphContainer = document.getElementById('res-glyph-container');
  if (glyphContainer) {
    glyphContainer.innerHTML = nahual.svgGlyph;
  }

  // Actualizar Badge Dinámico
  const badge = document.getElementById('res-glyph-badge');
  if (badge) {
    badge.textContent = `Cartucho Maya: ${nahual.maya}`;
  }

  // Pilares sagrados
  document.getElementById('res-rumbo').textContent = nahual.rumbo;
  document.getElementById('res-totem').textContent = nahual.totem;
  document.getElementById('res-aliado').textContent = nahual.aliado;

  // Textos reflexivos
  document.getElementById('res-don').textContent = nahual.don;
  document.getElementById('res-medicina').textContent = nahual.medicina;
}

// ==========================================================================
// 4. CAPTURA DE CORREO & MODAL
// ==========================================================================
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

// ==========================================================================
// 5. PAISAJE SONORO 432 Hz
// ==========================================================================
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
      if (audioStatus) audioStatus.textContent = "Paisaje sonoro activo (432 Hz)";
      if (audioBtn) audioBtn.classList.add('shadow-glow-warm');
    } else {
      stopSoundscape();
      isAudioPlaying = false;
      if (audioStatus) audioStatus.textContent = "Escuchar frecuencia de calma";
      if (audioBtn) audioBtn.classList.remove('shadow-glow-warm');
    }
  });
}

function startSoundscape() {
  if (!audioCtx) return;

  gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 3);

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
