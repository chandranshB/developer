import { ImageWithFallback } from "../imageFallback/ImageWithFallback";

interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  size?: "small" | "medium" | "full";
}

export function ImageBlock({ src, alt, caption, size = "full" }: ImageBlockProps) {
  const sizeClasses = {
    small: "max-w-[400px]",
    medium: "max-w-[600px]",
    full: "w-full",
  };

  return (
    <figure className={`my-8 ${sizeClasses[size]} mx-auto`}>
      <div className="rounded-[20px] overflow-hidden shadow-lg">
        <ImageWithFallback src={src} alt={alt} className="w-full h-auto" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[15px] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
