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

export interface DemoImageProps {
  filename: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export function DemoImage({ filename, alt, className = "" }: DemoImageProps) {
  const exists = demoImageExists(filename);

  if (exists) {
    return (
      <Image
        src={"/images/demo/" + filename}
        alt={alt}
        fill
        className={className}
      />
    );
  }

  // Render CSS placeholder tile when no image file exists
  const placeholderClass = `neutral dark-cream-panel relative overflow-hidden ${className}`;
  return (
    <div
      className={placeholderClass}
      style={{
        aspectRatio: "4 / 3",
        background: "var(--color-cream-surface)",
        border: "1px solid var(--color-border)",
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 flex items-center justify-center text-xs text-cream-surface/60"
      >
        Demo image placeholder
      </div>
    </div>
  );
}