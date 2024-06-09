import { ConvexError, v } from "convex/values";
import { query } from "./_generated/server";

export const getCommunity = query({
  args: {
    communityId: v.id("communities"),
  },
  handler: async (ctx, args) => {
    const community = await ctx.db.get(args.communityId);

    if (!community) {
      throw new ConvexError("Community not found");
    }

    return community;
  },
});

export const getCommunityId = query({
  args: {
    communityName: v.string(),
  },
  handler: async (ctx, args) => {
    const community = await ctx.db
      .query("communities")
      .filter((q) => q.eq(q.field("name"), args.communityName))
      .unique();
    if (!community) {
      throw new ConvexError("Community not found");
    }
    return community._id;
  },
});

export const getCommunityEvents = query({
  args: {
    communityId: v.id("communities"),
  },
  handler: async (ctx, args) => {
    const community = await ctx.db.get(args.communityId);
    if (!community) {
      throw new ConvexError("Community not found");
    }

    const events = await ctx.db
      .query("events")
      .filter((q) => q.eq(q.field("communityId"), community._id))
      .collect();

    return events;
  },
});
