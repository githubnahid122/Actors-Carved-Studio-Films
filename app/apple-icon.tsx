import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon — larger version of the gold "AC" monogram for iOS home-screen bookmarks. */
export default function AppleIcon() {
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
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "-2px",
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
