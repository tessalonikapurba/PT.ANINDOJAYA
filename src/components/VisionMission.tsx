import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionMission = () => {
  const { t } = useLanguage();
  return (
    <section id="vision-mission" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {t('visionMission.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('visionMission.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="card-gradient border-primary/30 hover:shadow-hover transition-smooth group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Eye className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">{t('visionMission.vision.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground leading-relaxed text-center">
                {t('visionMission.vision.description')}
              </p>
              
              <div className="mt-6 p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                <p className="text-sm text-primary font-medium">
                  "{t('visionMission.vision.quote')}"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="card-gradient border-accent-red/30 hover:shadow-hover transition-smooth group">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                <Target className="w-8 h-8 text-accent-red-foreground" />
              </div>
              <CardTitle className="text-2xl font-bold text-accent-red">{t('visionMission.mission.title')}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {t('visionMission.mission.items').map((item: string, index: number) => (
                  <div key={index} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-accent-red mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent-red/5 rounded-lg border-l-4 border-accent-red">
                <p className="text-sm text-accent-red font-medium">
                  "{t('visionMission.mission.quote')}"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;