import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import {
  carCategoryValues,
  eventTypeValues,
  simulatorValues,
  social,
} from "./constants";

export default defineSchema(
  {
    events: defineTable({
      _id: v.id("events"),
      title: v.string(),
      eventType: eventTypeValues,
      carCategory: carCategoryValues,
      location: v.string(),
      simulator: simulatorValues,
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
    })
      .index("by_eventType", ["eventType"])
      .index("by_simulator", ["simulator"])
      .index("by_communityId", ["communityId"]),

    communities: defineTable({
      name: v.string(),
      description: v.optional(v.string()),
      admins: v.optional(v.string()),
      discordCommunity: v.string(),
      logo: v.optional(v.string()),
      social: social,
      web: v.optional(v.string()),
      twitch: v.optional(v.string()),
      twitter: v.optional(v.string()),
      youtube: v.optional(v.string()),
      instagram: v.optional(v.string()),
      facebook: v.optional(v.string()),
      simulators: v.optional(v.array(v.string())),
    }).index("by_communityName", ["name"]),
    communityEvents: defineTable({
      communityId: v.id("communities"),
      eventId: v.id("events"),
    }).index("by_community_event", ["communityId", "eventId"]),

    users: defineTable({
      _id: v.id("users"),
      clerkId: v.string(),
      email: v.string(),
      username: v.optional(v.string()),
      firstName: v.optional(v.string()),
      lastName: v.optional(v.string()),
      photo: v.optional(v.string()),
    })
      .index("by_clerkId", ["clerkId"])
      .index("by_email", ["email"]),
    userFavorites: defineTable({
      userId: v.id("users"),
      eventId: v.id("events"),
    })
      .index("by_event", ["eventId"])
      .index("by_user_event", ["userId", "eventId"]),
  },

  {
    schemaValidation: false,
  }
);
