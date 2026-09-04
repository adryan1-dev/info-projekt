import { ImageResponse } from "next/og";

export const alt = "Info Projekt, fibra no Vale do Jequitinhonha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#12100e",
          color: "#f7f4f2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
        }}
      >
        <div
          style={{
            width: 72,
            height: 8,
            background: "#e10600",
            borderRadius: 4,
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 72, letterSpacing: -2, lineHeight: 1 }}>
            Info Projekt
          </div>
          <div style={{ fontSize: 32, color: "#c4b8ae", letterSpacing: -0.4 }}>
            Fibra no Vale do Jequitinhonha
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
