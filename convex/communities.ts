import { v } from "convex/values";
import { query } from "./_generated/server";

export const getCommunities = query({
  args: {
    query: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const communities = await ctx.db.query("communities").collect();
    return communities;
  },
});
