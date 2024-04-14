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
    authorId: v.string(),
    userName: v.string(),
  },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Usuario no autorizado");
    }

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
      authorId: identity.subject,
      userName: identity.nickname!,
    });
    return newEvent;
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

export const favorite = mutation({
  args: {
    id: v.id("events"),
  },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("User not authorized");
    }

    const event = await ctx.db.get(arg.id);

    if (!event) {
      throw new Error("Event not found");
    }

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", event._id)
      )
      .unique();

    if (existingFavorite) {
      throw new Error("Event already favorited");
    }

    await ctx.db.insert("userFavorites", {
      userId,
      eventId: event._id,
    });

    return event;
  },
});

export const unfavorite = mutation({
  args: { id: v.id("events") },
  handler: async (ctx, arg) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("User not authorized");
    }
    const event = await ctx.db.get(arg.id);

    if (!event) {
      throw new Error("Event not found");
    }

    const userId = identity.subject;

    const existingFavorite = await ctx.db
      .query("userFavorites")
      .withIndex("by_user_event", (q) =>
        q.eq("userId", userId).eq("eventId", event._id)
      )
      .unique();

    if (!existingFavorite) {
      throw new Error("Favorited event not found");
    }

    await ctx.db.delete(existingFavorite._id);

    return event;
  },
});
