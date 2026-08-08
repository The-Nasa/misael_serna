/**
 * Datos de los regidores candidatos.
 * SOLID Single Responsibility: separado de la vista.
 */

export interface Regidor {
  nombre: string;
  cargo: string;
  foto: string;
  numero: string;
  descripcion: string[];
  resumen: string;
}

export const regidores: Regidor[] = [
  {
    nombre: "Herlin Grandez Panduro",
    cargo: "Regidor 1",
    foto: "/images/regidores/01_HERLIN_GRANDEZ_PANDURA.png",
    numero: "1",
    descripcion: [],
    resumen: "Profesor de Educacion Secundaria, Especialidad en Ciencias Naturales del Instituto Superior Pedagogico Jose Crespo y Castillo de Aucayacu. Bachiller en Ciencias de la Educacion de la Universidad Nacional Hermilio Valdizan.\n\nMaestro en Educacion con mencion en Gestion y Planeamiento Educativo. Especialista en Gestion Escolar con Liderazgo Pedagogico.\n\nActualmente se desempena como Subdirector de la I.E. Hans Victor Langemack. Su experiencia en formacion, gestion educativa y liderazgo lo convierten en un profesional comprometido con el desarrollo de la juventud y el fortalecimiento de la educacion en nuestro distrito."
  },
  {
    nombre: "Jesusa Paty Ramos Yucra",
    cargo: "Regidora 2",
    foto: "/images/regidores/02_PATY_RAMOS_YUCRA.png",
    numero: "2",
    descripcion: [],
    resumen: "Bachiller en Derecho y Ciencias Politicas de la Universidad de Huanuco. Abogada de la Universidad Nacional Hermilio Valdizan. Actualmente cursa estudios de especializacion en Gestion Publica para el Desarrollo Social.\n\nActualmente se desempeña como Subgerente de Promocion de Derechos de Poblaciones Vulnerables en la Municipalidad Provincial de Leoncio Prado. Jefa de DEMUNA, OMAPED y CIAM en la Municipalidad Distrital de Jose Crespo y Castillo. Procuradora adjunta de la Procuraduria Municipal.\n\nAbogada con amplia experiencia en la administracion publica municipal y en la defensa de los derechos de la poblacion mas vulnerable. Su trayectoria refleja vocacion de servicio, capacidad de gestion y compromiso con las familias de Aucayacu."
  },
  {
    nombre: "Abudenio Durand Lazaro",
    cargo: "Regidor 3",
    foto: "/images/regidores/03_ABUDENIO_DURAND_LAZARO.png",
    numero: "3",
    descripcion: [],
    resumen: "Agricultor de toda la vida y hombre de trabajo.\nCon mas de 35 anos dedicado a la agricultura en Alto Sangapilla, conoce de cerca las necesidades del campo, de los productores y de las familias rurales.\nRepresenta la voz del agricultor y el compromiso por impulsar el desarrollo agropecuario del distrito."
  },
  {
    nombre: "Maria Edith Saavedra de Catpo",
    cargo: "Regidora 4",
    foto: "/images/regidores/04_MARÍA_SAAVEDRA_DE_CATPO.png",
    numero: "4",
    descripcion: [],
    resumen: "Emprendedora aucayaquina con mas de tres decadas de experiencia.\nPropietaria del salon de belleza Mary Fashion, ha contribuido al desarrollo economico local mediante el emprendimiento.\nSu experiencia representa el esfuerzo diario de cientos de mujeres trabajadoras del distrito."
  },
  {
    nombre: "Ing. Franchescoly Rimachi Leguia",
    cargo: "Regidor 5",
    foto: "/images/regidores/05_FRANCHESCOLY_RIMACHI_LEGUIA.png",
    numero: "5",
    descripcion: [],
    resumen: "Es Bachiller en Ciencias en Conservacion Suelos y Agua de la Universidad Nacional Agraria de la Selva.\nJoven profesional comprometido con el desarrollo de Aucayacu.\nRepresenta la nueva generacion de profesionales que apuesta por una gestion moderna, eficiente y cercana a la poblacion."
  },
  {
    nombre: "Abog. Jessenia Alely Robledo Merino",
    cargo: "Regidora 6",
    foto: "/images/regidores/06_JESSENIA_ROBLEDO_MERINO.png",
    numero: "6",
    descripcion: [],
    resumen: "Abogada de la Universidad Cientifica del Sur S.A.C.\nHa laborado como Asistente Juridico en la Municipalidad Distrital de Jose Crespo y Castillo, adquiriendo experiencia en gestion municipal y asesoria legal.\nJoven comprometida con el servicio publico.\nRepresenta una nueva generacion de profesionales preparados para fortalecer una gestion transparente y eficiente."
  }
];
