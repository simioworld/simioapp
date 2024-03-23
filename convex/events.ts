import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const createEvent = mutation({
  args: {
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
  },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Usuario no autorizado");
    }
    console.log(identity.name);

    const newEvent = await ctx.db.insert("events", {
      title: arg.title,
      eventType: arg.eventType,
      carCategory: arg.carCategory,
      location: arg.location,
      simulator: arg.simulator,
      description: arg.description,
      startDate: arg.startDate,
      startTime: arg.startTime,
      duration: arg.duration,
      slots: arg.slots,
      price: arg.price,
      community: arg.community,
      discordCommunity: arg.discordCommunity,
      userId: identity.subject,
      userName: identity.nickname!,
    });
    return newEvent;
  },
});

// Return the last 100 tasks in a given task list.
export const getEvents = query({
  args: {},
  handler: async (ctx) => {
    const events = await ctx.db.query("events").order("asc").take(100);
    return events;
  },
});

export const getEventsForCarousel = query({
  handler: async (ctx) => {
    const eventsForCarousel = await ctx.db.query("events").take(6);
    return eventsForCarousel;
  },
});

export const getEvent = query({
  args: { eventId: v.id("events") },
  handler: async (ctx, { eventId }) => {
    const event = await ctx.db.get(eventId);
    if (!event) {
      return null;
    }
    return event;
  },
});
