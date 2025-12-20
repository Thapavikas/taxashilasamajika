
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import FocusAreas from "../components/home/FocusAreas";
import Members from "../components/home/Members";
import Stats from "../components/home/Stats";
import MissionVision from "../components/home/MissionVision ";
import ContactHero from "../components/home/ContactHero";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Stats/>
      <MissionVision/>
      <FocusAreas />
      <Members />
      <ContactHero />
    </>
  );
};

export default Home;
