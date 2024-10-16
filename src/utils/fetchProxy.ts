export const fetchSVG = async (srcURL: string) => {
  const proxyURL = import.meta.env.VITE_PROXY_URL;
  if (!proxyURL) {
    throw Error("Proxy URL missing!!!");
  }
  const proxyWithSearch = new URL(proxyURL);
  proxyWithSearch.search = `url=${srcURL}`;

  const resp = await fetch(proxyWithSearch);
  if (resp.ok) return resp.text();
  else {
    console.log(resp);
    throw Error("wrong response...");
  }
};
