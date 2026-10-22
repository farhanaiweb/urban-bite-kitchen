import Image from "next/image";
import fs from "fs";
import path from "path";

const HERO_IMAGE_PATH = "/images/hero/hero-dish.webp";
const HERO_IMAGE_FS_PATH = path.join(process.cwd(), "public", "images", "hero", "hero-dish.webp");

function imageExists(): boolean {
  try {
    return fs.existsSync(HERO_IMAGE_FS_PATH);
  } catch {
    return false;
  }
}

export function HeroImage() {
  const hasImage = imageExists();

  return (
    <div className="relative w-full aspect-square max-h-[420px] mx-auto md:aspect-[4/5] lg:aspect-[1/1] max-h-none">
      <div className="absolute inset-0 bg-gradient-radial from-deep-red/10 via-black to-black rounded-2xl" aria-hidden="true" />
      <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl">
        {hasImage ? (
          <Image
            src={HERO_IMAGE_PATH}
            alt="Urban Bite Kitchen signature dish"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-contain object-center"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-cream-surface/30 border-2 border-cream-surface/40 rounded-2xl text-cream-surface p-8">
            <svg className="h-24 w-24 text-cream-surface/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-medium text-cream-surface text-center">Hero image placeholder</p>
            <p className="text-xs text-cream-surface/60 text-center">Add /images/hero/hero-dish.webp to replace</p>
          </div>
        )}
      </div>
    </div>
  );
}