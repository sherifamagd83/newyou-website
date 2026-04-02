import { img } from "@/lib/img";

interface PageHeroProps {
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
  objectPosition?: string;
}

export default function PageHero({ image, badge, title, subtitle, objectPosition = "center" }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[340px] md:min-h-[400px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={img(image)}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition }}
        />
        {/* Navy overlay for text readability */}
        <div className="absolute inset-0 bg-[#0B1829]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1829]/80 via-transparent to-[#0B1829]/30" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center py-16 md:py-24">
        {badge && (
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white/90 text-sm px-4 py-1.5 rounded-full mb-4 border border-white/10">
            {badge}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-white/85 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </section>
  );
}
