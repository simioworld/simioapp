import { v } from "convex/values";

export const simulatorValues = v.union(
  v.literal("Assetto Corsa Competizione"),
  v.literal("Assetto Corsa"),
  v.literal("Automobilista 2"),
  v.literal("Dirt Rally 2"),
  v.literal("F1 23"),
  v.literal("Gran Turismo 7"),
  v.literal("iRacing"),
  v.literal("RaceRoom"),
  v.literal("rFactor 2")
);

export const carCategoryValues = v.union(
  v.literal("GT2"),
  v.literal("GT3"),
  v.literal("GT4"),
  v.literal("Porsche Cup"),
  v.literal("Otra")
);

export const eventTypeValues = v.union(
  v.literal("Campeonato"),
  v.literal("Carrera"),
  v.literal("Reto"),
  v.literal("Resistencia")
);

export const web = v.optional(v.string());
export const discord = v.string();
export const twitter = v.optional(v.string());
export const twitch = v.optional(v.string());
export const youtube = v.optional(v.string());
export const instagram = v.optional(v.string());
export const facebook = v.optional(v.string());

export const social = v.object({
  web,
  discord,
  twitter,
  twitch,
  youtube,
  instagram,
  facebook,
});
