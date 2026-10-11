import Image from "next/image";

const placeholderSize = 400;

export function DemoImagePlaceholder({
  alt,
  className,
  width = placeholderSize,
  height = Math.round(placeholderSize * 9 / 16),
}: {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}) {
  const dimensions = height !== undefined ? `h-${height}` : "";
  return (
    <div
      className={`relative w-full ${dimensions} rounded-md overflow-hidden ${className}`}
    >
      <Image
        src="/images/demo/placeholder-tile.webp"
        alt={alt}
        width={width}
        height={height}
        className="object-cover w-full h-full"
      />
    </div>
  );
}