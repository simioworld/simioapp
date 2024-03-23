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
