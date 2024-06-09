import { Id } from "../convex/_generated/dataModel";

export interface UserStructure {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
}

export interface EventStructure {
  _id: Id<"events">;
  title: string;
  eventType: EventTypes;
  carCategory: CarCategories;
  location: string;
  simulator: Simulators;
  description: string;
  startDate: string;
  startTime: string;
  duration: string;
  slots: string;
  price?: string;
  communityName: string;
  communityId: string;
  discordCommunity: string;
  authorId: Id<"users">;
  userName: string;
}

export interface CommunityStructure {
  discordCommunity?: string;
  social: CommunitySocialStructure;
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

export type CommunitySocialStructure = {
  discord: string;
  web?: string;
  instagram?: string;
  twitter?: string;
  twitch?: string;
  facebook?: string;
  youtube?: string;
};

export type CarCategories = "GT2" | "GT3" | "GT4" | "Porsche Cup" | "Otra";

export type EventTypes = "Campeonato" | "Carrera" | "Resistencia" | "Reto";

export type Simulators =
  | "Assetto Corsa Competizione"
  | "Assetto Corsa"
  | "Automobilista 2"
  | "Dirt Rally 2"
  | "F1 23"
  | "Gran Turismo 7"
  | "iRacing"
  | "RaceRoom"
  | "rFactor 2"
  | "Otro";
