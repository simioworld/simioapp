import { v } from "convex/values";
import { internalMutation, query } from "./_generated/server";

export const createUser = internalMutation({
  args: {
    email: v.string(),
    clerkId: v.string(),
    username: v.optional(v.string()),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    photo: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      email: args.email,
      clerkId: args.clerkId,
      username: args.username,
      firstName: args.firstName,
      lastName: args.lastName,
      photo: args.photo,
    });
  },
});
