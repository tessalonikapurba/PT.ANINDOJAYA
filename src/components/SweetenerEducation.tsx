import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, HelpCircle, BrainCircuit, HeartPulse, Scale } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SweetenerEducation = () => {
  const { t } = useLanguage();

  const iconByIndex = [HelpCircle, BookOpen, BrainCircuit, Scale, HeartPulse];
  const items = (t('education.items') as Array<{ title: string; text: string }>) || [];

  return (
    <section id="sweetener-education" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {t('education.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, text }, idx) => {
            const Icon = iconByIndex[idx % iconByIndex.length];
            return (
            <Card key={title} className="card-gradient border-primary/20">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SweetenerEducation;


