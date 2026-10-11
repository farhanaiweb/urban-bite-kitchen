import Image from "next/image";
import fs from "fs";
import path from "path";

const DEMO_IMAGES_DIR = path.join(process.cwd(), "public", "images", "demo");

function demoImageExists(filename: string): boolean {
  try {
    return fs.existsSync(path.join(DEMO_IMAGES_DIR, filename));
  } catch {
    return false;
  }
}

interface DemoImageProps {
  filename: string;
  alt: string;
  sizes?: string;
  className?: string;
  variant?: "light" | "dark";
}

export function DemoImage({
  filename,
  alt,
  sizes = "100vw",
  className = "",
  variant = "light",
}: DemoImageProps) {
  const exists = demoImageExists(filename);

  if (exists) {
    return (
      <Image
        src={"/images/demo/" + filename}
        alt={alt}
        fill
        sizes={sizes}
        className={`${className} object-cover`}
        loading="lazy"
      />
    );
  }

  const lightPlaceholderClass = `relative overflow-hidden bg-cream-surface border border-border ${className}`;
  const darkPlaceholderClass = `relative overflow-hidden bg-black ${className}`;

  const lightIconColor = "text-text-muted";
  const darkIconColor = "text-cream/70";

  const lightLabelColor = "text-text-muted";
  const darkLabelColor = "text-cream/70";

  const placeholderClass = variant === "dark" ? darkPlaceholderClass : lightPlaceholderClass;
  const iconColor = variant === "dark" ? darkIconColor : lightIconColor;
  const labelColor = variant === "dark" ? darkLabelColor : lightLabelColor;

  return (
    <div
      className={placeholderClass}
      style={{ inset: 0, position: "absolute" }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <svg
          className={`h-8 w-8 ${iconColor}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 17" />
        </svg>
        <span className={`text-xs ${labelColor}`}>Demo image placeholder</span>
      </div>
    </div>
  );
}