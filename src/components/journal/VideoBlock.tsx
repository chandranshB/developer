interface VideoBlockProps {
  src: string;
  title?: string;
  caption?: string;
}

export function VideoBlock({ src, title = "Video", caption }: VideoBlockProps) {
  // Extract video ID from YouTube URL
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYouTubeId(src);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}` : src;

  return (
    <figure className="my-8">
      <div className="relative rounded-[20px] overflow-hidden shadow-lg aspect-video bg-black">
        <iframe
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-[15px] text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
