import { ImageResponse } from "next/og";

export const alt = "Khanvex — Apps for better everyday experiences";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background: "#f4f8ff",
        color: "#15233b",
        display: "flex",
        fontFamily: "sans-serif",
        height: "100%",
        justifyContent: "center",
        padding: "80px",
        width: "100%",
      }}
    >
      <div style={{ alignItems: "flex-start", display: "flex", flexDirection: "column", gap: 34, width: "100%" }}>
        <div style={{ alignItems: "center", display: "flex", fontSize: 34, fontWeight: 700, gap: 18 }}>
          <div style={{ alignItems: "center", background: "#588bf8", borderRadius: 18, color: "white", display: "flex", height: 64, justifyContent: "center", width: 64 }}>K</div>
          Khanvex
        </div>
        <div style={{ fontSize: 74, fontWeight: 700, letterSpacing: "-3px", lineHeight: 1.08, maxWidth: 900 }}>
          Apps for better everyday experiences.
        </div>
        <div style={{ color: "#5c6b82", fontSize: 28 }}>Thoughtful mobile apps built around real needs.</div>
      </div>
    </div>,
    size,
  );
}
