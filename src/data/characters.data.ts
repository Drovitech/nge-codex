import type { Character } from '../domain/character'

export const CHARACTERS: Character[] =
[
  {
    id: 1, name: "Shinji Ikari", jp: "碇 シンジ", initials: "SI",
    color: "#1a4a8a", colorBorder: "#4a7ab5", colorText: "#7ab5e8",
    affiliation: "Piloto EVA", role: "Piloto de EVA-01 / Tercer Niño",
    age: "14", sex: "Masculino", blood: "A", sync: "400%+ (Berserker)",
    eva: "EVA-01 (Unidad Prototipo)", origin: "Tokio-3, Japón",
    bio: "Hijo de Gendo Ikari y Yui Ikari. Fue abandonado por su padre a los 3 años y criado por su sensei Yui. Reclutado para pilotar EVA-01 sin previo entrenamiento. Sufre graves problemas de autoestima y busca la validación paterna constantemente.",
    traits: ["Introvertido", "Empático", "Inseguro", "Musical", "Valiente bajo presión"],
    seiyuu: "Megumi Ogata"
  },
  {
    id: 2, name: "Rei Ayanami", jp: "綾波 レイ", initials: "RA",
    color: "#1a5a5a", colorBorder: "#3a9a9a", colorText: "#5ad0d0",
    affiliation: "Piloto EVA", role: "Piloto de EVA-00 / Primera Niña",
    age: "14", sex: "Femenino", blood: "B (Artificial)", sync: "Indeterminado",
    eva: "EVA-00 (Unidad Prototipo 0)", origin: "Desconocido / NERV",
    bio: "Ser de naturaleza misteriosa, creada a partir del alma de Yui Ikari y material genético de Lilith. Existen múltiples clones de ella. Su conexión con el Comandante Gendo es intensa y extraña. Paulatinamente desarrolla emociones al interactuar con Shinji.",
    traits: ["Distante", "Obediente", "Enigmática", "Estoica", "Evolucionando"],
    seiyuu: "Megumi Hayashibara"
  },
  {
    id: 3, name: "Asuka Langley Soryu", jp: "惣流・アスカ・ラングレー", initials: "AS",
    color: "#8a1a1a", colorBorder: "#c0392b", colorText: "#e87a7a",
    affiliation: "Piloto EVA", role: "Piloto de EVA-02 / Segunda Niña",
    age: "14", sex: "Femenino", blood: "A", sync: "hasta 400%",
    eva: "EVA-02 (Unidad de Producción)", origin: "Alemania / Tokio-3",
    bio: "Prodigio alemán-japonés que ingresó a la universidad a los 13 años. Hija de una científica de NERV. Presenció el suicidio de su madre en la infancia, lo que generó profundas heridas psicológicas que esconde detrás de una fachada arrogante y competitiva.",
    traits: ["Orgullosa", "Competitiva", "Determinada", "Herida", "Brillante"],
    seiyuu: "Yūko Miyamura"
  },
  {
    id: 4, name: "Gendo Ikari", jp: "碇 ゲンドウ", initials: "GI",
    color: "#2a1a0a", colorBorder: "#8a4a15", colorText: "#c07840",
    affiliation: "NERV", role: "Comandante Supremo de NERV",
    age: "48", sex: "Masculino", blood: "A", sync: "N/A",
    eva: "Ninguno (manipula directamente EVA-01)", origin: "Japón",
    bio: "Ex académico que tomó el apellido de su esposa Yui. Tras la muerte/absorción de Yui por EVA-01, se obsesionó con el Proyecto de Instrumentalización Humana para reunirse con ella. Friamente manipulador, abandonó a Shinji sin remordimientos.",
    traits: ["Calculador", "Manipulador", "Obsesivo", "Frío", "Doliente"],
    seiyuu: "Fumihiko Tachiki"
  },
  {
    id: 5, name: "Misato Katsuragi", jp: "葛城 ミサト", initials: "MK",
    color: "#1a3a1a", colorBorder: "#3a7a3a", colorText: "#6ac06a",
    affiliation: "NERV", role: "Comandante de Operaciones Tácticas",
    age: "29", sex: "Femenino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Sobreviviente del Segundo Impacto, donde su padre la protegió sacrificando su vida. Tiene una relación amor-odio con su pasado. Es tutora de Shinji y Asuka. Bebe cerveza en exceso como mecanismo de defensa. Ex-novia de Ryoji Kaji.",
    traits: ["Cálida", "Estratégica", "Autodestructiva", "Protectora", "Valiente"],
    seiyuu: "Kotono Mitsuishi"
  },
  {
    id: 6, name: "Ritsuko Akagi", jp: "赤木 リツコ", initials: "RG",
    color: "#3a3a0a", colorBorder: "#7a7a20", colorText: "#c0c050",
    affiliation: "NERV", role: "Jefa de Tecnología / Científica Principal",
    age: "30", sex: "Femenino", blood: "B", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Científica de élite hija de Naoko Akagi, la creadora del Sistema MAGI. Continuó el trabajo de su madre y es la principal desarrolladora de los Evangelion. Tiene una relación compleja con Gendo Ikari, mezclada de admiración, amor obsesivo y eventual traición.",
    traits: ["Intelectual", "Pragmática", "Trágica", "Amarga", "Brillante"],
    seiyuu: "Yuriko Yamaguchi"
  },
  {
    id: 7, name: "Kaworu Nagisa", jp: "渚 カヲル", initials: "KN",
    color: "#3a1a5a", colorBorder: "#7a3ab5", colorText: "#b07ae8",
    affiliation: "NERV", role: "Piloto de EVA-02 / Quinto Niño / 17° Ángel",
    age: "14 (aparente)", sex: "Masculino", blood: "AB", sync: "Altísimo",
    eva: "EVA-02 / EVA-13 (Rebuild)", origin: "Desconocido / Adam",
    bio: "Entidad angelical con el alma de Adam en un cuerpo humano, enviado por SEELE. Desarrolla un vínculo profundo con Shinji en muy poco tiempo, mostrando una empatía y ternura que Shinji nunca había experimentado. Su destino es trágico e inevitable.",
    traits: ["Enigmático", "Empático", "Fatalista", "Tranquilo", "Angelical"],
    seiyuu: "Akira Ishida"
  },
  {
    id: 8, name: "Ryoji Kaji", jp: "加持 リョウジ", initials: "RK",
    color: "#1a3a3a", colorBorder: "#2a7a7a", colorText: "#4ab5b5",
    affiliation: "NERV", role: "Agente Doble / Oficial de Seguridad",
    age: "30", sex: "Masculino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Ex-novio de Misato Katsuragi y agente infiltrado que trabaja para múltiples organizaciones secretas simultáneamente. Portador del Embrión de Adam. Cultiva una pequeña huerta en NERV como acto de paz. Su muerte se convierte en un punto de inflexión emocional.",
    traits: ["Carismático", "Misterioso", "Tranquilo", "Leal a la verdad", "Filosófico"],
    seiyuu: "Kōichi Yamadera"
  },
  {
    id: 9, name: "Toji Suzuhara", jp: "鈴原 トウジ", initials: "TS",
    color: "#1a2a3a", colorBorder: "#3a5a7a", colorText: "#70a0c0",
    affiliation: "Piloto EVA", role: "Piloto de EVA-03 / Cuarto Niño",
    age: "14", sex: "Masculino", blood: "O", sync: "Bajo",
    eva: "EVA-03 (Unidad infectada por Ángel)", origin: "Tokio-3, Japón",
    bio: "Compañero de clase de Shinji. Rudo pero leal, inicialmente hostil con Shinji por la destrucción de edificios que hospitalizó a su hermana. Acepta ser piloto de EVA para costear el tratamiento médico de ella. Su destino como el Cuarto Niño es devastador.",
    traits: ["Rudo", "Leal", "Fraternal", "Honesto", "Protector"],
    seiyuu: "Tomokazu Seki"
  },
  {
    id: 10, name: "Kensuke Aida", jp: "相田 ケンスケ", initials: "KA",
    color: "#2a2a1a", colorBorder: "#6a6a30", colorText: "#a0a060",
    affiliation: "Civil", role: "Estudiante / Otaku Militar",
    age: "14", sex: "Masculino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Tokio-3, Japón",
    bio: "Mejor amigo de Toji y compañero de clase de Shinji. Fanático de la tecnología y el equipamiento militar. Sueña con pilotar un Evangelion. A pesar de no ser elegido como piloto, provee apoyo emocional y práctico al grupo.",
    traits: ["Curioso", "Entusiasta", "Técnico", "Amigable", "Observador"],
    seiyuu: "Tetsuya Iwanaga"
  },
  {
    id: 11, name: "Hikari Horaki", jp: "洞木 ヒカリ", initials: "HH",
    color: "#5a1a3a", colorBorder: "#a03060", colorText: "#e06090",
    affiliation: "Civil", role: "Presidenta de Clase / Amiga de Asuka",
    age: "14", sex: "Femenino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Tokio-3, Japón",
    bio: "Compañera de clase y mejor amiga de Asuka. Es la presidenta del grado y muy responsable. Tiene sentimientos románticos por Toji Suzuhara. Representa la normalidad juvenil en contraste con el mundo apocalíptico que los rodea.",
    traits: ["Responsable", "Amable", "Organizada", "Valiente", "Normal"],
    seiyuu: "Junko Iwao"
  },
  {
    id: 12, name: "Kozo Fuyutsuki", jp: "冬月 コウゾウ", initials: "KF",
    color: "#2a1a2a", colorBorder: "#6a3a6a", colorText: "#a070a0",
    affiliation: "NERV", role: "Subcomandante de NERV",
    age: "59", sex: "Masculino", blood: "AB", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Antiguo mentor y colega de Gendo Ikari en la universidad, donde ambos conocieron a Yui Ikari. Sirve como subcomandante de NERV y es uno de los pocos que comprende completamente los planes de Gendo. Lleva décadas de lealtad aunque en desacuerdo.",
    traits: ["Reflexivo", "Leal", "Sabio", "Melancólico", "Estratégico"],
    seiyuu: "Motomu Kiyokawa"
  },
  {
    id: 13, name: "Makoto Hyuga", jp: "日向 マコト", initials: "MH",
    color: "#1a1a4a", colorBorder: "#3a3a9a", colorText: "#6a6adc",
    affiliation: "NERV", role: "Técnico de Operaciones",
    age: "25", sex: "Masculino", blood: "B", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Técnico de sala de mandos y uno de los tres operadores principales del Centro de Operaciones de NERV. Tiene una crush obvia por Misato Katsuragi. Junto a Ibuki y Aoba maneja los sistemas durante los combates con los Ángeles.",
    traits: ["Leal", "Profesional", "Enamoradizo", "Dedicado", "Confiable"],
    seiyuu: "Hiro Yuuki"
  },
  {
    id: 14, name: "Shigeru Aoba", jp: "青葉 シゲル", initials: "SA",
    color: "#1a3a1a", colorBorder: "#2a7a3a", colorText: "#50c060",
    affiliation: "NERV", role: "Técnico de Operaciones",
    age: "26", sex: "Masculino", blood: "O", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Técnico de la sala de mandos y guitarrista ocasional. Forma el trio de operadores junto a Hyuga e Ibuki. Tiene una personalidad más cínica y directa. Su icónica frase '¡Todos van a morir!' lo hizo favorito del fandom.",
    traits: ["Sarcástico", "Directivo", "Profesional", "Cínico", "Musical"],
    seiyuu: "Takehito Koyasu"
  },
  {
    id: 15, name: "Maya Ibuki", jp: "伊吹 マヤ", initials: "MI",
    color: "#3a1a1a", colorBorder: "#8a3a2a", colorText: "#c07060",
    affiliation: "NERV", role: "Técnica de Biotecnología",
    age: "24", sex: "Femenino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Asistente principal de Ritsuko Akagi y especialista en biotecnología. Extremadamente leal a Ritsuko, con quien tiene una relación de profunda admiración. Es la más sensible del equipo técnico y a menudo expresa consternación ante las decisiones morales de NERV.",
    traits: ["Empática", "Leal", "Sensible", "Profesional", "Admiradora"],
    seiyuu: "Miki Nagasawa"
  },
  {
    id: 16, name: "Yui Ikari", jp: "碇 ユイ", initials: "YI",
    color: "#4a2a0a", colorBorder: "#9a5a20", colorText: "#d09050",
    affiliation: "NERV", role: "Científica / Alma de EVA-01",
    age: "27 (al momento de absorción)", sex: "Femenino", blood: "A", sync: "100% (fusión permanente)",
    eva: "EVA-01 (es el alma del EVA)", origin: "Japón",
    bio: "Científica brillante, esposa de Gendo y madre de Shinji. Fue absorbida por EVA-01 durante un experimento de contacto en 2004, siendo el evento que desencadena los planes de Gendo. Su alma reside en EVA-01 y emerge en momentos críticos para proteger a Shinji.",
    traits: ["Amorosa", "Brillante", "Sacrifice", "Maternal", "Determinada"],
    seiyuu: "Megumi Hayashibara"
  },
  {
    id: 17, name: "Naoko Akagi", jp: "赤木 ナオコ", initials: "NA",
    color: "#3a0a3a", colorBorder: "#7a207a", colorText: "#b060b0",
    affiliation: "NERV", role: "Creadora del Sistema MAGI (fallecida)",
    age: "42 (al fallecer)", sex: "Femenino", blood: "B", sync: "N/A",
    eva: "N/A", origin: "Japón",
    bio: "Madre de Ritsuko Akagi y creadora del Sistema MAGI, en el que fragmentó su personalidad en tres supercomputadoras: Balthasar (madre), Melchior (científica) y Caspar (mujer). Mantuvo una relación obsesiva con Gendo Ikari. Murió estrangulando al primer clon de Rei.",
    traits: ["Genial", "Obsesiva", "Trágica", "Materna", "Fragmentada"],
    seiyuu: "Yuriko Yamaguchi"
  },
  {
    id: 18, name: "Pen Pen", jp: "ペンペン", initials: "PP",
    color: "#0a2a4a", colorBorder: "#1a5a8a", colorText: "#4090c0",
    affiliation: "Civil", role: "Pingüino de Agua Caliente / Mascota",
    age: "Desconocido", sex: "Masculino", blood: "Desconocido", sync: "N/A",
    eva: "N/A", origin: "Laboratorio (experimento)",
    bio: "Pingüino warm-water de compañía de Misato Katsuragi. Producto de experimentos genéticos, tiene una inteligencia superior a la media. Vive en un refrigerador especial en el departamento de Misato. Es el único personaje que sale ileso y con un final feliz en la serie.",
    traits: ["Peculiar", "Inteligente", "Tranquilo", "Independiente", "Sobreviviente"],
    seiyuu: "N/A (efectos de sonido)"
  },
  {
    id: 19, name: "Sachiel", jp: "サキエル", initials: "SC",
    color: "#1a4a2a", colorBorder: "#2a8a50", colorText: "#50c080",
    affiliation: "Ángel", role: "Tercer Ángel / Primer atacante de Tokio-3",
    age: "N/A", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "N/A", origin: "Desconocido",
    bio: "El primer Ángel que ataca Tokio-3 y causa la primera batalla de la serie. Su presencia fuerza a Shinji a subir a EVA-01. Su aspecto humanoide con una máscara característica de nariz prominente lo hace uno de los Ángeles más icónicos. Puede regenerar sus tejidos en batalla.",
    traits: ["Poderoso", "Regenerador", "Persistent", "Primordial", "Icónico"],
    seiyuu: "N/A"
  },
  {
    id: 20, name: "Ramiel", jp: "ラミエル", initials: "RM",
    color: "#1a1a5a", colorBorder: "#3a3ab5", colorText: "#6a6aff",
    affiliation: "Ángel", role: "Quinto Ángel / El Ángel del Abismo",
    age: "N/A", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "N/A", origin: "Desconocido",
    bio: "Ángel con forma geométrica en constante mutación (poliedro octaédrico). Posee el cañón de partículas más poderoso de la serie y un campo AT prácticamente impenetrable. Su batalla requirió la Operación Yo-Yo y una lanza de energía desarrollada especialmente para vencerlo.",
    traits: ["Geométrico", "Devastador", "Implacable", "Etéreo", "Icónico"],
    seiyuu: "N/A"
  },
  {
    id: 21, name: "Leliel", jp: "レリエル", initials: "LL",
    color: "#0a0a2a", colorBorder: "#2a2a7a", colorText: "#5050c0",
    affiliation: "Ángel", role: "Duodécimo Ángel / El Ángel de la Noche",
    age: "N/A", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "N/A", origin: "Desconocido",
    bio: "Ángel dimensional que existe como una esfera de Dirac: su cuerpo real es la sombra en el suelo (un espacio de extensión infinita), mientras que la esfera visible no es más que una inversión de la realidad. Atrapa a Shinji dentro del Mar de Dirac, precipitando una crisis existencial.",
    traits: ["Dimensional", "Filosófico", "Absorbente", "Misterioso", "Único"],
    seiyuu: "N/A"
  },
  {
    id: 22, name: "Arael", jp: "アラエル", initials: "AR",
    color: "#4a3a0a", colorBorder: "#9a7a20", colorText: "#d0b050",
    affiliation: "Ángel", role: "Decimoquinto Ángel / El Ángel de la Mente",
    age: "N/A", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "N/A", origin: "Órbita terrestre",
    bio: "Ángel que ataca desde el espacio en forma de ave luminosa. No ataca físicamente sino mentalmente, proyectando un rayo de luz que penetra la psique de sus víctimas. Desencadenó el colapso psicológico de Asuka al forzarla a revivir sus traumas más oscuros.",
    traits: ["Inalcanzable", "Psíquico", "Devastador", "Luminoso", "Cruel"],
    seiyuu: "N/A"
  },
  {
    id: 23, name: "Tabris / Kaworu", jp: "タブリス", initials: "TB",
    color: "#4a0a4a", colorBorder: "#9a209a", colorText: "#e050e0",
    affiliation: "Ángel", role: "Decimoséptimo Ángel / Quinto Niño",
    age: "N/A", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "EVA-02", origin: "Adam",
    bio: "Kaworu Nagisa es en realidad Tabris, el último Ángel. Porta el alma de Adam en un cuerpo diseñado para mezclarse con los humanos. Es enviado por SEELE como el Quinto Niño. Desarrolla un genuino afecto por Shinji pero finalmente elige la humanidad sobre su propia existencia.",
    traits: ["Dual", "Empático", "Sacrificado", "Angelical", "Humano"],
    seiyuu: "Akira Ishida"
  },
  {
    id: 24, name: "Seele", jp: "ゼーレ", initials: "ZL",
    color: "#2a0a0a", colorBorder: "#7a1a1a", colorText: "#c03030",
    affiliation: "SEELE", role: "Organización Secreta / Supervisores de NERV",
    age: "Antigua", sex: "N/A", blood: "N/A", sync: "N/A",
    eva: "N/A", origin: "Global",
    bio: "La organización secreta que financia y supervisa a NERV. Sus miembros aparecen como monolitos negros. Poseen el Libro de los Rollos Muertos con profecías del Impacto. Su objetivo es el Proyecto de Instrumentalización Humana: fusionar todas las almas humanas en una sola consciencia.",
    traits: ["Manipuladora", "Antigua", "Global", "Fanática", "Omnisciente"],
    seiyuu: "Varios"
  },
  {
    id: 25, name: "Kyoko Zeppelin Soryu", jp: "惣流・キョウコ・ツェッペリン", initials: "KZ",
    color: "#5a1a2a", colorBorder: "#a03050", colorText: "#e07090",
    affiliation: "Civil", role: "Madre de Asuka / Científica de NERV (fallecida)",
    age: "27 (al suicidarse)", sex: "Femenino", blood: "A", sync: "N/A",
    eva: "N/A", origin: "Alemania",
    bio: "Científica de NERV y madre de Asuka. Quedó con la mente fragmentada tras un experimento con EVA-02 que absorbió parte de su alma. Se obsesionó con una muñeca creyendo que era su hija. Descubrió a Asuka en el hospital antes de su cumpleaños y se suicidó, dejando un trauma imborrable en Asuka.",
    traits: ["Trágica", "Fragmentada", "Amorosa", "Perdida", "Sacrificada"],
    seiyuu: "Maria Kawamura"
  }
]