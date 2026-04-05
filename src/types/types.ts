export interface bussinelogo {
  id: string,
  image: string,
  name: string,
  url: string,
}

export interface Servicio {
  id: string;
  icon: string;
  servicio: string;
  descripcion: string;
  beneficios: string[];
  enlaceName: string;
  enlace: string;
}

export interface LanguageSelectorProps {
  locales: string[];
}

export interface person {
  id: string;
  image: string;
  opinion: string;
  position: string;
  workers: string;
}
