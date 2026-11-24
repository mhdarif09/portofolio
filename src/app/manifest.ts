import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Arif Rahmad S. — Full-Stack Developer",
    short_name: "Muhammad Arif",
    description:
      "Portfolio of Muhammad Arif Rahmad S., a full-stack developer in Palembang, Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2efe7",
    theme_color: "#171714",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
