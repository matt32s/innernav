import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* dev-only: lets phones/other machines on the LAN load the dev server
     (HMR websocket included) without Next 16 cross-origin blocking */
  allowedDevOrigins: ["192.168.0.33", "localhost", "127.0.0.1"],
  async redirects() {
    // Keep the future pages in the project while they are unavailable.
    return ["/reprogramming", "/sessions", "/flight-deck"].map((source) => ({
      source,
      destination: "/",
      permanent: false,
    }));
  },
};

export default nextConfig;
