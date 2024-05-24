import { simulators } from "@/constants";
import * as z from "zod";

export const userSchema = z.object({
  clerkId: z.string(),
  email: z.string().email(),
  username: z.string().min(3).max(50),
  firstName: z.string().min(3).max(50).optional(),
  lastName: z.string().min(3).max(50).optional(),
  photo: z.string().optional(),
});
export const searchFormSchema = z.object({
  query: z.string(),
});

export const eventFormSchema = z.object({
  title: z.string().min(5).max(50),
  eventType: z.union([
    z.literal("Campeonato"),
    z.literal("Carrera"),
    z.literal("Reto"),
    z.literal("Resistencia"),
  ]),
  carCategory: z.union([
    z.literal("GT2"),
    z.literal("GT3"),
    z.literal("GT4"),
    z.literal("Porsche Cup"),
    z.literal("Otra"),
  ]),
  location: z.string().min(5).max(50),
  simulator: z.union([
    z.literal("Assetto Corsa Competizione"),
    z.literal("Assetto Corsa"),
    z.literal("Automobilista 2"),
    z.literal("Dirt Rally 2"),
    z.literal("F1 23"),
    z.literal("Gran Turismo 7"),
    z.literal("iRacing"),
    z.literal("RaceRoom"),
    z.literal("rFactor 2"),
  ]),
  description: z.string().min(20).max(500),
  startDate: z.string().min(3).max(50),
  startTime: z.string().min(3).max(50),
  duration: z.string().min(1).max(3),
  slots: z.string().min(1).max(50),
  price: z.optional(z.string().min(1)),
  communityName: z.string().min(2).max(50),
  discordCommunity: z.string(),
});
