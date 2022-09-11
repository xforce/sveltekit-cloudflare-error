import cloudflareWorkers from "@sveltejs/adapter-cloudflare-workers";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: cloudflareWorkers(),
  },
};

export default config;
