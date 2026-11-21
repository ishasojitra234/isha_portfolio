import { ImageResponse } from "next/og";

export const alt = "Isha Sojitra — Odoo Backend Developer";
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
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(circle at 82% 18%, #754050 0, transparent 34%), #35121f",
          color: "#fbf7f0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 4 }}>
          ISHA SOJITRA <span style={{ color: "#d9a1a5", marginLeft: 18 }}>✳</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ color: "#d9a1a5", fontSize: 23, letterSpacing: 5 }}>
            ODOO BACKEND DEVELOPER
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              lineHeight: 1.08,
              maxWidth: 950,
            }}
          >
            <span>Thoughtful ERP.</span>
            <span>Built to work better.</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#e9d8d6" }}>
          Python · Odoo · Integrations · Surat, India
        </div>
      </div>
    ),
    { ...size },
  );
}
