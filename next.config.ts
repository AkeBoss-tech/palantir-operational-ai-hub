import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubPages ? "/palantir-operational-ai-hub" : "",
  assetPrefix: isGitHubPages ? "/palantir-operational-ai-hub/" : "",
};

export default nextConfig;
