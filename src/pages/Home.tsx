
import Hero from "../components/home/Hero";
import AboutSection from "../components/home/AboutSection";
import FocusAreas from "../components/home/FocusAreas";
import Members from "../components/home/Members";
import Stats from "../components/home/Stats";
import MissionVision from "../components/home/MissionVision ";
import ContactHero from "../components/home/ContactHero";
import Homegallery from "../components/home/Homegallery";


const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Stats/>
      <MissionVision/>
      <FocusAreas />
      <Members />
      <Homegallery/>
      <ContactHero />
    </>
  );
};

export default Home;
