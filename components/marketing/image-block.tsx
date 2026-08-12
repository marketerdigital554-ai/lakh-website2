import Image from "next/image";
import { cn } from "@/lib/utils";
import { imageRegistry, type ImageKey } from "@/lib/image-config";

type AspectRatio = "square" | "video" | "portrait" | "wide";

const aspectClass: Record<AspectRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[21/9]",
};

interface ImageBlockProps {
  imageKey: ImageKey;
  aspect?: AspectRatio;
  rounded?: "md" | "lg" | "xl" | "none";
  priority?: boolean;
  className?: string;
  /** Optional gradient overlay for text-over-image sections (hero, CTA). */
  overlay?: "dusk" | "none";
}

/**
 * The single entry point for every photo on the site. Swapping real project
 * photography later means editing `lib/image-config.ts` only — this
 * component, and every layout that uses it, stays untouched.
 */
export function ImageBlock({
  imageKey,
  aspect = "video",
  rounded = "lg",
  priority = false,
  overlay = "none",
  className,
}: ImageBlockProps) {
  const image = imageRegistry[imageKey];

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        aspectClass[aspect],
        rounded !== "none" && `rounded-${rounded}`,
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
        className="object-cover"
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
      {overlay === "dusk" && (
        <div aria-hidden className="absolute inset-0 bg-gradient-dusk" />
      )}
    </div>
  );
}
