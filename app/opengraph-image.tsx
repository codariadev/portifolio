import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Lucas Eduardo Alves, desenvolvedor full-stack — CodariaDev";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "linear-gradient(180deg, #081224 0%, #0e1a34 100%)",
          color: "#eef2f8",
          position: "relative",
        }}
      >
        <div style={{ width: 10, height: "100%", background: "#F5C89A", display: "flex" }} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 6,
              color: "#F5C89A",
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            CODARIADEV
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: -1.5,
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Lucas Eduardo Alves
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#c8d6e8",
              marginBottom: 28,
            }}
          >
            Desenvolvedor Full-Stack
          </div>
          <div
            style={{
              width: 180,
              height: 3,
              background: "#F5C89A",
              display: "flex",
              marginBottom: 22,
            }}
          />
          <div style={{ display: "flex", fontSize: 24, color: "#9aa8bf" }}>
            Next.js  ·  React  ·  Firebase
          </div>
        </div>
        <img
          src={logoSrc}
          width={110}
          height={110}
          style={{
            position: "absolute",
            top: 52,
            right: 72,
            objectFit: "contain",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 72,
            bottom: 48,
            display: "flex",
            fontSize: 24,
            color: "#9aa8bf",
          }}
        >
          codariadev.vercel.app
        </div>
      </div>
    ),
    { ...size },
  );
}
