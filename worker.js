export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // Route root to index.html
    if (path === "/" || path === "") {
      return env.ASSETS.fetch(new Request(`${url.origin}/index.html`, request));
    }

    // Try fetching the exact request first (for CSS, JS, images, or direct .html files)
    let response = await env.ASSETS.fetch(request);
    
    // If it's a 404 and doesn't have a file extension, try adding .html
    if (response.status === 404 && !path.includes(".")) {
      const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
      const htmlRequest = new Request(`${url.origin}${cleanPath}.html${url.search}`, request);
      response = await env.ASSETS.fetch(htmlRequest);
    }

    return response;
  }
};
