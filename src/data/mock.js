// Datos de ejemplo para la Fase 1 (sin backend).
// En la Fase 2 estos datos vendrán de Supabase.

export const currentUser = {
  name: 'Laura',
};

export const childProfile = {
  name: 'Mateo',
  ageYears: 6,
  supportLevel: 2,
  comunidad: 'Barcelona',
};

export const nextAppointment = {
  title: 'Logopedia',
  when: 'Mañana, 10:00',
  location: 'Centre Aprèn',
};

// Las 4 secciones principales del inicio (el "hub").
// "to" es null cuando la sección aún no está disponible.
export const sections = [
  { id: 'recursos', label: 'Recursos', icon: 'folder', color: 'blue', to: '/recursos' },
  { id: 'asistente', label: 'Asistente', icon: 'message', color: 'red', to: '/asistente' },
  { id: 'gestiones', label: 'Gestiones', icon: 'shield', color: 'lime', to: '/gestiones' },
  { id: 'comunidad', label: 'Comunidad', icon: 'users', color: 'muted', to: null },
];

// ---------- Catálogo de recursos ----------

export const resourceCategories = [
  { slug: 'terapias', name: 'Terapias y profesionales' },
  { slug: 'centros', name: 'Centros y asociaciones' },
  { slug: 'materiales', name: 'Materiales y guías' },
  { slug: 'ayudas', name: 'Ayudas y subvenciones' },
  { slug: 'educacion', name: 'Educación y escuela' },
  { slug: 'derechos', name: 'Derechos y legal' },
];

// "comunidad: null" significa ámbito estatal.
export const resources = [
  {
    id: 'r1',
    category: 'terapias',
    title: 'Centre Aprèn · Logopedia',
    description:
      'Centro de logopedia y terapia del lenguaje con experiencia en TEA. Sesiones individuales y orientación a familias.',
    type: 'Logopedia',
    isFree: false,
    comunidad: 'Cataluña',
    rating: 4.8,
    distanceKm: 1.2,
    phone: '+34 930 000 000',
    url: 'https://example.com/centre-apren',
  },
  {
    id: 'r2',
    category: 'centros',
    title: 'Associació TEA Barcelona',
    description:
      'Asociación de familias con grupos de apoyo, talleres y actividades de ocio inclusivo durante todo el año.',
    type: 'Asociación',
    isFree: true,
    comunidad: 'Cataluña',
    rating: 4.9,
    distanceKm: 2.5,
    phone: '+34 931 111 111',
    url: 'https://example.com/tea-bcn',
  },
  {
    id: 'r3',
    category: 'ayudas',
    title: 'Prestación por hijo a cargo con discapacidad',
    description:
      'Complemento económico estatal para familias con un hijo o hija con discapacidad reconocida. Requiere el certificado del grado.',
    type: 'Ayuda estatal',
    isFree: true,
    comunidad: null,
    url: 'https://example.com/prestacion',
  },
  {
    id: 'r4',
    category: 'terapias',
    title: 'Espai Sensorial · Terapia ocupacional',
    description:
      'Terapia ocupacional con enfoque en integración sensorial y autonomía en el día a día.',
    type: 'Terapia ocupacional',
    isFree: false,
    comunidad: 'Cataluña',
    rating: 4.7,
    distanceKm: 3.4,
    phone: '+34 932 222 222',
  },
  {
    id: 'r5',
    category: 'materiales',
    title: 'Guía: primeros pasos tras el diagnóstico',
    description:
      'Documento descargable y gratuito con los trámites y apoyos esenciales en los primeros meses.',
    type: 'Guía',
    isFree: true,
    comunidad: null,
    url: 'https://example.com/guia',
  },
  {
    id: 'r6',
    category: 'educacion',
    title: 'Orientación sobre escolarización',
    description:
      'Información sobre tipos de escolarización, apoyos educativos y el papel del EAP en Cataluña.',
    type: 'Educación',
    isFree: true,
    comunidad: 'Cataluña',
    url: 'https://example.com/escolarizacion',
  },
  {
    id: 'r7',
    category: 'derechos',
    title: 'Certificado de discapacidad: derechos asociados',
    description:
      'Qué derechos y beneficios da el reconocimiento del grado de discapacidad y cómo solicitarlo.',
    type: 'Legal',
    isFree: true,
    comunidad: null,
    url: 'https://example.com/certificado',
  },
  {
    id: 'r8',
    category: 'centros',
    title: 'Centre de Desenvolupament Infantil (CDIAP)',
    description:
      'Servicio público de atención precoz para menores de 0 a 6 años. Valoración y tratamiento gratuitos.',
    type: 'Atención temprana',
    isFree: true,
    comunidad: 'Cataluña',
    rating: 4.6,
    distanceKm: 1.9,
    phone: '+34 933 333 333',
  },
];

// Conteo de recursos por categoría (para mostrar en la rejilla).
export const categoryCounts = resources.reduce((acc, r) => {
  acc[r.category] = (acc[r.category] || 0) + 1;
  return acc;
}, {});

// ---------- Rutas guiadas del Asistente ----------

export const guidedRoutes = [
  {
    id: 'diagnostico',
    title: 'Acabo de recibir el diagnóstico',
    subtitle: 'Primeros pasos esenciales',
    steps: [
      {
        title: 'Entiende el diagnóstico',
        body: 'Tómate tiempo para asimilarlo. El diagnóstico describe una forma de funcionar, no pone un límite. Pide al profesional que te explique el informe y anota tus dudas.',
      },
      {
        title: 'Solicita el certificado de discapacidad',
        body: 'Es la llave para acceder a ayudas, apoyos educativos y beneficios fiscales. Se solicita en los servicios sociales de tu comunidad autónoma.',
        ctaLabel: 'Ver cómo solicitarlo',
        ctaRouteId: 'certificado',
      },
      {
        title: 'Busca atención temprana',
        body: 'Cuanto antes empiece el acompañamiento, mejor. Infórmate del servicio público de atención temprana de tu zona, que suele ser gratuito para menores de 6 años.',
      },
      {
        title: 'Infórmate de tus derechos',
        body: 'Existen apoyos educativos, prestaciones y permisos laborales. Conocerlos te ahorra tiempo y dinero más adelante.',
        ctaLabel: 'Ver recursos legales',
        ctaRouteId: null,
      },
      {
        title: 'Conecta con otras familias',
        body: 'Nadie entiende mejor el proceso que quien lo ha vivido. Las asociaciones de familias ofrecen apoyo, información práctica y compañía.',
      },
    ],
  },
  {
    id: 'certificado',
    title: 'Solicitar el certificado de discapacidad',
    subtitle: 'Documentación y plazos',
    steps: [
      {
        title: 'Reúne la documentación',
        body: 'Necesitarás el DNI o NIE del menor, el libro de familia y los informes médicos y psicológicos que acrediten el diagnóstico.',
      },
      {
        title: 'Pide cita en servicios sociales',
        body: 'La solicitud se presenta en el órgano de valoración de tu comunidad autónoma. Puedes pedir cita online o por teléfono.',
      },
      {
        title: 'Acude a la valoración',
        body: 'Un equipo valorará el grado de discapacidad. Lleva todos los informes, originales y copias.',
      },
      {
        title: 'Recibe la resolución',
        body: 'Te llegará por correo. Si no estás de acuerdo con el grado reconocido, puedes presentar una reclamación en el plazo indicado.',
      },
    ],
  },
  {
    id: 'dependencia',
    title: 'Reconocimiento de dependencia',
    subtitle: 'Ayudas y prestaciones',
    steps: [
      {
        title: 'Comprueba si procede',
        body: 'El reconocimiento de dependencia es distinto del de discapacidad y da acceso a otras ayudas. Conviene revisar ambos.',
      },
      {
        title: 'Presenta la solicitud',
        body: 'Se tramita en los servicios sociales de tu comunidad autónoma, con los informes médicos correspondientes.',
      },
      {
        title: 'Valoración en domicilio',
        body: 'En muchos casos la valoración se hace en casa, observando la autonomía del menor en su entorno habitual.',
      },
      {
        title: 'Plan individual de atención',
        body: 'Si se reconoce la dependencia, se elabora un plan con los apoyos y prestaciones que corresponden.',
      },
    ],
  },
  {
    id: 'terapia',
    title: 'Buscar y elegir terapia',
    subtitle: 'Qué tener en cuenta',
    steps: [
      {
        title: 'Identifica las necesidades',
        body: 'Logopedia, terapia ocupacional, apoyo conductual… Cada niño es distinto. El informe de diagnóstico orienta por dónde empezar.',
      },
      {
        title: 'Busca experiencia en TEA',
        body: 'No toda terapia sirve igual. Busca formación específica y enfoques respetuosos con la persona.',
        ctaLabel: 'Ver terapias en Recursos',
        ctaRouteId: null,
      },
      {
        title: 'Pregunta por el enfoque',
        body: 'Desconfía de quien promete "curar". Una buena terapia acompaña, da herramientas y trabaja junto a la familia.',
      },
      {
        title: 'Valora coste y cobertura',
        body: 'Comprueba qué cubre la sanidad pública y tu mutua antes de decidir.',
      },
    ],
  },
  {
    id: 'escolarizacion',
    title: 'Escolarización: derechos y apoyos',
    subtitle: 'Centro y recursos',
    steps: [
      {
        title: 'Conoce los tipos de escolarización',
        body: 'Ordinaria con apoyos, aula especializada o centro de educación especial. La decisión se toma valorando cada caso.',
      },
      {
        title: 'Pide la evaluación psicopedagógica',
        body: 'El equipo de orientación valora las necesidades educativas del menor y propone los apoyos adecuados.',
      },
      {
        title: 'Solicita los apoyos en el centro',
        body: 'Existen figuras como el especialista en pedagogía terapéutica o el monitor de apoyo.',
      },
      {
        title: 'Mantén la comunicación con la escuela',
        body: 'Una relación fluida con el tutor y el equipo de orientación marca la diferencia en el día a día.',
      },
    ],
  },
];

export const faqs = [
  {
    q: '¿Qué es el grado de discapacidad y para qué sirve?',
    a: 'Es un reconocimiento oficial del nivel de discapacidad, expresado en porcentaje. A partir del 33% da acceso a ayudas, beneficios fiscales, apoyos educativos y prioridad en algunos servicios.',
  },
  {
    q: '¿Qué terapias cubre la sanidad pública para el TEA?',
    a: 'Varía según la comunidad autónoma. La atención temprana (0 a 6 años) suele ser pública y gratuita; a partir de esa edad la cobertura es más limitada y muchas familias combinan recursos públicos y privados.',
  },
];

// ---------- Gestiones: aseguradora, reembolsos, documentos ----------

// Aseguradora de la familia (nombre ficticio de muestra).
export const policy = {
  insurerName: 'Vitalia Salut',
  policyNumber: '4471-A',
  plan: 'Póliza familiar',
  phone: '+34 900 000 000',
};

// Estados de un reembolso, en orden.
export const REIMBURSEMENT_STATUSES = [
  { id: 'enviado', label: 'Enviado' },
  { id: 'en_revision', label: 'En revisión' },
  { id: 'pagado', label: 'Pagado' },
];

// Reembolsos de ejemplo (se guardan en el navegador y se pueden añadir nuevos).
export const seedReimbursements = [
  {
    id: 'rb1',
    concept: 'Logopedia',
    amount: 240,
    status: 'en_revision',
    submittedAt: '2026-06-12',
  },
  {
    id: 'rb2',
    concept: 'Terapia ocupacional',
    amount: 100,
    status: 'pagado',
    submittedAt: '2026-05-20',
  },
];

export const documents = [
  { id: 'd1', name: 'Informe de logopedia', type: 'Informe', date: '2026-06-01' },
  { id: 'd2', name: 'Factura · Centre Aprèn', type: 'Factura', date: '2026-06-10' },
  { id: 'd3', name: 'Certificado de discapacidad', type: 'Certificado', date: '2026-04-15' },
];

// Directorio de mutuas (datos de muestra) y su cobertura para terapias de TEA.
export const insurers = [
  { id: 'i1', name: 'Vitalia Salut', phone: '+34 900 000 000', coversTherapy: true, sessions: '20/año', note: 'Logopedia y terapia ocupacional incluidas.' },
  { id: 'i2', name: 'Asisa Plus', phone: '+34 900 111 111', coversTherapy: true, sessions: '12/año', note: 'Requiere autorización previa.' },
  { id: 'i3', name: 'Salut Activa', phone: '+34 900 222 222', coversTherapy: false, sessions: '—', note: 'No cubre terapias específicas de TEA.' },
];
