import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // on utilisa ça lorsque les images sont dans /src/assets et là on peut importer les images par import lgexemple from "@/src/assets/"
  // ceci valable pour le blunder turbopack
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ['@svgr/webpack'],
  //   });
  //   return config;
  // },
};

export default nextConfig;
