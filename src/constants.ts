import { Montserrat, Staatliches } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
});
export const eventDefaultValues = {
  title: "Pachanga con amigos",
  eventType: "Carrera",
  carCategory: "GT2",
  location: "Barcelona",
  simulator: "Assetto Corsa Competizione",
  startDate: "01/01/2028",
  startTime: "12:00",
  duration: "60",
  description: "",
  slots: "20",
  price: "0",
  communityName: "Simracers",
  discordCommunity: "discord.to/Simracers",
} as const;

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

export const simulators = [
  "Assetto Corsa Competizione",
  "Assetto Corsa",
  "Automobilista 2",
  "Dirt Rally 2",
  "F1 23",
  "Gran Turismo 7",
  "iRacing",
  "RaceRoom",
  "rFactor 2",
];

export const carCategory = ["GT2", "GT3", "GT4", "Porsche Cup", "Otra"];

export const eventsNavLinks = [
  {
    label: "championships",
    path: "/dashboard/events/championships",
    title: "campeonatos",
  },
  {
    label: "races",
    path: "/dashboard/events/races",
    title: "carreras",
  },
  {
    label: "challenges",
    path: "/dashboard/events/challenges",
    title: "retos",
  },
  {
    label: "endurances",
    path: "/dashboard/events/endurances",
    title: "resistencias",
  },
];

export const communitiesNavLinks = [
  {
    label: "championships",
    path: "/dashboard/events/championships",
    title: "campeonatos",
  },
  {
    label: "races",
    path: "/dashboard/events/races",
    title: "carreras",
  },
  {
    label: "challenges",
    path: "/dashboard/events/challenges",
    title: "retos",
  },
  {
    label: "endurances",
    path: "/dashboard/events/endurances",
    title: "resistencias",
  },
];

export const dashboardNavLinks = [
  {
    label: "events",
    path: "/dashboard/events",
    title: "Eventos",
    sublinks: ["carreras", "campeonatos", "resistencias", "retos"],
  },
  {
    label: "communities",
    path: "/dashboard/communities",
    title: "Comunidades",
    sublinks: ["foro", "buscador", "anuncia"],
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

export const imageBackgroundStyle = {
  objectFit: "cover",
  objectPosition: "bottom",
} as React.CSSProperties;

export const imageBackgroundSize =
  "(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw" as string;
