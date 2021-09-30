import Layout from "../layout/Layout";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import About from "../components/About/About";
import Accomplishments from "../components/Accomplishments/Accomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import SectionGrid from "../layout/SectionGrid";
import SectionFlex from "../layout/SectionFlex";

export default function Home() {
  return (
    <Layout>
      <SectionGrid>
        <Hero />
        <BgAnimation />
      </SectionGrid>
      <SectionFlex>
        <About />
      </SectionFlex>
      <SectionFlex>
        <Projects />
      </SectionFlex>
      <SectionFlex>
        <Technologies />
      </SectionFlex>
      <SectionFlex>
        <Accomplishments />
      </SectionFlex>
    </Layout>
  );
}
