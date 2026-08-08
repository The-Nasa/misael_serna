/**
 * Propuestas del candidato organizadas por dimension.
 * SOLID Single Responsibility: separado de la vista.
 */

export interface Eje {
  titulo: string;
  icono: string;
  propuestas: string[];
}

export const ejes: Eje[] = [
  {
    titulo: "Dimensión Social",
    icono: `<svg class="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>`,
    propuestas: [
      "Gestionaremos la construcción del Hospital de Nivel II para Aucayacu, en coordinación con el Gobierno Regional.",
      "Mejoraremos la infraestructura educativa y el acceso a internet; fortaleceremos el CETPRO y el Instituto Pedagógico.",
      "Gestionaremos el proyecto de agua potable y alcantarillado de Aucayacu y de las comunidades rurales.",
      "Mejoraremos el estadio municipal, promoveremos escuelas deportivas y culturales para niños y jóvenes.",
      "Crearemos la Academia Preuniversitaria para brindar oportunidades a los jóvenes.",
      "Fortaleceremos las competencias pedagógicas de nuestros docentes.",
      "Implementaremos un Consultorio Médico con atención prioritaria para adultos mayores, personas con discapacidad y pacientes vulnerables.",
      "Crearemos el Servicio de Desarrollo Productivo y Capacitación para promover emprendimientos y brindar atención integral a las personas más vulnerables."
    ]
  },
  {
    titulo: "Dimensión Económica",
    icono: `<svg class="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>`,
    propuestas: [
      "Adquiriremos maquinaria pesada para mantener en buen estado las carreteras, caminos vecinales y calles del distrito.",
      "Promoveremos la instalación del cultivo de palma aceitera. Brindaremos asistencia técnica en la producción y comercialización de cacao, café, arroz, plátano, piscicultura y otros.",
      "Mejoraremos los accesos y servicios turísticos, fortaleceremos la formalización de las agencias de turismo y capacitaremos a los operadores turísticos.",
      "Mejoraremos el Mercado Central, el Mercado San Juan y gestionaremos la construcción del Terminal Terrestre.",
      "Construiremos y mejoraremos pistas, veredas, puentes y pontones para una mejor transitabilidad."
    ]
  },
  {
    titulo: "Dimensión Ambiental",
    icono: `<svg class="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`,
    propuestas: [
      "Implementaremos el Plan Distrital de Reforestación y protegeremos nuestros bosques y la biodiversidad.",
      "Adquiriremos terrenos para un relleno sanitario y un cementerio municipal, reubicaremos el camal municipal y recuperaremos parques, jardines y espacios públicos."
    ]
  },
  {
    titulo: "Dimensión Institucional",
    icono: `<svg class="w-8 h-8 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>`,
    propuestas: [
      "Elaboraremos el Plan de Desarrollo Urbano e impulsaremos el saneamiento físico-legal de los predios en convenio con SUNARP.",
      "Instalaremos cámaras de videovigilancia, fortaleceremos las JUVESC y Rondas Vecinales, y mejoraremos la señalización y los semáforos para un distrito más seguro y ordenado.",
      "Implementaremos el Programa de Canje de Deudas Tributarias mediante bienes y servicios para mejorar nuestro distrito.",
      "Gestionaremos proyectos de defensa ribereña, descolmatación y drenaje pluvial para proteger a las familias frente a inundaciones.",
      "Impulsaremos una municipalidad transparente, moderna y con trámites digitales al servicio del ciudadano."
    ]
  }
];
