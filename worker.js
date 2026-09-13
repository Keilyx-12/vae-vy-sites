export default {
  async fetch(request, env, ctx) {
    try {
      if (env.ASSETS) {
        return await env.ASSETS.fetch(request);
      }
      return new Response("Assets binding not configured.", { status: 500 });
    } catch (err) {
      return new Response(`Worker Error: ${err.message}`, { status: 500 });
    }
  }
};
