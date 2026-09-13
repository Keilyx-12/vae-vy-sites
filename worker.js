export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let pathname = url.pathname;

    // Set target subfolder name here (e.g. '1')
    const FOLDER = "1";

    // Clean trailing slash
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    // 1. Root route -> /1/index.html
    if (pathname === "/" || pathname === "") {
      pathname = `/${FOLDER}/index.html`;
    } 
    // 2. Subpage without file extension (e.g. /repform -> /1/repform.html)
    else if (!pathname.includes(".")) {
      pathname = `/${FOLDER}${pathname}.html`;
    } 
    // 3. Static assets with extensions (e.g. /style.css -> /1/style.css)
    else if (!pathname.startsWith(`/${FOLDER}/`)) {
      pathname = `/${FOLDER}${pathname}`;
    }

    // Construct final asset URL keeping original query parameters
    const targetUrl = new URL(`${pathname}${url.search}`, request.url);

    try {
      return await env.ASSETS.fetch(targetUrl);
    } catch (err) {
      return new Response("Page or asset not found", { status: 404 });
    }
  }
};
