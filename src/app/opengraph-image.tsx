import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#071E3D",
          color: "#FAF8F2",
          padding: 80,
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            background: "#C69A45",
            marginBottom: 28,
          }}
        />
        <div style={{ fontSize: 28, letterSpacing: 6, color: "#E6C77A" }}>
          FUNDACIÓN AMELIA A.C.
        </div>
        <div style={{ fontSize: 64, marginTop: 16, lineHeight: 1.15 }}>
          {site.tagline}
        </div>
        <div style={{ fontSize: 24, marginTop: 28, color: "#d7deea" }}>
          {site.location}
        </div>
      </div>
    ),
    size,
  );
}
