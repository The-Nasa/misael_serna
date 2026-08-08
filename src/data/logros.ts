/**
 * Logros del candidato como Regidor Distrital 2015-2018.
 * SOLID Single Responsibility: separado de la vista.
 */

export interface Logro {
  numero: string;
  titulo: string;
  descripcion: string;
}

export const logros: Logro[] = [
  {
    numero: "01",
    titulo: "Proyecto de Cacao - Margen Izquierda",
    descripcion: "Impulse la elaboracion del proyecto de cacao para la Margen Izquierda de Aucayacu con una inversion de alrededor de 5 millones de soles, logrando el financiamiento gracias al apoyo de las autoridades, dirigentes comunales y medios de comunicacion.",
  },
  {
    numero: "02",
    titulo: "Apoyo Directo de Foncodes",
    descripcion: "Logre priorizar el apoyo directo de Foncodes con una inversion de mas de 3 millones, beneficiando a 400 familias de la margen izquierda de Aucayacu con cocinas mejoradas, crianza de animales menores, cultivos temporales y hortalizas.",
  },
  {
    numero: "03",
    titulo: "Proyecto de Bambu",
    descripcion: "Logre concretar el financiamiento del proyecto de Bambu con una inversion de 3.5 millones, para la proteccion de las riberas del rio Aucayacu y apoyo a los agricultores interesados en la plantacion del bambu.",
  },
  {
    numero: "04",
    titulo: "Proyecto de Cacao - Margen Derecha",
    descripcion: "Impulse la elaboracion del perfil y el expediente tecnico del proyecto cacao para la margen derecha de Aucayacu en cooperacion con Agrorural, entidad que a la fecha ejecuta el proyecto con una inversion aproximada de 17 millones de soles en Jose Crespo y Castillo, Pueblo Nuevo, Santo Domingo de Anda y Pucayacu.",
  },
  {
    numero: "05",
    titulo: "Escuelas de Liderazgo y Deporte",
    descripcion: "Desarrolle escuelas de liderazgo y formacion para adolescentes y jovenes, apoye al deporte en la zona rural de la margen izquierda de Aucayacu, y trabaje en estrecha coordinacion con las autoridades de las juntas vecinales y caserios del distrito.",
  },
];
