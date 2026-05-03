import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import TransformationSection from '@/components/sections/TransformationSection';
import HabitsSection from '@/components/sections/HabitsSection';
import ExerciseLibrary from '@/components/sections/ExerciseLibrary';
import NutritionSection from '@/components/sections/NutritionSection';
import BlogSection from '@/components/sections/BlogSection';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TransformationSection />
      <HabitsSection />
      <ExerciseLibrary />
      <NutritionSection />
      <BlogSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
