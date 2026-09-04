"use client";

import { useId } from "react";

export function FiberOverlay() {
  const uid = useId().replace(/:/g, "");
  const glow = `fiber-glow-${uid}`;
  const core = `fiber-core-${uid}`;

  return (
    <svg
      className="fiber"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={glow} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ee1c25" stopOpacity="0" />
          <stop offset="42%" stopColor="#ff4d55" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#ee1c25" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={core} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff5f5" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round">
        <path
          className="fiber-glow fiber-a"
          stroke={`url(#${glow})`}
          d="M-40 620 C 220 540, 380 780, 640 640 S 1080 420, 1500 510"
        />
        <path
          className="fiber-core fiber-a"
          stroke={`url(#${core})`}
          d="M-40 620 C 220 540, 380 780, 640 640 S 1080 420, 1500 510"
        />
        <path
          className="fiber-glow fiber-b"
          stroke={`url(#${glow})`}
          d="M-80 240 C 260 180, 420 360, 720 220 S 1180 80, 1520 190"
        />
        <path
          className="fiber-core fiber-b"
          stroke={`url(#${core})`}
          d="M-80 240 C 260 180, 420 360, 720 220 S 1180 80, 1520 190"
        />
        <path
          className="fiber-glow fiber-c"
          stroke={`url(#${glow})`}
          d="M 180 980 C 360 760, 520 820, 780 680 S 1200 760, 1460 600"
        />
        <path
          className="fiber-core fiber-c"
          stroke={`url(#${core})`}
          d="M 180 980 C 360 760, 520 820, 780 680 S 1200 760, 1460 600"
        />
      </g>
      <g className="fiber-nodes">
        <circle className="fiber-node" cx="640" cy="640" r="3.5" />
        <circle className="fiber-node" cx="720" cy="220" r="3" />
        <circle className="fiber-node" cx="780" cy="680" r="2.5" />
      </g>
    </svg>
  );
}
