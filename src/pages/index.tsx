import SkillsSection from '../components/skills';
import Navbar from '../components/navbar';
import HeroSection from '../components/hero';
import AboutSection from '../components/about';
import ExperienceSection from '../components/experience';
import ProjectSection from '../components/project';
import ContactSection from '../components/contact';
function LandingPage() {


  return (
    <div className="bg-[#121212] text-white font-sans min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection/>
      <SkillsSection />
      <ExperienceSection/>
      <ProjectSection/>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
}

export default LandingPage;