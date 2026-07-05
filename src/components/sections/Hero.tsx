import { profile } from '../../content/profile';

export function Hero() {
  return (
    <header className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-16 max-w-5xl mx-auto">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-white"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-900">{profile.name}</h1>
        <p className="mt-2 text-xl text-brand-600">{profile.title}</p>
        {profile.location && (
          <p className="mt-1 text-sm text-brand-400">{profile.location}</p>
        )}
        <div className="mt-6 flex gap-3 justify-center md:justify-start flex-wrap">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="px-5 py-2 rounded-full bg-brand-800 text-white text-sm hover:bg-brand-600 transition-colors"
            >
              Contacto
            </a>
          )}
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-brand-800 text-brand-800 text-sm hover:bg-brand-100 transition-colors"
            >
              Hoja de vida (PDF)
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
