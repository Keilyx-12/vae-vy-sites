export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    let path = url.pathname;

    // 1. Root path loads index.html
    if (path === "/" || path === "") {
      return env.ASSETS.fetch(new URL("/index.html", request.url));
    }

    // 2. Try fetching the exact URL first (works for assets, images, CSS, or actual sub-folders)
    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404) {
      return response;
    }

    // 3. If missing and no extension, try appending .html (e.g. /repforms -> /repforms.html)
    if (!path.includes(".")) {
      const cleanPath = path.endsWith("/") ? path.slice(0, -1) : path;
      const htmlUrl = new URL(`${cleanPath}.html${url.search}`, request.url);
      
      let htmlResponse = await env.ASSETS.fetch(htmlUrl);
      if (htmlResponse.status !== 404) {
        return htmlResponse;
      }

      // 4. Try checking if it's a folder with an index.html (e.g. /artisan -> /artisan/index.html)
      const folderUrl = new URL(`${cleanPath}/index.html${url.search}`, request.url);
      return env.ASSETS.fetch(folderUrl);
    }

    return response;
  }
};
