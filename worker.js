export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Serve root index.html
    if (path === "/" || path === "") {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }

    // 2. Try fetching the raw request (for images, CSS, JS, or direct .html)
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }

    // 3. Clean trailing slashes & append .html for clean routes (e.g. /repform -> /repform.html)
    if (!path.includes(".")) {
      const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
      const htmlUrl = new URL(`${cleanPath}.html${url.search}`, request.url);
      return env.ASSETS.fetch(htmlUrl);
    }

    return response;
  }
};
