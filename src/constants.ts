import { Montserrat, Staatliches } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-staatliches",
  display: "swap",
});

export const eventDefaultValues = {
  title: "",
  eventType: "",
  carCategory: "",
  slots: "",
  isFree: true,
  price: "",
  date: "",
  description: "",
  location: "",
  simulator: "",
  createdAt: new Date(),
};

export const headerNavItems = [
  {
    label: "Inicio",
    path: "/",
  },
  {
    label: "Eventos",
    path: "/events",
  },
  {
    label: "Crear",
    path: "/events/create-event",
  },
];

export const months: { [key: number]: string } = {
  1: "Enero",
  2: "Febrero",
  3: "Marzo",
  4: "Abril",
  5: "Mayo",
  6: "Junio",
  7: "Julio",
  8: "Agosto",
  9: "Septiembre",
  10: "Octubre",
  11: "Noviembre",
  12: "Diciembre",
};

export const eventsNavLinks = [
  {
    label: "championships",
    path: "/dashboard/championships",
    title: "campeonatos",
  },
  {
    label: "races",
    path: "/dashboard/races",
    title: "carreras",
  },
  {
    label: "challenges",
    path: "/dashboard/challenges",
    title: "retos",
  },
  {
    label: "endurances",
    path: "/dashboard/endurances",
    title: "resistencias",
  },
];
export const dashboardNavLinks = [
  {
    label: "communities",
    path: "/dashboard/communities",
    title: "Comunidades",
    sublinks: ["foro", "buscador", "publicita"],
  },
  {
    label: "recomendator",
    path: "/dashboard/recomendator",
    title: "Recomendador",
    sublinks: ["hardware", "trucos", "setups"],
  },
  {
    label: "box",
    path: "/dashboard/box",
    title: "Box",
    sublinks: ["perfil", "mis eventos", "notificaciones"],
  },
  {
    label: "social",
    path: "/dashboard/social",
    title: "Social",
    sublinks: [""],
    subtitle: "¿Buscas equipo, piloto, rival?",
  },
];
