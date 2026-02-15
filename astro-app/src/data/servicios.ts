export interface Servicio {
  slug: string;
  icono: string;
  titulo: string;
  resumen: string;
  descripcion: string;
  detalles: string[];
  para_quien: string;
}

export const servicios: Servicio[] = [
  {
    slug: "conversatorios-literarios",
    icono: "🎤",
    titulo: "Organización de conversatorios literarios",
    resumen: "Creamos y gestionamos espacios de encuentro en torno a la literatura, fortaleciendo la unión comunitaria y acercando a las autorías a sus lectoras y lectores.",
    descripcion: "Creamos y gestionamos espacios de encuentro en torno a la literatura, con el objetivo de fortalecer la unión comunitaria y acercar a las autorías a sus lectoras y lectores. Nos encargamos de la coordinación con el lugar del evento, la selección y contacto con las autorías participantes, el diseño del afiche, la difusión, y la gestión de una pequeña coffee station para acompañar la jornada. En algunos casos, cuando el espacio lo requiere, se establece un valor de entrada, siempre procurando que sea lo más accesible posible para quienes sueñan con conocer y dialogar con sus autoras y autores favoritos.",
    detalles: [
      "Coordinación con el lugar del evento",
      "Selección y contacto con autorías participantes",
      "Diseño de afiche y material gráfico",
      "Difusión en redes sociales y medios",
      "Gestión de coffee station",
      "Si eres autor o autora y te interesa participar como panelista, escríbenos"
    ],
    para_quien: "Autorías que desean participar como panelistas, comunidades lectoras, bibliotecas, centros culturales y espacios que quieran albergar encuentros literarios."
  },
  {
    slug: "talleres-escritura",
    icono: "📝",
    titulo: "Talleres de escritura y formación literaria",
    resumen: "Diseñamos talleres formativos que acompañan el recorrido de la escritura, desde las primeras ideas hasta la circulación del libro.",
    descripcion: "Sabemos que en Chile el proceso de escritura y publicación suele vivirse de forma solitaria y, muchas veces, confusa. Por eso, diseñamos talleres formativos que buscan acompañar ese recorrido, desde las primeras ideas hasta la circulación del libro. ¿Cómo empezar a escribir? ¿Qué hacer con un texto terminado? ¿Autopublicar o publicar con editorial? ¿Cómo presentar un libro y encontrar lectores? Estas son algunas de las preguntas que abordamos en nuestras propuestas, pensadas para fortalecer la creación y comprender el escenario literario regional desde una mirada práctica, colectiva y situada.",
    detalles: [
      "Talleres de escritura creativa (narrativa, poesía, no ficción)",
      "Formación sobre el proceso de publicación",
      "Autopublicación vs. publicación con editorial",
      "Estrategias para presentar un libro y encontrar lectores",
      "Mirada práctica, colectiva y situada",
      "Modalidad presencial y online"
    ],
    para_quien: "Personas de todas las edades y niveles que deseen explorar la escritura, comprender el escenario literario regional o profesionalizar su trabajo como autores."
  },
  {
    slug: "lanzamientos-libros",
    icono: "�",
    titulo: "Organización de lanzamientos de libros",
    resumen: "Servicio integral de organización de lanzamientos en distintos puntos de la Región de Valparaíso.",
    descripcion: "Lanzar un libro implica una serie de gestiones que pueden resultar demandantes: encontrar un espacio, coordinar fechas, diseñar material gráfico, difundir el evento y pensar estrategias de promoción. Para acompañarte en ese proceso, ofrecemos un servicio pagado de organización integral de lanzamientos. Trabajamos en distintos puntos de la Región de Valparaíso, cuidando cada detalle para que tu libro tenga una inauguración a la altura del aporte que realiza a la literatura chilena y a su comunidad lectora.",
    detalles: [
      "Búsqueda y gestión de espacios para el lanzamiento",
      "Coordinación de fechas y logística",
      "Diseño de material gráfico y afiche",
      "Difusión del evento en redes y medios",
      "Estrategias de promoción del libro",
      "Cobertura en distintos puntos de la Región de Valparaíso"
    ],
    para_quien: "Autores y autoras que desean lanzar su libro con una organización profesional e integral, en cualquier punto de la Región de Valparaíso."
  },
  {
    slug: "orientacion-acompanamiento",
    icono: "🤝",
    titulo: "Orientación y acompañamiento",
    resumen: "Respondemos de manera gratuita las preguntas que puedan surgir en tu camino literario, desde la primera letra hasta el primer encuentro con un lector.",
    descripcion: "Desde la primera letra en la página en blanco hasta el primer encuentro con un lector o lectora, el camino literario está lleno de dudas. Por eso, en PROSAL respondemos de manera gratuita las preguntas que puedan surgir en este proceso. Puedes contactarnos a través de Instagram, correo electrónico o en cualquiera de nuestros eventos. Haremos lo posible por entregarte una orientación clara, concreta y útil. Creemos que la cultura se construye conversando. Si tienes una idea, un proyecto o una inquietud vinculada a la literatura, no dudes en escribirnos. En PROSAL estamos siempre abiertas y abiertos a imaginar nuevas formas de encuentro en torno a los libros y las palabras.",
    detalles: [
      "Orientación gratuita sobre el proceso de escritura",
      "Asesoría sobre publicación y autopublicación",
      "Consultas sobre el escenario literario chileno",
      "Contacto vía Instagram, correo o en eventos",
      "Acompañamiento de ideas y proyectos literarios",
      "Siempre abiertos a nuevas formas de encuentro"
    ],
    para_quien: "Cualquier persona con una idea, un proyecto o una inquietud vinculada a la literatura. No importa en qué etapa del camino te encuentres."
  }
];
