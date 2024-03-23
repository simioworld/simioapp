import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
  {
    events: defineTable({
      title: v.string(),

      eventType: v.union(
        v.literal("Campeonato"),
        v.literal("Carrera"),
        v.literal("Entrenamiento"),
        v.literal("Reto"),
        v.literal("Resistencia")
      ),
      carCategory: v.union(
        v.literal("GT2"),
        v.literal("GT3"),
        v.literal("GT4"),
        v.literal("Porsche Cup"),
        v.literal("Otra")
      ),
      location: v.string(),
      simulator: v.union(
        v.literal("ACC"),
        v.literal("Assetto Corsa"),
        v.literal("Automobilista 2"),
        v.literal("GT7"),
        v.literal("iRacing"),
        v.literal("RaceRoom"),
        v.literal("rFactor 2")
      ),
      description: v.string(),
      startDate: v.optional(v.string()),
      startTime: v.optional(v.string()),
      duration: v.string(),
      slots: v.string(),
      price: v.optional(v.string()),
      community: v.string(),
      discordCommunity: v.string(),
      userId: v.string(),
      userName: v.string(),
    })
      .index("by_community", ["community"])
      .searchIndex("search_title", {
        searchField: "title",
        filterFields: ["community"],
      }),

    communities: defineTable({
      name: v.string(),
      description: v.optional(v.string()),
      admins: v.optional(v.string()),
      discordCommunity: v.string(),
    }),
    users: defineTable({
      clerkId: v.string(),
      email: v.string(),
      username: v.optional(v.string()),
      firstName: v.optional(v.string()),
      lastName: v.optional(v.string()),
      photo: v.optional(v.string()),
    })
      .index("by_clerkId", ["clerkId"])
      .index("by_email", ["email"]),
  },
  {
    schemaValidation: false,
  }
);
