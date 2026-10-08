import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import aboutImage from '@/assets/owner-standing.jpg';
import coOwnerImage from '@/assets/co-owner-standing.jpeg';

const About = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: Users,
      title: t('about.features.expertTeam.title'),
      description: t('about.features.expertTeam.description')
    },
    {
      icon: Award,
      title: t('about.features.qualityCommitment.title'),
      description: t('about.features.qualityCommitment.description')
    },
    {
      icon: Globe,
      title: t('about.features.industryInnovation.title'),
      description: t('about.features.industryInnovation.description')
    },
    {
      icon: Heart,
      title: t('about.features.healthFocus.title'),
      description: t('about.features.healthFocus.description')
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="card-gradient border-primary/20 hover:shadow-card transition-smooth">
                  <CardContent className="p-4">
                    <feature.icon className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Owner Image */}
              <div className="text-center">
                <div className="rounded-2xl overflow-hidden shadow-elegant mb-4">
                  <img
                    src={aboutImage}
                    alt="Owner of PT. Anindojaya Swakarsa"
                    className="w-full h-[400px] object-cover object-center"
                  />
                </div>
                <h4 className="text-xl font-light text-foreground tracking-wide font-serif">{t('about.ownerName')}</h4>
                <p className="text-sm text-muted-foreground italic mt-1">{t('about.ownerTitle')}</p>
              </div>
              
              {/* Co-Owner Image */}
              <div className="text-center">
                <div className="rounded-2xl overflow-hidden shadow-elegant mb-4">
                  <img
                    src={coOwnerImage}
                    alt="Co-owner of PT. Anindojaya Swakarsa"
                    className="w-full h-[400px] object-cover object-center"
                  />
                </div>
                <h4 className="text-xl font-light text-foreground tracking-wide font-serif">{t('about.coOwnerName')}</h4>
                <p className="text-sm text-muted-foreground italic mt-1">{t('about.coOwnerTitle')}</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary rounded-full opacity-20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-red rounded-full opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;