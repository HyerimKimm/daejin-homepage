import type { NextConfig } from "next";

import path from "path";

const nextConfig: NextConfig = {
  sassOptions: {
    sourceMap: true,
    includePaths: [path.join(__dirname, "styles")],
    prependData: `
      @use "@/styles/_variables";
      @use "@/styles/_mixin";
    `,
  },
};

export default nextConfig;
