export default {
  async fetch(request, env, ctx) {
    // You can add custom logic here before fetching assets
    // For example, routing, authentication, etc.
    return env.ASSETS.fetch(request);
  },
};