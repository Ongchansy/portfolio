import ContactMe from "@/component/ContactMe";
import Education from "@/component/Education";
import Footer from "@/component/Footer";
import GoogleMap from "@/component/GoogleMap";
import Hero from "@/component/Hero";
import { ProjectsSection } from "@/component/ProjectsPortfolio";
import Service from "@/component/Service";
import TimeLine from "@/component/TimeLine";
export default function Home() {
  return (
    <>
      <div className="mb-20">
        <Hero />
      </div>
      <div className="mb-20">
        <Service />
      </div>
      <div className="mb-20">
        <Education />
      </div>
      <div className="min-h-screen bg-background py-12">
        <TimeLine />
      </div>
      <div className="px-4 mb-20">
        <h1 className="text-4xl font-bold text-center text-title mb-12">My Portfolio</h1>
        <ProjectsSection />
      </div>
      <div className="mb-20 px-8">
        <h1 className="text-4xl md:text-[3.2rem] font-bold text-center text-title mb-20">Contact Me</h1>
        <ContactMe />
      </div>
      <div className="mb-20">
        <GoogleMap />
      </div>
      <Footer />
    </>
  );
}
