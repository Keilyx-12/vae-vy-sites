export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // If requesting the root path, serve index.html directly
    if (url.pathname === "/" || url.pathname === "") {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }

    return env.ASSETS.fetch(request);
  }
};
