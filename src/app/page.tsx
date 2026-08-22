import { getResumeData } from '@/lib/resume';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import EngineeringProfile from '@/components/sections/EngineeringProfile';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import SignatureFlow from '@/components/sections/SignatureFlow';
import Certifications from '@/components/sections/Certifications';
import Education from '@/components/sections/Education';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const data = getResumeData();

  return (
    <>
      <Navbar name={data.profile.name} role={data.profile.title} />
      <main>
        <Hero profile={data.profile} skills={data.skills} />
        <About about={data.about} profile={data.profile} skills={data.skills} />
        <EngineeringProfile skills={data.skills} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <SignatureFlow skills={data.skills} />
        {data.settings.showCertifications && (
          <Certifications certifications={data.certifications} />
        )}
        {data.settings.showEducation && <Education education={data.education} />}
        <Contact profile={data.profile} social={data.social} />
      </main>
      <Footer profile={data.profile} />
    </>
  );
}
