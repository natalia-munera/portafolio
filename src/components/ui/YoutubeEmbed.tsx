interface YoutubeEmbedProps {
  youtubeId: string;
  title: string;
}

// Embed responsivo de YouTube. Recibe solo el ID del video,
// nunca la URL completa, para mantener los datos de content/videos.ts limpios.
export function YoutubeEmbed({ youtubeId, title }: YoutubeEmbedProps) {
  return (
    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-brand-100">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
