import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();
const handleClerkWebhook = httpAction(async (ctx, request) => {
  const payloadString = await request.text();
  const headerPayload = request.headers;

  try {
    const result = await ctx.runAction(internal.clerk.fulfill, {
      headers: {
        "svix-id": headerPayload.get("svix-id"),
        "svix-signature": headerPayload.get("svix-signature"),
        "svix-timestamp": headerPayload.get("svix-timestamp"),
      },
      payload: payloadString,
    });

    switch (result.type) {
      case "user.created":
        await ctx.runMutation(internal.users.createUser, {
          email: result.data.email_addresses[0]?.email_address,
          clerkId: result.data.id,
          username: result.data.username ?? undefined,
          firstName: result.data.first_name ?? undefined,
          lastName: result.data.last_name ?? undefined,
          photo: result.data.image_url ?? undefined,
        });
    }

    return new Response("User created", { status: 200 });
  } catch (error) {
    return new Response("Webhook Error", { status: 400 });
  }
});

http.route({
  path: "/clerk",
  method: "POST",
  handler: handleClerkWebhook,
});

export default http;
