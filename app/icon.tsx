import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Generated brand favicon — a carved gold "AC" monogram on the studio's near-black ground. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          border: "2px solid #c9a24b",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 32,
            fontWeight: 700,
            letterSpacing: "-1px",
            color: "#c9a24b",
            fontFamily: "Georgia, serif",
          }}
        >
          AC
        </div>
      </div>
    ),
    { ...size },
  );
}
