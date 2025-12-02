"use client";

export default function ArrowIcon({
  width = 20,
  height = 20,
  color = "currentColor",
  className = "",
  rotate = 0,
}: {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
  rotate?: 0 | 90 | 180 | 270;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: `rotate(${rotate}deg)`,
        transition: `all 0.1s ease-in-out`,
      }}
    >
      <mask
        id="mask0_343_440"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="-1"
        y="0"
        width="25"
        height="24"
      >
        <path
          d="M9.99986 17L14.9999 12.0001L9.99986 7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_343_440)">
        <rect x="-0.000137329" width="24" height="24" fill={color} />
      </g>
    </svg>
  );
}
