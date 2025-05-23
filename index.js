export default {
  async fetch(request, env, ctx) {
    try {
      // ASSETS binding will be configured in wrangler.jsonc
      return await env.ASSETS.fetch(request);
    } catch (e) {
      let pathname = new URL(request.url).pathname;
      return new Response(`"${pathname}" not found`, {
        status: 404,
        statusText: "not found",
      });
    }
  },
};