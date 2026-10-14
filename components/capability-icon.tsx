type CapabilityIconProps = {
  index: number;
};

export function CapabilityIcon({ index }: CapabilityIconProps) {
  const commonProps = {
    "aria-hidden": true,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  if (index === 0) {
    return (
      <svg {...commonProps}>
        <circle cx="11" cy="11" r="6" />
        <path d="m16 16 4 4M8.5 9h5M8.5 12h3.5" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg {...commonProps}>
        <path d="M6 3.5h9.5A2.5 2.5 0 0 1 18 6v14.5H8.5A2.5 2.5 0 0 1 6 18V3.5Z" />
        <path d="M6 18c0-1.38 1.12-2.5 2.5-2.5H18M10 8h4M10 11h3" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg {...commonProps}>
        <rect height="16" rx="2.5" width="17" x="3.5" y="5" />
        <path d="M8 3v4M16 3v4M3.5 9.5h17M8 13h3M8 16.5h6" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="13" r="8" />
        <path d="M12 9v4l2.5 1.5M9 3h6" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20V8" />
      <path d="m4 7 6-4 6 6 6-4" />
    </svg>
  );
}
