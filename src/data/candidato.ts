/**
 * Fuente central de datos del candidato.
 * SOLID Single Responsibility: editar aqui actualiza todo el sitio.
 * @module data/candidato
 */

export interface CandidatoData {
  nombre: string;
  nombreCorto: string;
  cargo: string;
  cargoCompleto: string;
  distrito: string;
  ciudad: string;
  periodo: string;
  numeroLista: string;
  partido: string;
  telefono: string;
  whatsapp: string;
  redes: {
    facebook: string;
    tiktok: string;
  };
  ogImage: string;
  descripcionSEO: string;
}

export const candidato: CandidatoData = {
  nombre: "Misael Serna Villar",
  nombreCorto: "Misael Serna",
  cargo: "Candidato a Alcalde",
  cargoCompleto: "Candidato a Alcalde por Aucayacu 2027-2030",
  distrito: "Jose Crespo y Castillo",
  ciudad: "Aucayacu",
  periodo: "2027-2030",
  numeroLista: "7",
  partido: "Partido Democratico Somos Peru",
  telefono: "+51 935 449 430",
  whatsapp: "51935449430",
  redes: {
    facebook: "https://web.facebook.com/misael.sernavillar/?_rdc=1&_rdr",
    tiktok: "https://tiktok.com/@misael.serna",
  },
  ogImage: "/images/misael-serna.jpg",
  descripcionSEO: "Misael Serna Villar - Candidato a Alcalde por Aucayacu 2027-2030. Ingeniero en Recursos Naturales Renovables con Maestria en Gestion Publica al servicio del pueblo aucayaquino.",
};
