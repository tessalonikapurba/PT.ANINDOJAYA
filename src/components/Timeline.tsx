import { useLanguage } from '@/contexts/LanguageContext';
import bgAnindo from '@/assets/anindo-jaya.jpg';
import anindoLogo from '@/assets/anindojaya-logo.jpg';

const Timeline = () => {
  const { t } = useLanguage();

  const timelineEvents = [
    {
      year: '1993',
      title: t('timeline.events.founded.title'),
      description: t('timeline.events.founded.description'),
      icon: '🏢'
    },
    {
      year: '1993-1997',
      title: t('timeline.events.furniture.title'),
      description: t('timeline.events.furniture.description'),
      icon: '🪑'
    },
    {
      year: '1997',
      title: t('timeline.events.pharmaceutical.title'),
      description: t('timeline.events.pharmaceutical.description'),
      icon: '💊'
    },
    {
      year: '1981-Present',
      title: t('timeline.events.expertise.title'),
      description: t('timeline.events.expertise.description'),
      icon: '🔬'
    },
    {
      year: 'Late 2025',
      title: t('timeline.events.sweetener.title'),
      description: t('timeline.events.sweetener.description'),
      icon: '🍯'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('timeline.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('timeline.subtitle')}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-red to-primary transform -translate-y-1/2 hidden lg:block" />
          
          {/* Timeline Events */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Node */}
                <div className="flex flex-col items-center lg:items-center">
                  <div className="relative z-10 w-16 h-16 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg mb-4 hover:scale-110 transition-smooth">
                    <span className="text-2xl">{event.icon}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl shadow-card p-6 border border-primary/20 hover:shadow-hover transition-smooth max-w-sm">
                    <div className="text-center">
                      <div className="text-sm font-bold text-primary mb-2 bg-primary/10 rounded-full px-3 py-1 inline-block">
                        {event.year}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Vertical line for mobile */}
                {index < timelineEvents.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 top-16 w-1 h-8 bg-primary/30 transform -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Image placed between chronology and vision */}
        <div className="my-12">
          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img
              src={bgAnindo}
              alt="PT. Anindojaya Swakarsa"
              className="w-full rounded-xl shadow-lg"
              loading="lazy"
            />
            <div className="flex justify-center">
              <img
                src={anindoLogo}
                alt="AIJS Symbol of Blessing"
                className="w-56 h-56 object-contain rounded-full shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Vision Quote */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-primary/5 to-accent-red/5 rounded-2xl border border-primary/20">
            <p className="text-lg italic text-muted-foreground leading-relaxed">
              "{t('timeline.visionQuote')}"
            </p>
            <p className="text-sm text-primary font-semibold mt-4">
              - {t('timeline.founderName')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

