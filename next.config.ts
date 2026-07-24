import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* dev-only: lets phones/other machines on the LAN load the dev server
     (HMR websocket included) without Next 16 cross-origin blocking */
  allowedDevOrigins: ["192.168.0.33", "localhost", "127.0.0.1"],
};

export default nextConfig;
