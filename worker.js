export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // 1. Root route -> /index.html
    if (pathname === "/" || pathname === "") {
      pathname = "/index.html";
    } 
    // 2. Clean subpages without extensions (e.g. /repform -> /repform.html)
    else if (!pathname.includes(".")) {
      if (pathname.endsWith("/")) {
        pathname = pathname.slice(0, -1);
      }
      pathname = `${pathname}.html`;
    }

    // Construct a clean single-use target URL preserving query parameters
    const targetUrl = new URL(`${pathname}${url.search}`, request.url);

    try {
      return await env.ASSETS.fetch(targetUrl);
    } catch (err) {
      // Fallback just in case target asset isn't found
      return env.ASSETS.fetch(request);
    }
  }
};
