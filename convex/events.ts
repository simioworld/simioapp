import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import {
  carCategoryUnionValues,
  eventTypeUnionValues,
  simulatorUnionValues,
} from "./constants";

export const createEvent = mutation({
  args: {
    title: v.string(),
    eventType: eventTypeUnionValues,
    carCategory: carCategoryUnionValues,
    location: v.string(),
    simulator: simulatorUnionValues,
    description: v.string(),
    startDate: v.optional(v.string()),
    startTime: v.optional(v.string()),
    duration: v.string(),
    slots: v.string(),
    price: v.optional(v.string()),
    communityName: v.string(),
    communityId: v.id("communities"),
    discordCommunity: v.string(),
    authorId: v.id("users"),
    userName: v.string(),
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
      communityName: arg.communityName,
      communityId: arg.communityId,
      discordCommunity: arg.discordCommunity,
      authorId: arg.authorId,
      userName: identity.nickname!,
    });
    return newEvent;
  },
});

const itemsPerPage = 4;

export const getEvents = query({
  args: {
    query: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")

      .collect();
    return events;
  },
});

export const getTotalPages = query({
  args: {
    query: v.optional(v.string()),
    itemsPerPage: v.number(),
  },
  handler: async (ctx, args) => {
    const events = await ctx.db.query("events").collect();
    const totalPages = Math.ceil(events.length / itemsPerPage);
    return totalPages;
  },
});

export const getEventsForCarousel = query({
  handler: async (ctx) => {
    const eventsForCarousel = await ctx.db.query("events").take(6);
    return eventsForCarousel;
  },
});

export const getTwoEvents = query({
  handler: async (ctx) => {
    const events = await ctx.db.query("events").take(2);
    return events;
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

export const getTypeEvents = query({
  args: { eventType: v.string() },
  handler: async (ctx, args) => {
    const events = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("eventType"), args.eventType))
      .collect();
    return events;
  },
});
