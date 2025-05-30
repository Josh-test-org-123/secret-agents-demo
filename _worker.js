export default {
  async fetch(request, env, ctx) {
    // You can add custom logic here, like modifying headers,
    // or handling different routes.
    return env.ASSETS.fetch(request);
  }
};