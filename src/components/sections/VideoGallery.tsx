import { SectionWrapper } from '../ui/SectionWrapper';
import { YoutubeEmbed } from '../ui/YoutubeEmbed';
import { videos } from '../../content/videos';

export function VideoGallery() {
  // Los videos destacados (featured: true) se muestran primero.
  const sorted = [...videos].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <SectionWrapper id="videos" title="Videos" subtitle="Conciertos, masterclasses y muestras de trabajo">
      <div className="grid md:grid-cols-2 gap-8">
        {sorted.map((video) => (
          <div key={video.id}>
            <YoutubeEmbed youtubeId={video.youtubeId} title={video.title} />
            <h4 className="mt-3 font-semibold text-brand-900">{video.title}</h4>
            {video.description && <p className="text-sm text-brand-600">{video.description}</p>}
            {video.tags && video.tags.length > 0 && (
              <div className="mt-2 flex gap-2 flex-wrap">
                {video.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 bg-brand-100 text-brand-800 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
