export interface UserStructure {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
}

export interface CommunityStructure {
  discordCommunity?: string;
  web?: string;
  instagram?: string;
  twitter?: string;
  twitch?: string;
  facebook?: string;
  youtube?: string;
  name: string;
  description?: string;
  admins?: string;
  logo?: string;
  simulators?: string[];
}

export type CommunitySocialStructure = Omit<
  CommunityStructure,
  "logo" | "simulators" | "name" | "description" | "admins"
>;

export type CarCategories = "GT2" | "GT3" | "GT4" | "Porsche Cup" | "Otra";

export type EventTypes = "Campeonato" | "Carrera" | "Resistencia" | "Reto";

export type Simulators =
  | "ACC"
  | "Assetto Corsa"
  | "Automobilista 2"
  | "Dirt Rally 2"
  | "F1 23"
  | "Gran Turismo 7"
  | "iRacing"
  | "RaceRoom"
  | "rFactor 2"
  | "Otro";
