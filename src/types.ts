export interface FormDataStructure {
  title: string;
  eventType: "Campeonato" | "Carrera" | "Entrenamiento";
  createdBy: Pick<UserStructure, "clerkId">;

  carCategory: string;
  slots: string;
  isFree: boolean;
  date: string;
  description: string;
  location: string;
  simulator: string /*
  createdAt: string; */;
}

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
